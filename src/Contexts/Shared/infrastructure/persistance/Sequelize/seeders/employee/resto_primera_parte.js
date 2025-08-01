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

const restoPrimeraParte = [
	{
		userName: 'magraz'.toLowerCase(),
		name: capitalCadena('MARCO ANTONIO'),
		lastName: capitalCadena('AGRAZ PABON'),
		type: 'regular',
		email: 'magraz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 198,
		nationality: 'V'.toUpperCase(),
		cedula: 10754132,
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
		userName: 'hrosales'.toLowerCase(),
		name: capitalCadena('HECTOR EMILIO'),
		lastName: capitalCadena('ROSALES GUILLEN'),
		type: 'regular',
		email: 'hrosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3434,
		nationality: 'V'.toUpperCase(),
		cedula: 13322283,
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
		userName: 'yorgonzalez'.toLowerCase(),
		name: capitalCadena('YORNY JAVIER'),
		lastName: capitalCadena('GONZALEZ YSTURIZ'),
		type: 'regular',
		email: 'yorgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6086,
		nationality: 'V'.toUpperCase(),
		cedula: 12683119,
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
		userName: 'frankortega'.toLowerCase(),
		name: capitalCadena('FRANKY ALEJANDRO'),
		lastName: capitalCadena('ORTEGA CORONADO'),
		type: 'regular',
		email: 'frankortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7677,
		nationality: 'V'.toUpperCase(),
		cedula: 15373844,
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
		userName: 'jomejia'.toLowerCase(),
		name: capitalCadena('JOSE ANGEL'),
		lastName: capitalCadena('MEJIA ASCANIO'),
		type: 'regular',
		email: 'jomejia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8349,
		nationality: 'V'.toUpperCase(),
		cedula: 17773111,
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
		userName: 'ysolorzano'.toLowerCase(),
		name: capitalCadena('YEFERSON MOISES'),
		lastName: capitalCadena('SOLORZANO OSES'),
		type: 'regular',
		email: 'ysolorzano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10644,
		nationality: 'V'.toUpperCase(),
		cedula: 20211169,
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
		userName: 'orondon'.toLowerCase(),
		name: capitalCadena('OMAIRA ROSARIO'),
		lastName: capitalCadena('RONDON QUINTERO'),
		type: 'regular',
		email: 'orondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2474,
		nationality: 'V'.toUpperCase(),
		cedula: 6971914,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erchirinos'.toLowerCase(),
		name: capitalCadena('ERIKA COROMOTO'),
		lastName: capitalCadena('CHIRINOS LEAL'),
		type: 'regular',
		email: 'erchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7749,
		nationality: 'V'.toUpperCase(),
		cedula: 17599724,
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
		userName: 'omelchor'.toLowerCase(),
		name: capitalCadena('OMAGDY ALEXANDRA'),
		lastName: capitalCadena('MELCHOR IBARRA'),
		type: 'regular',
		email: 'omelchor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8956,
		nationality: 'V'.toUpperCase(),
		cedula: 13245279,
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
		userName: 'ylabrador'.toLowerCase(),
		name: capitalCadena('YRIS ALISMARY'),
		lastName: capitalCadena('LABRADOR DE SALAS'),
		type: 'regular',
		email: 'ylabrador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12648,
		nationality: 'V'.toUpperCase(),
		cedula: 12852499,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vdelgado'.toLowerCase(),
		name: capitalCadena('VILMA MARGARITA'),
		lastName: capitalCadena('DELGADO DE GUTIERREZ'),
		type: 'regular',
		email: 'vdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13440,
		nationality: 'V'.toUpperCase(),
		cedula: 4461875,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. REGIONAL DE NEGOCIOS SECTOR PÚBLICO CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'baraque'.toLowerCase(),
		name: capitalCadena('BEATRIZ '),
		lastName: capitalCadena('ARAQUE GUERRERO'),
		type: 'regular',
		email: 'baraque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13498,
		nationality: 'V'.toUpperCase(),
		cedula: 16049924,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. REGIONAL DE NEGOCIOS SECTOR PÚBLICO CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncardenas'.toLowerCase(),
		name: capitalCadena('NORELLYS NEXDIMAR'),
		lastName: capitalCadena('CARDENAS GUEVARA'),
		type: 'regular',
		email: 'ncardenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13655,
		nationality: 'V'.toUpperCase(),
		cedula: 15215492,
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
		userName: 'kkeller'.toLowerCase(),
		name: capitalCadena('KAREN DESIREE'),
		lastName: capitalCadena('KELLER MARCANO'),
		type: 'regular',
		email: 'kkeller@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13856,
		nationality: 'V'.toUpperCase(),
		cedula: 18912552,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ARAGUA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymontezuma'.toLowerCase(),
		name: capitalCadena('YENSSY ALEJANDRO'),
		lastName: capitalCadena('MONTEZUMA MORILLO'),
		type: 'regular',
		email: 'ymontezuma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14780,
		nationality: 'V'.toUpperCase(),
		cedula: 21101276,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ARAGUA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josruiz'.toLowerCase(),
		name: capitalCadena('JOSE ALEXANDER'),
		lastName: capitalCadena('RUIZ LOPEZ'),
		type: 'regular',
		email: 'josruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15927,
		nationality: 'V'.toUpperCase(),
		cedula: 13103549,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CARABOBO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'earcia'.toLowerCase(),
		name: capitalCadena('ESTER MARLENI'),
		lastName: capitalCadena('ARCIA VELASQUEZ'),
		type: 'regular',
		email: 'earcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16176,
		nationality: 'V'.toUpperCase(),
		cedula: 12909023,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CARABOBO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dalfonso'.toLowerCase(),
		name: capitalCadena('DESIREE ALEJANDRA'),
		lastName: capitalCadena('ALFONZO '),
		type: 'regular',
		email: 'dalfonso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 197,
		nationality: 'V'.toUpperCase(),
		cedula: 13473925,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE NEGOCIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycastro'.toLowerCase(),
		name: capitalCadena('YAMEL MARGARITA'),
		lastName: capitalCadena('CASTRO VEGAS'),
		type: 'regular',
		email: 'ycastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 211,
		nationality: 'V'.toUpperCase(),
		cedula: 7063855,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sdurand'.toLowerCase(),
		name: capitalCadena('SORAIMA ROSA'),
		lastName: capitalCadena('DURAN RODRIGUEZ'),
		type: 'regular',
		email: 'sdurand@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 227,
		nationality: 'V'.toUpperCase(),
		cedula: 10861386,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maguirre'.toLowerCase(),
		name: capitalCadena('MARYORIS JOSEFINA'),
		lastName: capitalCadena('AGUIRRE BORJES'),
		type: 'regular',
		email: 'maguirre@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 237,
		nationality: 'V'.toUpperCase(),
		cedula: 10735531,
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
		userName: 'cgranadillo'.toLowerCase(),
		name: capitalCadena('RITA CAROLINA'),
		lastName: capitalCadena('GRANADILLO CASTILLO'),
		type: 'regular',
		email: 'cgranadillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 251,
		nationality: 'V'.toUpperCase(),
		cedula: 6568688,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcaracuzzi'.toLowerCase(),
		name: capitalCadena('DIANA NATIVIDAD'),
		lastName: capitalCadena('CARACUZZI PAREDES'),
		type: 'regular',
		email: 'dcaracuzzi@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 259,
		nationality: 'V'.toUpperCase(),
		cedula: 7413159,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vgraterol'.toLowerCase(),
		name: capitalCadena('VIONIXTZA TRINIDAD'),
		lastName: capitalCadena('GRATEROL COLMENARES'),
		type: 'regular',
		email: 'vgraterol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 338,
		nationality: 'V'.toUpperCase(),
		cedula: 10321624,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'osanchez'.toLowerCase(),
		name: capitalCadena('ORLANDO ANTONIO'),
		lastName: capitalCadena('SANCHEZ QUIÑONEZ'),
		type: 'regular',
		email: 'osanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 414,
		nationality: 'V'.toUpperCase(),
		cedula: 11525362,
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
		userName: 'cfrias'.toLowerCase(),
		name: capitalCadena('CARLOS LUIS'),
		lastName: capitalCadena('FRIAS PACHECO'),
		type: 'regular',
		email: 'cfrias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12484,
		nationality: 'V'.toUpperCase(),
		cedula: 17366355,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hlopez'.toLowerCase(),
		name: capitalCadena('HERNAN JOSE'),
		lastName: capitalCadena('LOPEZ GIMENEZ'),
		type: 'regular',
		email: 'hlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 646,
		nationality: 'V'.toUpperCase(),
		cedula: 4378796,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'catovar'.toLowerCase(),
		name: capitalCadena('CARLOS EFREN'),
		lastName: capitalCadena('TOVAR MENDOZA'),
		type: 'regular',
		email: 'catovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 648,
		nationality: 'V'.toUpperCase(),
		cedula: 7105185,
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
		userName: 'carteaga'.toLowerCase(),
		name: capitalCadena('CELIA COROMOTO'),
		lastName: capitalCadena('ARTEAGA GARRIDO'),
		type: 'regular',
		email: 'carteaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 683,
		nationality: 'V'.toUpperCase(),
		cedula: 7581904,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mugarte'.toLowerCase(),
		name: capitalCadena('MARY CARMEN'),
		lastName: capitalCadena('UGARTE DUARTE'),
		type: 'regular',
		email: 'mugarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 788,
		nationality: 'V'.toUpperCase(),
		cedula: 7110384,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmerchan'.toLowerCase(),
		name: capitalCadena('CARLOS ENRIQUE'),
		lastName: capitalCadena('MERCHAN TARAZONA'),
		type: 'regular',
		email: 'cmerchan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 490,
		nationality: 'V'.toUpperCase(),
		cedula: 7196464,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pcastillo'.toLowerCase(),
		name: capitalCadena('PASTOR RAMON'),
		lastName: capitalCadena('CASTILLO OCHOA'),
		type: 'regular',
		email: 'pcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 913,
		nationality: 'V'.toUpperCase(),
		cedula: 14025006,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cchavez'.toLowerCase(),
		name: capitalCadena('CARMEN ELENA'),
		lastName: capitalCadena('CHAVEZ CHIRINOS'),
		type: 'regular',
		email: 'cchavez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1032,
		nationality: 'V'.toUpperCase(),
		cedula: 12023808,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asulbaran'.toLowerCase(),
		name: capitalCadena('ALBANO ENRIQUE'),
		lastName: capitalCadena('SULBARAN UZCATEGUI'),
		type: 'regular',
		email: 'asulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1101,
		nationality: 'V'.toUpperCase(),
		cedula: 5614343,
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
		userName: 'eangulo'.toLowerCase(),
		name: capitalCadena('ENMA MAYERLIN'),
		lastName: capitalCadena('ANGULO MARQUEZ'),
		type: 'regular',
		email: 'eangulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 784,
		nationality: 'V'.toUpperCase(),
		cedula: 12395503,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malfieri'.toLowerCase(),
		name: capitalCadena('MYRIAM ANNA'),
		lastName: capitalCadena('ALFIERI CIALDELLA'),
		type: 'regular',
		email: 'malfieri@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1273,
		nationality: 'V'.toUpperCase(),
		cedula: 11350183,
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
		userName: 'yrivas'.toLowerCase(),
		name: capitalCadena('YURITZA JOSEFINA'),
		lastName: capitalCadena('RIVAS RODRIGUEZ'),
		type: 'regular',
		email: 'yrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 816,
		nationality: 'V'.toUpperCase(),
		cedula: 10551960,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'leramos'.toLowerCase(),
		name: capitalCadena('LERIDA DEL VALLE'),
		lastName: capitalCadena('RAMOS VASQUEZ'),
		type: 'regular',
		email: 'leramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1370,
		nationality: 'V'.toUpperCase(),
		cedula: 14088981,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbarrios'.toLowerCase(),
		name: capitalCadena('BEATRIZ ELENA'),
		lastName: capitalCadena('BARRIOS SOSA'),
		type: 'regular',
		email: 'bbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 988,
		nationality: 'V'.toUpperCase(),
		cedula: 8810940,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmonterrey'.toLowerCase(),
		name: capitalCadena('MORAIMA JOSEFINA'),
		lastName: capitalCadena('MONTERREY CASTILLO'),
		type: 'regular',
		email: 'mmonterrey@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1505,
		nationality: 'V'.toUpperCase(),
		cedula: 8839424,
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
		userName: 'ucampos'.toLowerCase(),
		name: capitalCadena('UBALDA JOSEFINA'),
		lastName: capitalCadena('CAMPOS GODOY'),
		type: 'regular',
		email: 'ucampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1537,
		nationality: 'V'.toUpperCase(),
		cedula: 7174457,
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
		userName: 'amaldonado'.toLowerCase(),
		name: capitalCadena('ANNI JASMIN'),
		lastName: capitalCadena('MALDONADO SARMIENTO'),
		type: 'regular',
		email: 'amaldonado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 989,
		nationality: 'V'.toUpperCase(),
		cedula: 11180998,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hsanchez'.toLowerCase(),
		name: capitalCadena('HECTOR EDUARDO'),
		lastName: capitalCadena('SANCHEZ QUIÑONEZ'),
		type: 'regular',
		email: 'hsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1680,
		nationality: 'V'.toUpperCase(),
		cedula: 15300960,
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
		userName: 'yotorrealba'.toLowerCase(),
		name: capitalCadena('YOLANDA DEL SOCORRO'),
		lastName: capitalCadena('TORREALBA MUJICA'),
		type: 'regular',
		email: 'yotorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1690,
		nationality: 'V'.toUpperCase(),
		cedula: 12924995,
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
		userName: 'magutierrez'.toLowerCase(),
		name: capitalCadena('MARIANN DE LOS ANGELES'),
		lastName: capitalCadena('GUTIERREZ CEDEÑO'),
		type: 'regular',
		email: 'magutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1933,
		nationality: 'V'.toUpperCase(),
		cedula: 15000384,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcarrillo'.toLowerCase(),
		name: capitalCadena('JOSLICE ALEJANDRO'),
		lastName: capitalCadena('CARRILLO GRANADOS'),
		type: 'regular',
		email: 'jcarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1464,
		nationality: 'V'.toUpperCase(),
		cedula: 13573163,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sescalona'.toLowerCase(),
		name: capitalCadena('SAMARA DEL CARMEN'),
		lastName: capitalCadena('ESCALONA MOSQUERA'),
		type: 'regular',
		email: 'sescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2230,
		nationality: 'V'.toUpperCase(),
		cedula: 11879233,
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
		userName: 'dcedeno'.toLowerCase(),
		name: capitalCadena('DAMILIS YANETH'),
		lastName: capitalCadena('CEDEÑO CONTRERAS'),
		type: 'regular',
		email: 'dcedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2253,
		nationality: 'V'.toUpperCase(),
		cedula: 15521889,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycedeno'.toLowerCase(),
		name: capitalCadena('YULIS ZAIDA'),
		lastName: capitalCadena('CEDEÑO DE LOPEZ'),
		type: 'regular',
		email: 'ycedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1585,
		nationality: 'V'.toUpperCase(),
		cedula: 5000990,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jurodriguez'.toLowerCase(),
		name: capitalCadena('JUAN BAUTISTA'),
		lastName: capitalCadena('RODRIGUEZ JAEN'),
		type: 'regular',
		email: 'jurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2061,
		nationality: 'V'.toUpperCase(),
		cedula: 6427663,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mefuentes'.toLowerCase(),
		name: capitalCadena('MELSYS JULISSA'),
		lastName: capitalCadena('FUENTES GRILLET'),
		type: 'regular',
		email: 'mefuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2626,
		nationality: 'V'.toUpperCase(),
		cedula: 13120952,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmonrroy'.toLowerCase(),
		name: capitalCadena('DEYGLIS CAROLINA'),
		lastName: capitalCadena('MONRROY BERMUDEZ'),
		type: 'regular',
		email: 'dmonrroy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2659,
		nationality: 'V'.toUpperCase(),
		cedula: 16024252,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsanchez'.toLowerCase(),
		name: capitalCadena('JANET COROMOTO'),
		lastName: capitalCadena('SANCHEZ ORTA'),
		type: 'regular',
		email: 'jsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2106,
		nationality: 'V'.toUpperCase(),
		cedula: 9483240,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmunoz'.toLowerCase(),
		name: capitalCadena('JUAN JOSE'),
		lastName: capitalCadena('MUÑOZ BRITO'),
		type: 'regular',
		email: 'jmunoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2123,
		nationality: 'V'.toUpperCase(),
		cedula: 15532331,
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
		userName: 'bcalanche'.toLowerCase(),
		name: capitalCadena('BELKIS YANET'),
		lastName: capitalCadena('CALANCHE HERNANDEZ'),
		type: 'regular',
		email: 'bcalanche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2287,
		nationality: 'V'.toUpperCase(),
		cedula: 14787746,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'grobles'.toLowerCase(),
		name: capitalCadena('GIOJANA CAROL'),
		lastName: capitalCadena('ROBLES MARTINEZ'),
		type: 'regular',
		email: 'grobles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2405,
		nationality: 'V'.toUpperCase(),
		cedula: 13443923,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysandoval'.toLowerCase(),
		name: capitalCadena('YERALDINI '),
		lastName: capitalCadena('SANDOVAL DELGADO'),
		type: 'regular',
		email: 'ysandoval@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2707,
		nationality: 'V'.toUpperCase(),
		cedula: 16551587,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccalanche'.toLowerCase(),
		name: capitalCadena('CIPRIANO '),
		lastName: capitalCadena('CALANCHE PACHECO'),
		type: 'regular',
		email: 'ccalanche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2963,
		nationality: 'V'.toUpperCase(),
		cedula: 9650892,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tazocar'.toLowerCase(),
		name: capitalCadena('TAXI YOANA'),
		lastName: capitalCadena('AZOCAR PINTO'),
		type: 'regular',
		email: 'tazocar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2718,
		nationality: 'V'.toUpperCase(),
		cedula: 15636248,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zalcala'.toLowerCase(),
		name: capitalCadena('ZURIMA JOSE'),
		lastName: capitalCadena('ALCALA YANEZ'),
		type: 'regular',
		email: 'zalcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3091,
		nationality: 'V'.toUpperCase(),
		cedula: 10662707,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrojas'.toLowerCase(),
		name: capitalCadena('RIZKA ROXANNA'),
		lastName: capitalCadena('ROJAS BARRETO'),
		type: 'regular',
		email: 'rrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3860,
		nationality: 'V'.toUpperCase(),
		cedula: 11935424,
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
		userName: 'ldatica'.toLowerCase(),
		name: capitalCadena('LUIS EDUARDO'),
		lastName: capitalCadena('DATICA GONZALEZ'),
		type: 'regular',
		email: 'ldatica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2853,
		nationality: 'V'.toUpperCase(),
		cedula: 14982728,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ruribe'.toLowerCase(),
		name: capitalCadena('RAQUEL '),
		lastName: capitalCadena('URIBE MARTINEZ'),
		type: 'regular',
		email: 'ruribe@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4042,
		nationality: 'V'.toUpperCase(),
		cedula: 4627252,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ffermin'.toLowerCase(),
		name: capitalCadena('FRANCIS ALEJANDRA'),
		lastName: capitalCadena('FERMIN ZAPATA'),
		type: 'regular',
		email: 'ffermin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3079,
		nationality: 'V'.toUpperCase(),
		cedula: 16391858,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fherrera'.toLowerCase(),
		name: capitalCadena('FRANCISCA ANTONIA'),
		lastName: capitalCadena('HERRERA MUÑOZ'),
		type: 'regular',
		email: 'fherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4071,
		nationality: 'V'.toUpperCase(),
		cedula: 10739395,
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
		userName: 'jeescalona'.toLowerCase(),
		name: capitalCadena('JESUS EDUARDO'),
		lastName: capitalCadena('ESCALONA SILVA'),
		type: 'regular',
		email: 'jeescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4110,
		nationality: 'V'.toUpperCase(),
		cedula: 7382003,
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
		userName: 'dquintero'.toLowerCase(),
		name: capitalCadena('DULCE MARIBEL'),
		lastName: capitalCadena('QUINTERO CASTILLO'),
		type: 'regular',
		email: 'dquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3449,
		nationality: 'V'.toUpperCase(),
		cedula: 12339450,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vcamacho'.toLowerCase(),
		name: capitalCadena('VERONICA ANDREINA'),
		lastName: capitalCadena('CAMACHO RIVERO'),
		type: 'regular',
		email: 'vcamacho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4313,
		nationality: 'V'.toUpperCase(),
		cedula: 17015957,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ancastro'.toLowerCase(),
		name: capitalCadena('ANTONIO ALBERTO'),
		lastName: capitalCadena('CASTRO RODRIGUEZ'),
		type: 'regular',
		email: 'ancastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4515,
		nationality: 'V'.toUpperCase(),
		cedula: 7383260,
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
		userName: 'dortiz'.toLowerCase(),
		name: capitalCadena('DESIREE DEL CARMEN'),
		lastName: capitalCadena('ORTIZ MENDEZ'),
		type: 'regular',
		email: 'dortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4587,
		nationality: 'V'.toUpperCase(),
		cedula: 17257350,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drico'.toLowerCase(),
		name: capitalCadena('DENNY '),
		lastName: capitalCadena('RICO RANGEL'),
		type: 'regular',
		email: 'drico@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4596,
		nationality: 'V'.toUpperCase(),
		cedula: 14099388,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybolivar'.toLowerCase(),
		name: capitalCadena('YAKELINES '),
		lastName: capitalCadena('BOLIVAR ROJAS'),
		type: 'regular',
		email: 'ybolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4648,
		nationality: 'V'.toUpperCase(),
		cedula: 13120395,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvargas'.toLowerCase(),
		name: capitalCadena('YUNGRY LISSETTE'),
		lastName: capitalCadena('VARGAS ARELLANO'),
		type: 'regular',
		email: 'yvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3850,
		nationality: 'V'.toUpperCase(),
		cedula: 14503516,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmayo'.toLowerCase(),
		name: capitalCadena('KATHERINE DESSIRE'),
		lastName: capitalCadena('MAYO OSORIO'),
		type: 'regular',
		email: 'kmayo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3985,
		nationality: 'V'.toUpperCase(),
		cedula: 20452948,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kehernandez'.toLowerCase(),
		name: capitalCadena('KERVIN DAVID'),
		lastName: capitalCadena('HERNANDEZ ARGUELLO'),
		type: 'regular',
		email: 'kehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4879,
		nationality: 'V'.toUpperCase(),
		cedula: 19428813,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaserrano'.toLowerCase(),
		name: capitalCadena('JAIRO JOSE'),
		lastName: capitalCadena('SERRANO ASCANIO'),
		type: 'regular',
		email: 'jaserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4945,
		nationality: 'V'.toUpperCase(),
		cedula: 12266671,
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
		userName: 'lcarrera'.toLowerCase(),
		name: capitalCadena('LUIS EMILIO'),
		lastName: capitalCadena('CARRERA BARBOZA'),
		type: 'regular',
		email: 'lcarrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5080,
		nationality: 'V'.toUpperCase(),
		cedula: 6460301,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymendez'.toLowerCase(),
		name: capitalCadena('YAENGLIZ DURLEY'),
		lastName: capitalCadena('MENDEZ RODRIGUEZ'),
		type: 'regular',
		email: 'ymendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5111,
		nationality: 'V'.toUpperCase(),
		cedula: 13084793,
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
		userName: 'ysumoza'.toLowerCase(),
		name: capitalCadena('YOSBELY BETANIA'),
		lastName: capitalCadena('SUMOZA AGUILAR'),
		type: 'regular',
		email: 'ysumoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5123,
		nationality: 'V'.toUpperCase(),
		cedula: 12315336,
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
		userName: 'jpina'.toLowerCase(),
		name: capitalCadena('JULIO RAMON'),
		lastName: capitalCadena('PIÑA AGUERO'),
		type: 'regular',
		email: 'jpina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5125,
		nationality: 'V'.toUpperCase(),
		cedula: 9616685,
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
		userName: 'gcumare'.toLowerCase(),
		name: capitalCadena('GLEIDYS MARIA'),
		lastName: capitalCadena('CUMARE DE BARRIOS'),
		type: 'regular',
		email: 'gcumare@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5139,
		nationality: 'V'.toUpperCase(),
		cedula: 15949030,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'psalas'.toLowerCase(),
		name: capitalCadena('PATRICIA DEL VALLE'),
		lastName: capitalCadena('SALAS DUARTE'),
		type: 'regular',
		email: 'psalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4111,
		nationality: 'V'.toUpperCase(),
		cedula: 12359070,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lparra'.toLowerCase(),
		name: capitalCadena('LUIS ENRIQUE'),
		lastName: capitalCadena('PARRA CALDERA'),
		type: 'regular',
		email: 'lparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4176,
		nationality: 'V'.toUpperCase(),
		cedula: 11979337,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycolina'.toLowerCase(),
		name: capitalCadena('YAJAIRA BEATRIZ'),
		lastName: capitalCadena('COLINA LEMUS'),
		type: 'regular',
		email: 'ycolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5291,
		nationality: 'V'.toUpperCase(),
		cedula: 7313913,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gdominguez'.toLowerCase(),
		name: capitalCadena('GABRIELA PATRICIA'),
		lastName: capitalCadena('DOMINGUEZ NOGUERA'),
		type: 'regular',
		email: 'gdominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5356,
		nationality: 'V'.toUpperCase(),
		cedula: 15657186,
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
		userName: 'joherrera'.toLowerCase(),
		name: capitalCadena('JOSE ALEJANDRO'),
		lastName: capitalCadena('HERRERA RIOS'),
		type: 'regular',
		email: 'joherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5360,
		nationality: 'V'.toUpperCase(),
		cedula: 13810956,
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
		userName: 'yvarela'.toLowerCase(),
		name: capitalCadena('YGOR EDUARDO'),
		lastName: capitalCadena('VARELA ACEVEDO'),
		type: 'regular',
		email: 'yvarela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4781,
		nationality: 'V'.toUpperCase(),
		cedula: 9648229,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ynunez'.toLowerCase(),
		name: capitalCadena('YELIKA CHIQUINQUIRA'),
		lastName: capitalCadena('NUÑEZ URDANETA'),
		type: 'regular',
		email: 'ynunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4836,
		nationality: 'V'.toUpperCase(),
		cedula: 10446961,
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
		userName: 'cbaute'.toLowerCase(),
		name: capitalCadena('CARMEN JULIA'),
		lastName: capitalCadena('BAUTE NAVAS'),
		type: 'regular',
		email: 'cbaute@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6059,
		nationality: 'V'.toUpperCase(),
		cedula: 12773442,
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
		userName: 'oreyes'.toLowerCase(),
		name: capitalCadena('ORIANA ANDREINA'),
		lastName: capitalCadena('REYES '),
		type: 'regular',
		email: 'oreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5258,
		nationality: 'V'.toUpperCase(),
		cedula: 21261453,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marurdaneta'.toLowerCase(),
		name: capitalCadena('MAURY ALEJANDRA'),
		lastName: capitalCadena('URDANETA WEFFER'),
		type: 'regular',
		email: 'marurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6130,
		nationality: 'V'.toUpperCase(),
		cedula: 15531422,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vorellana'.toLowerCase(),
		name: capitalCadena('VANESSA KARINA'),
		lastName: capitalCadena('ORELLANA MARQUEZ'),
		type: 'regular',
		email: 'vorellana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5307,
		nationality: 'V'.toUpperCase(),
		cedula: 17472789,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yurodriguez'.toLowerCase(),
		name: capitalCadena('YULEIDY EDUANDIS'),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'),
		type: 'regular',
		email: 'yurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6227,
		nationality: 'V'.toUpperCase(),
		cedula: 19666791,
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
		userName: 'iviloria'.toLowerCase(),
		name: capitalCadena('IRENE JOSEFINA'),
		lastName: capitalCadena('VILORIA LORETO'),
		type: 'regular',
		email: 'iviloria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5531,
		nationality: 'V'.toUpperCase(),
		cedula: 9664571,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpalacios'.toLowerCase(),
		name: capitalCadena('MILAGROS YAMILET'),
		lastName: capitalCadena('PALACIOS HENRIQUEZ'),
		type: 'regular',
		email: 'mpalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6274,
		nationality: 'V'.toUpperCase(),
		cedula: 13635233,
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
		userName: 'mochoa'.toLowerCase(),
		name: capitalCadena('MARIA YSABEL'),
		lastName: capitalCadena('OCHOA OJEDA'),
		type: 'regular',
		email: 'mochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6425,
		nationality: 'V'.toUpperCase(),
		cedula: 14664584,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cchacon'.toLowerCase(),
		name: capitalCadena('CECILIA DEL CARMEN'),
		lastName: capitalCadena('CHACON FLORES'),
		type: 'regular',
		email: 'cchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6511,
		nationality: 'V'.toUpperCase(),
		cedula: 17068716,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcrespo'.toLowerCase(),
		name: capitalCadena('LEIDY CRISTIMAR'),
		lastName: capitalCadena('CRESPO SAEZ'),
		type: 'regular',
		email: 'lcrespo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6158,
		nationality: 'V'.toUpperCase(),
		cedula: 17164034,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmedina'.toLowerCase(),
		name: capitalCadena('MARSSEL SAMUEL'),
		lastName: capitalCadena('MEDINA CONDE'),
		type: 'regular',
		email: 'mmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6233,
		nationality: 'V'.toUpperCase(),
		cedula: 12194413,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marivero'.toLowerCase(),
		name: capitalCadena('MAYERLIN '),
		lastName: capitalCadena('RIVEROS CACERES'),
		type: 'regular',
		email: 'marivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6777,
		nationality: 'V'.toUpperCase(),
		cedula: 12377406,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tnieve'.toLowerCase(),
		name: capitalCadena('NIEVE YUREIMA'),
		lastName: capitalCadena('TRINITARIO LOPEZ'),
		type: 'regular',
		email: 'tnieve@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6518,
		nationality: 'V'.toUpperCase(),
		cedula: 17215781,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joespinoza'.toLowerCase(),
		name: capitalCadena('JOCELINA NAZARET'),
		lastName: capitalCadena('ESPINOZA FIGUEROA'),
		type: 'regular',
		email: 'joespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6671,
		nationality: 'V'.toUpperCase(),
		cedula: 18551668,
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
		userName: 'deguzman'.toLowerCase(),
		name: capitalCadena('DEISY YAMILETH'),
		lastName: capitalCadena('GUZMAN GARCIA'),
		type: 'regular',
		email: 'deguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6753,
		nationality: 'V'.toUpperCase(),
		cedula: 15123802,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymunoz'.toLowerCase(),
		name: capitalCadena('YULIBYS BOLIVIA'),
		lastName: capitalCadena('MUÑOZ MARQUEZ'),
		type: 'regular',
		email: 'ymunoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7105,
		nationality: 'V'.toUpperCase(),
		cedula: 10550730,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wrodriguez'.toLowerCase(),
		name: capitalCadena('WILLMARI YARAHI'),
		lastName: capitalCadena('RODRIGUEZ HERNANDEZ'),
		type: 'regular',
		email: 'wrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7148,
		nationality: 'V'.toUpperCase(),
		cedula: 19897693,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jucontreras'.toLowerCase(),
		name: capitalCadena('JUNIOR ARGENIS'),
		lastName: capitalCadena('CONTRERAS GARCIA'),
		type: 'regular',
		email: 'jucontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7300,
		nationality: 'V'.toUpperCase(),
		cedula: 17968269,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfilindro'.toLowerCase(),
		name: capitalCadena('MARIA FERNANDA'),
		lastName: capitalCadena('FILINDRO CORONA'),
		type: 'regular',
		email: 'mfilindro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7313,
		nationality: 'V'.toUpperCase(),
		cedula: 18922027,
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
		userName: 'jdorante'.toLowerCase(),
		name: capitalCadena('JOAO PEDRO'),
		lastName: capitalCadena('DORANTE '),
		type: 'regular',
		email: 'jdorante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7318,
		nationality: 'V'.toUpperCase(),
		cedula: 18735061,
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
		userName: 'lmiranda'.toLowerCase(),
		name: capitalCadena('LISMAR MISDALY'),
		lastName: capitalCadena('MIRANDA ALVARADO'),
		type: 'regular',
		email: 'lmiranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7458,
		nationality: 'V'.toUpperCase(),
		cedula: 18500463,
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
		userName: 'mrojas'.toLowerCase(),
		name: capitalCadena('MARXIA STELLA'),
		lastName: capitalCadena('ROJAS QUINTERO'),
		type: 'regular',
		email: 'mrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7460,
		nationality: 'V'.toUpperCase(),
		cedula: 11359596,
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
		userName: 'jeigonzalez'.toLowerCase(),
		name: capitalCadena('JEISKARLY DEL VALLE'),
		lastName: capitalCadena('GONZALEZ SALAZAR'),
		type: 'regular',
		email: 'jeigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7517,
		nationality: 'V'.toUpperCase(),
		cedula: 19551703,
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
		userName: 'yguevara'.toLowerCase(),
		name: capitalCadena('YUBISAY NAKARY'),
		lastName: capitalCadena('GUEVARA RAMIREZ'),
		type: 'regular',
		email: 'yguevara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7556,
		nationality: 'V'.toUpperCase(),
		cedula: 12763248,
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
		userName: 'pgil'.toLowerCase(),
		name: capitalCadena('PILAR JOHANA'),
		lastName: capitalCadena('GIL '),
		type: 'regular',
		email: 'pgil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7629,
		nationality: 'V'.toUpperCase(),
		cedula: 18062125,
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
		userName: 'aimendoza'.toLowerCase(),
		name: capitalCadena('AIXA KATERIN'),
		lastName: capitalCadena('MENDOZA PASTRAN'),
		type: 'regular',
		email: 'aimendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8125,
		nationality: 'V'.toUpperCase(),
		cedula: 20249985,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ropinero'.toLowerCase(),
		name: capitalCadena('ROBERTO MIGUEL'),
		lastName: capitalCadena('PIÑERO GUTIERREZ'),
		type: 'regular',
		email: 'ropinero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8565,
		nationality: 'V'.toUpperCase(),
		cedula: 15890393,
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
		userName: 'anoguera'.toLowerCase(),
		name: capitalCadena('ANA ISABEL'),
		lastName: capitalCadena('NOGUERA DUARTE'),
		type: 'regular',
		email: 'anoguera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8571,
		nationality: 'V'.toUpperCase(),
		cedula: 18637393,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yohgonzalez'.toLowerCase(),
		name: capitalCadena('YOHANNYS DEL VALLE'),
		lastName: capitalCadena('GONZALEZ VASQUEZ'),
		type: 'regular',
		email: 'yohgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7296,
		nationality: 'V'.toUpperCase(),
		cedula: 13541030,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariaegonzalez'.toLowerCase(),
		name: capitalCadena('MARIA ELVIRA'),
		lastName: capitalCadena('GONZALEZ GUTIERREZ'),
		type: 'regular',
		email: 'mariaegonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7483,
		nationality: 'V'.toUpperCase(),
		cedula: 16546672,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'npena'.toLowerCase(),
		name: capitalCadena('NERY JOSEFINA'),
		lastName: capitalCadena('PENA DE LA ROSA'),
		type: 'regular',
		email: 'npena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8775,
		nationality: 'V'.toUpperCase(),
		cedula: 7120081,
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
		userName: 'sbalza'.toLowerCase(),
		name: capitalCadena('SILVEIRYS ROSANA'),
		lastName: capitalCadena('BALZA SOJO'),
		type: 'regular',
		email: 'sbalza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8849,
		nationality: 'V'.toUpperCase(),
		cedula: 19821525,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anaisanchez'.toLowerCase(),
		name: capitalCadena('ANAIVIS GRAYAMI'),
		lastName: capitalCadena('SANCHEZ PIÑATE'),
		type: 'regular',
		email: 'anaisanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8890,
		nationality: 'V'.toUpperCase(),
		cedula: 23528253,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bgaray'.toLowerCase(),
		name: capitalCadena('BRIYITH CLAIRETH'),
		lastName: capitalCadena('GARAY VIRGUEZ'),
		type: 'regular',
		email: 'bgaray@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9060,
		nationality: 'V'.toUpperCase(),
		cedula: 20319087,
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
		userName: 'kchacares'.toLowerCase(),
		name: capitalCadena('KAREN KAROLINA'),
		lastName: capitalCadena('CHACARES PADRON'),
		type: 'regular',
		email: 'kchacares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9140,
		nationality: 'V'.toUpperCase(),
		cedula: 20506601,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jemartinez'.toLowerCase(),
		name: capitalCadena('JEANETTE ANAIS'),
		lastName: capitalCadena('MARTINEZ RAMOS'),
		type: 'regular',
		email: 'jemartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9234,
		nationality: 'V'.toUpperCase(),
		cedula: 18475502,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbecerra'.toLowerCase(),
		name: capitalCadena('JULIO MOISES'),
		lastName: capitalCadena('BECERRA ARRIECHE'),
		type: 'regular',
		email: 'jbecerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9276,
		nationality: 'V'.toUpperCase(),
		cedula: 20236762,
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
		userName: 'ajallaro'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('JALLARO AULAR'),
		type: 'regular',
		email: 'ajallaro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9392,
		nationality: 'V'.toUpperCase(),
		cedula: 18438787,
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
		userName: 'yarellano'.toLowerCase(),
		name: capitalCadena('YUSLENIS MARIELA'),
		lastName: capitalCadena('ARELLANO ALVAREZ'),
		type: 'regular',
		email: 'yarellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9439,
		nationality: 'V'.toUpperCase(),
		cedula: 15964247,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'margarcia'.toLowerCase(),
		name: capitalCadena('MARIA ANGELICA'),
		lastName: capitalCadena('GARCIA TREJO'),
		type: 'regular',
		email: 'margarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8679,
		nationality: 'V'.toUpperCase(),
		cedula: 15739802,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rovelasquez'.toLowerCase(),
		name: capitalCadena('ROMINA DE LOS ANGELES'),
		lastName: capitalCadena('VELASQUEZ BERMUDEZ'),
		type: 'regular',
		email: 'rovelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8815,
		nationality: 'V'.toUpperCase(),
		cedula: 16037835,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yochacon'.toLowerCase(),
		name: capitalCadena('YOSMAR ELENA'),
		lastName: capitalCadena('CHACON CASTELLANOS'),
		type: 'regular',
		email: 'yochacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9517,
		nationality: 'V'.toUpperCase(),
		cedula: 9675365,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yusecastillo'.toLowerCase(),
		name: capitalCadena('YUSELI YERIDEE'),
		lastName: capitalCadena('CASTILLO MORON'),
		type: 'regular',
		email: 'yusecastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9230,
		nationality: 'V'.toUpperCase(),
		cedula: 20895607,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmoyetones'.toLowerCase(),
		name: capitalCadena('MANUEL VICENTE'),
		lastName: capitalCadena('MOYETONES PRADO'),
		type: 'regular',
		email: 'mmoyetones@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9445,
		nationality: 'V'.toUpperCase(),
		cedula: 8803765,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'santequera'.toLowerCase(),
		name: capitalCadena('SARAIS JOSEFINA'),
		lastName: capitalCadena('ANTEQUERA RUBIO'),
		type: 'regular',
		email: 'santequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9875,
		nationality: 'V'.toUpperCase(),
		cedula: 18059242,
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
		userName: 'irivero'.toLowerCase(),
		name: capitalCadena('IRISMAR '),
		lastName: capitalCadena('RIVERO AGUILERA'),
		type: 'regular',
		email: 'irivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9553,
		nationality: 'V'.toUpperCase(),
		cedula: 12122561,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aburgos'.toLowerCase(),
		name: capitalCadena('ANDREINA LISSET'),
		lastName: capitalCadena('BURGOS MUÑOZ'),
		type: 'regular',
		email: 'aburgos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10059,
		nationality: 'V'.toUpperCase(),
		cedula: 22942834,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmena'.toLowerCase(),
		name: capitalCadena('CHRISLEIDY YUDITH'),
		lastName: capitalCadena('MENA PEREZ'),
		type: 'regular',
		email: 'cmena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10064,
		nationality: 'V'.toUpperCase(),
		cedula: 24524452,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ajaraba'.toLowerCase(),
		name: capitalCadena('ALAM DANIEL'),
		lastName: capitalCadena('JARABA '),
		type: 'regular',
		email: 'ajaraba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10272,
		nationality: 'V'.toUpperCase(),
		cedula: 15227302,
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
		userName: 'igimenez'.toLowerCase(),
		name: capitalCadena('IRIS CAROLINA'),
		lastName: capitalCadena('GIMENEZ COLMENAREZ'),
		type: 'regular',
		email: 'igimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10282,
		nationality: 'V'.toUpperCase(),
		cedula: 22265330,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carlopez'.toLowerCase(),
		name: capitalCadena('CARLOS JESUS'),
		lastName: capitalCadena('LOPEZ VARGAS'),
		type: 'regular',
		email: 'carlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10303,
		nationality: 'V'.toUpperCase(),
		cedula: 18769404,
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
		userName: 'ocanas'.toLowerCase(),
		name: capitalCadena('OSCAR AQUILES'),
		lastName: capitalCadena('CAÑAS ESTEVES'),
		type: 'regular',
		email: 'ocanas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10312,
		nationality: 'V'.toUpperCase(),
		cedula: 11213217,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llanda'.toLowerCase(),
		name: capitalCadena('LEIDY LUDERCY'),
		lastName: capitalCadena('LANDA PALENCIA'),
		type: 'regular',
		email: 'llanda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10321,
		nationality: 'V'.toUpperCase(),
		cedula: 12745146,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfarias'.toLowerCase(),
		name: capitalCadena('MARIELYS DEL VALLE'),
		lastName: capitalCadena('FARIAS SERRA'),
		type: 'regular',
		email: 'mfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9666,
		nationality: 'V'.toUpperCase(),
		cedula: 20904036,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'azapata'.toLowerCase(),
		name: capitalCadena('ADARILYS YETZABETH'),
		lastName: capitalCadena('ZAPATA ORTEGA'),
		type: 'regular',
		email: 'azapata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10369,
		nationality: 'V'.toUpperCase(),
		cedula: 23411083,
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
		userName: 'anbarrios'.toLowerCase(),
		name: capitalCadena('ANTHONY ALEJANDRO'),
		lastName: capitalCadena('BARRIOS SALAZAR'),
		type: 'regular',
		email: 'anbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10417,
		nationality: 'V'.toUpperCase(),
		cedula: 22953394,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmendoza'.toLowerCase(),
		name: capitalCadena('MIRLA JOSEFINA'),
		lastName: capitalCadena('MENDOZA '),
		type: 'regular',
		email: 'mmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10504,
		nationality: 'V'.toUpperCase(),
		cedula: 7171871,
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
		userName: 'vapalma'.toLowerCase(),
		name: capitalCadena('VANESSA CAROLINA'),
		lastName: capitalCadena('PALMA HERNANDEZ'),
		type: 'regular',
		email: 'vapalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10090,
		nationality: 'V'.toUpperCase(),
		cedula: 25858320,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jarellano'.toLowerCase(),
		name: capitalCadena('JOSMAIL NAIRYN'),
		lastName: capitalCadena('ARELLANO PLATA'),
		type: 'regular',
		email: 'jarellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10611,
		nationality: 'V'.toUpperCase(),
		cedula: 19514975,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crosales'.toLowerCase(),
		name: capitalCadena('CARLOS ALFREDO'),
		lastName: capitalCadena('ROSALES PEDROZA'),
		type: 'regular',
		email: 'crosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10645,
		nationality: 'V'.toUpperCase(),
		cedula: 20593882,
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
		userName: 'sbracamonte'.toLowerCase(),
		name: capitalCadena('SILVANA LORENA'),
		lastName: capitalCadena('BRACAMONTE CASTILLO'),
		type: 'regular',
		email: 'sbracamonte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10694,
		nationality: 'V'.toUpperCase(),
		cedula: 14495382,
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
		userName: 'iespinoza'.toLowerCase(),
		name: capitalCadena('IRASEL DE JESUS'),
		lastName: capitalCadena('ESPINOZA NUÑEZ'),
		type: 'regular',
		email: 'iespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10773,
		nationality: 'V'.toUpperCase(),
		cedula: 19919337,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgalindez'.toLowerCase(),
		name: capitalCadena('CANDIDA CRISBERTH'),
		lastName: capitalCadena('GALINDEZ JIMENEZ'),
		type: 'regular',
		email: 'cgalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10505,
		nationality: 'V'.toUpperCase(),
		cedula: 19949749,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ftorres'.toLowerCase(),
		name: capitalCadena('FERNANDO ANTONIO'),
		lastName: capitalCadena('TORRES GONZALEZ'),
		type: 'regular',
		email: 'ftorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10842,
		nationality: 'V'.toUpperCase(),
		cedula: 11546603,
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
		userName: 'kasalazar'.toLowerCase(),
		name: capitalCadena('KAREN MAGDIEL'),
		lastName: capitalCadena('SALAZAR PIÑA'),
		type: 'regular',
		email: 'kasalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10852,
		nationality: 'V'.toUpperCase(),
		cedula: 20188816,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luparra'.toLowerCase(),
		name: capitalCadena('LUIS JOSE'),
		lastName: capitalCadena('PARRA RODRIGUEZ'),
		type: 'regular',
		email: 'luparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10879,
		nationality: 'V'.toUpperCase(),
		cedula: 22408083,
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
		userName: 'mimarquez'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('MARQUEZ MARQUEZ'),
		type: 'regular',
		email: 'mimarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10632,
		nationality: 'V'.toUpperCase(),
		cedula: 19804783,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmarcano'.toLowerCase(),
		name: capitalCadena('BEATRIZ CAROLINA'),
		lastName: capitalCadena('MARCANO BERMUDEZ'),
		type: 'regular',
		email: 'bmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10819,
		nationality: 'V'.toUpperCase(),
		cedula: 17419756,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mteixeira'.toLowerCase(),
		name: capitalCadena('MARSAN MARYCIELO'),
		lastName: capitalCadena('TEIXEIRA RADA'),
		type: 'regular',
		email: 'mteixeira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11015,
		nationality: 'V'.toUpperCase(),
		cedula: 24436843,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrodriguez'.toLowerCase(),
		name: capitalCadena('LORENA CARELYS'),
		lastName: capitalCadena('RODRIGUEZ PALACIOS'),
		type: 'regular',
		email: 'lrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11016,
		nationality: 'V'.toUpperCase(),
		cedula: 16748225,
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
		userName: 'mrivas'.toLowerCase(),
		name: capitalCadena('MARYELIS ANDREINA'),
		lastName: capitalCadena('RIVAS '),
		type: 'regular',
		email: 'mrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11020,
		nationality: 'V'.toUpperCase(),
		cedula: 15043767,
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
		userName: 'maygonzalez'.toLowerCase(),
		name: capitalCadena('MAYIRA DEL CARMEN'),
		lastName: capitalCadena('GONZALEZ LABRADOR'),
		type: 'regular',
		email: 'maygonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11027,
		nationality: 'V'.toUpperCase(),
		cedula: 26540017,
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
		userName: 'mmorales'.toLowerCase(),
		name: capitalCadena('MARIA FERNANDA'),
		lastName: capitalCadena('MORALES RODRIGUEZ'),
		type: 'regular',
		email: 'mmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11028,
		nationality: 'V'.toUpperCase(),
		cedula: 26831800,
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
		userName: 'yugamez'.toLowerCase(),
		name: capitalCadena('YUSDREY '),
		lastName: capitalCadena('GAMEZ BORGES'),
		type: 'regular',
		email: 'yugamez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11050,
		nationality: 'V'.toUpperCase(),
		cedula: 22958723,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kfernandez'.toLowerCase(),
		name: capitalCadena('KARIENNYS MARGARITA'),
		lastName: capitalCadena('FERNANDEZ GASCON'),
		type: 'regular',
		email: 'kfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11119,
		nationality: 'V'.toUpperCase(),
		cedula: 23605888,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marigarcia'.toLowerCase(),
		name: capitalCadena('MARIANNY DEL VALLE'),
		lastName: capitalCadena('GARCIA MARTINEZ'),
		type: 'regular',
		email: 'marigarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10893,
		nationality: 'V'.toUpperCase(),
		cedula: 19584266,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josearodriguez'.toLowerCase(),
		name: capitalCadena('JOSE ANDRES'),
		lastName: capitalCadena('RODRIGUEZ CHACARE'),
		type: 'regular',
		email: 'josearodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10984,
		nationality: 'V'.toUpperCase(),
		cedula: 27958389,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesulgarcia'.toLowerCase(),
		name: capitalCadena('JESULAY JACQUELINE'),
		lastName: capitalCadena('GARCIA DE MENDEZ'),
		type: 'regular',
		email: 'jesulgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11161,
		nationality: 'V'.toUpperCase(),
		cedula: 15610251,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gmorales'.toLowerCase(),
		name: capitalCadena('GENESIS REBECA'),
		lastName: capitalCadena('MORALES PEREZ'),
		type: 'regular',
		email: 'gmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11188,
		nationality: 'V'.toUpperCase(),
		cedula: 26386277,
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
		userName: 'mbolivar'.toLowerCase(),
		name: capitalCadena('MARIA EUGENIA'),
		lastName: capitalCadena('BOLIVAR ZAMBRANO'),
		type: 'regular',
		email: 'mbolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11194,
		nationality: 'V'.toUpperCase(),
		cedula: 9995807,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clhernandez'.toLowerCase(),
		name: capitalCadena('CLARIZA MARBELLA'),
		lastName: capitalCadena('HERNANDEZ '),
		type: 'regular',
		email: 'clhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11202,
		nationality: 'V'.toUpperCase(),
		cedula: 6340095,
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
		userName: 'omguzman'.toLowerCase(),
		name: capitalCadena('OMARLIN JOSEFINA'),
		lastName: capitalCadena('GUZMAN CASTILLO'),
		type: 'regular',
		email: 'omguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11010,
		nationality: 'V'.toUpperCase(),
		cedula: 20299999,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfigueredo'.toLowerCase(),
		name: capitalCadena('JULIO CESAR'),
		lastName: capitalCadena('FIGUEREDO CABRERA'),
		type: 'regular',
		email: 'jfigueredo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11047,
		nationality: 'V'.toUpperCase(),
		cedula: 15733875,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asposito'.toLowerCase(),
		name: capitalCadena('ANA DEL ROSARIO'),
		lastName: capitalCadena('SPOSITO HERRERA'),
		type: 'regular',
		email: 'asposito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11124,
		nationality: 'V'.toUpperCase(),
		cedula: 14038248,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cvarela'.toLowerCase(),
		name: capitalCadena('CARLA DESIREE'),
		lastName: capitalCadena('VARELA ORTEGA'),
		type: 'regular',
		email: 'cvarela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11279,
		nationality: 'V'.toUpperCase(),
		cedula: 16318026,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ibreto'.toLowerCase(),
		name: capitalCadena('IVON NATHALI'),
		lastName: capitalCadena('BRETO SANCHEZ'),
		type: 'regular',
		email: 'ibreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11125,
		nationality: 'V'.toUpperCase(),
		cedula: 23786398,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maperez'.toLowerCase(),
		name: capitalCadena('MARTHA YOLEIDA'),
		lastName: capitalCadena('PEREZ VIVAS'),
		type: 'regular',
		email: 'maperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11126,
		nationality: 'V'.toUpperCase(),
		cedula: 14577087,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecarrasco'.toLowerCase(),
		name: capitalCadena('ELIANA DEL VALLE'),
		lastName: capitalCadena('CARRASCO ALVARADO'),
		type: 'regular',
		email: 'ecarrasco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11308,
		nationality: 'V'.toUpperCase(),
		cedula: 20498547,
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
		userName: 'abolivar'.toLowerCase(),
		name: capitalCadena('ANDERSON JOSUE'),
		lastName: capitalCadena('BOLIVAR '),
		type: 'regular',
		email: 'abolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11230,
		nationality: 'V'.toUpperCase(),
		cedula: 20013385,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rleal'.toLowerCase(),
		name: capitalCadena('ROXEIDA JOSE'),
		lastName: capitalCadena('LEAL RAMIREZ'),
		type: 'regular',
		email: 'rleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11566,
		nationality: 'V'.toUpperCase(),
		cedula: 23425492,
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
		userName: 'smedina'.toLowerCase(),
		name: capitalCadena('SINAHI EUGENIA'),
		lastName: capitalCadena('MEDINA CORREA'),
		type: 'regular',
		email: 'smedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11568,
		nationality: 'V'.toUpperCase(),
		cedula: 20513815,
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
		userName: 'didelgado'.toLowerCase(),
		name: capitalCadena('DINALYS CELESTE'),
		lastName: capitalCadena('DELGADO FERNANDEZ'),
		type: 'regular',
		email: 'didelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11571,
		nationality: 'V'.toUpperCase(),
		cedula: 26374361,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'larocha'.toLowerCase(),
		name: capitalCadena('LAURA VALERIA'),
		lastName: capitalCadena('AROCHA ARAUJO'),
		type: 'regular',
		email: 'larocha@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11680,
		nationality: 'V'.toUpperCase(),
		cedula: 23621793,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dancedeno'.toLowerCase(),
		name: capitalCadena('DANIEL ALEXANDER'),
		lastName: capitalCadena('CEDEÑO ROJAS'),
		type: 'regular',
		email: 'dancedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11304,
		nationality: 'V'.toUpperCase(),
		cedula: 20324460,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erangel'.toLowerCase(),
		name: capitalCadena('EBONY JOSEFINA'),
		lastName: capitalCadena('RANGEL MARTINEZ'),
		type: 'regular',
		email: 'erangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11706,
		nationality: 'V'.toUpperCase(),
		cedula: 14999803,
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
		userName: 'yelopez'.toLowerCase(),
		name: capitalCadena('YECENIA ANDREINA'),
		lastName: capitalCadena('LOPEZ BRITO'),
		type: 'regular',
		email: 'yelopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11570,
		nationality: 'V'.toUpperCase(),
		cedula: 21340227,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbriceno'.toLowerCase(),
		name: capitalCadena('JOANGEL ANTONIO'),
		lastName: capitalCadena('BRICEÑO ROJAS'),
		type: 'regular',
		email: 'jbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11761,
		nationality: 'V'.toUpperCase(),
		cedula: 22047158,
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
		userName: 'mhenriquez'.toLowerCase(),
		name: capitalCadena('MARIA KARINA'),
		lastName: capitalCadena('HENRIQUEZ SEVILLA'),
		type: 'regular',
		email: 'mhenriquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11796,
		nationality: 'V'.toUpperCase(),
		cedula: 13235038,
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
		userName: 'zgrance'.toLowerCase(),
		name: capitalCadena('ZUNILDE ALEJANDRINA'),
		lastName: capitalCadena('GRANCE BENITEZ'),
		type: 'regular',
		email: 'zgrance@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11822,
		nationality: 'V'.toUpperCase(),
		cedula: 12335093,
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
		userName: 'esgomez'.toLowerCase(),
		name: capitalCadena('ESTHER DESIRETH'),
		lastName: capitalCadena('GOMEZ CANTILLO'),
		type: 'regular',
		email: 'esgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11773,
		nationality: 'V'.toUpperCase(),
		cedula: 19947192,
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
		userName: 'vleon'.toLowerCase(),
		name: capitalCadena('VANESSA JOSEFINA'),
		lastName: capitalCadena('LEON COSTERA'),
		type: 'regular',
		email: 'vleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11700,
		nationality: 'V'.toUpperCase(),
		cedula: 17702798,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bveloz'.toLowerCase(),
		name: capitalCadena('BELGICA RUSSORY'),
		lastName: capitalCadena('VELOZ BORGES'),
		type: 'regular',
		email: 'bveloz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11778,
		nationality: 'V'.toUpperCase(),
		cedula: 20759357,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anramos'.toLowerCase(),
		name: capitalCadena('ANGELICA YAMILETH'),
		lastName: capitalCadena('RAMOS DELGADO'),
		type: 'regular',
		email: 'anramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11780,
		nationality: 'V'.toUpperCase(),
		cedula: 27866302,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccaraballo'.toLowerCase(),
		name: capitalCadena('CARLOS ERNESTO'),
		lastName: capitalCadena('CARABALLO RODRIGUEZ'),
		type: 'regular',
		email: 'ccaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11793,
		nationality: 'V'.toUpperCase(),
		cedula: 17418507,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ovaquero'.toLowerCase(),
		name: capitalCadena('OVIDIO ANTONIO'),
		lastName: capitalCadena('VAQUERO NAVARRO'),
		type: 'regular',
		email: 'ovaquero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11932,
		nationality: 'V'.toUpperCase(),
		cedula: 11209406,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kdonaires'.toLowerCase(),
		name: capitalCadena('KELVIN EFRAIN'),
		lastName: capitalCadena('DONAIRES LLOVERA'),
		type: 'regular',
		email: 'kdonaires@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11962,
		nationality: 'V'.toUpperCase(),
		cedula: 24014692,
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
		userName: 'suherrera'.toLowerCase(),
		name: capitalCadena('SULIMAR JOSEFINA'),
		lastName: capitalCadena('HERRERA CASTRILLO'),
		type: 'regular',
		email: 'suherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11990,
		nationality: 'V'.toUpperCase(),
		cedula: 16553005,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pcastaneda'.toLowerCase(),
		name: capitalCadena('PATRICIA GERALDINE'),
		lastName: capitalCadena('CASTAÑEDA ACOSTA'),
		type: 'regular',
		email: 'pcastaneda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12024,
		nationality: 'V'.toUpperCase(),
		cedula: 19354134,
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
		userName: 'dtorres'.toLowerCase(),
		name: capitalCadena('DAMELIS '),
		lastName: capitalCadena('RUJANO TORRES'),
		type: 'regular',
		email: 'dtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12043,
		nationality: 'V'.toUpperCase(),
		cedula: 21171311,
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
		userName: 'glugo'.toLowerCase(),
		name: capitalCadena('GLORIA JOSEFINA'),
		lastName: capitalCadena('LUGO GARCIA'),
		type: 'regular',
		email: 'glugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11955,
		nationality: 'V'.toUpperCase(),
		cedula: 15555325,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dortega'.toLowerCase(),
		name: capitalCadena('DANA MARIANA'),
		lastName: capitalCadena('ORTEGA CABRERA'),
		type: 'regular',
		email: 'dortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11956,
		nationality: 'V'.toUpperCase(),
		cedula: 26486119,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yidrogo'.toLowerCase(),
		name: capitalCadena('YOLEIDA DE JESUS'),
		lastName: capitalCadena('IDROGO SALAS'),
		type: 'regular',
		email: 'yidrogo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12074,
		nationality: 'V'.toUpperCase(),
		cedula: 12109733,
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
		userName: 'lpena'.toLowerCase(),
		name: capitalCadena('LEOMARYS DEL VALLE'),
		lastName: capitalCadena('PEÑA ROJAS'),
		type: 'regular',
		email: 'lpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12070,
		nationality: 'V'.toUpperCase(),
		cedula: 27740538,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'peurquiola'.toLowerCase(),
		name: capitalCadena('PEDRO RAUL'),
		lastName: capitalCadena('URQUIOLA DELGADO'),
		type: 'regular',
		email: 'peurquiola@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12197,
		nationality: 'V'.toUpperCase(),
		cedula: 25387103,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bflores'.toLowerCase(),
		name: capitalCadena('BLAIMAR YOLIBETH'),
		lastName: capitalCadena('FLORES CAMACHO'),
		type: 'regular',
		email: 'bflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12200,
		nationality: 'V'.toUpperCase(),
		cedula: 19108885,
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
		userName: 'dmagallanes'.toLowerCase(),
		name: capitalCadena('DAYANA ISABEL'),
		lastName: capitalCadena('MAGALLANES JIMENEZ'),
		type: 'regular',
		email: 'dmagallanes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12092,
		nationality: 'V'.toUpperCase(),
		cedula: 15739129,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfrontado'.toLowerCase(),
		name: capitalCadena('MARIAN ELENA'),
		lastName: capitalCadena('FRONTADO VEGA'),
		type: 'regular',
		email: 'mfrontado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12277,
		nationality: 'V'.toUpperCase(),
		cedula: 14624324,
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
		userName: 'mdiaz'.toLowerCase(),
		name: capitalCadena('MARCOS ANTONIO'),
		lastName: capitalCadena('DIAZ GONZALEZ'),
		type: 'regular',
		email: 'mdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12286,
		nationality: 'V'.toUpperCase(),
		cedula: 10776737,
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
		userName: 'rrivero'.toLowerCase(),
		name: capitalCadena('RONALD ALEXANDER'),
		lastName: capitalCadena('RIVERO PORTILLO'),
		type: 'regular',
		email: 'rrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12112,
		nationality: 'V'.toUpperCase(),
		cedula: 23801456,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'etovar'.toLowerCase(),
		name: capitalCadena('ELVIRA JOSEFINA'),
		lastName: capitalCadena('TOVAR AGUIRRE'),
		type: 'regular',
		email: 'etovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12372,
		nationality: 'V'.toUpperCase(),
		cedula: 9660688,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gaguero'.toLowerCase(),
		name: capitalCadena('GLENDYS DEYANIRA'),
		lastName: capitalCadena('AGUERO ARTEAGA'),
		type: 'regular',
		email: 'gaguero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12398,
		nationality: 'V'.toUpperCase(),
		cedula: 14380667,
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
		userName: 'avalera'.toLowerCase(),
		name: capitalCadena('AIMARA NATHALI'),
		lastName: capitalCadena('VALERA PAEZ'),
		type: 'regular',
		email: 'avalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12402,
		nationality: 'V'.toUpperCase(),
		cedula: 15996953,
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
		userName: 'wbarrera'.toLowerCase(),
		name: capitalCadena('WALNER DEL JESUS'),
		lastName: capitalCadena('BARRERA BERMUDEZ'),
		type: 'regular',
		email: 'wbarrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12202,
		nationality: 'V'.toUpperCase(),
		cedula: 19859687,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcamacaro'.toLowerCase(),
		name: capitalCadena('MILEXA PASTORA'),
		lastName: capitalCadena('CAMACARO SANCHEZ'),
		type: 'regular',
		email: 'mcamacaro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12445,
		nationality: 'V'.toUpperCase(),
		cedula: 14590100,
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
		userName: 'mrodriguez'.toLowerCase(),
		name: capitalCadena('MARIA EUGENIA'),
		lastName: capitalCadena('RODRIGUEZ MONCADA'),
		type: 'regular',
		email: 'mrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12452,
		nationality: 'V'.toUpperCase(),
		cedula: 19524476,
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
		userName: 'mamaya'.toLowerCase(),
		name: capitalCadena('MAYRA ALEJANDRA'),
		lastName: capitalCadena('AMAYA PEREZ'),
		type: 'regular',
		email: 'mamaya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12462,
		nationality: 'V'.toUpperCase(),
		cedula: 13500944,
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
		userName: 'cedward'.toLowerCase(),
		name: capitalCadena('EDWARD JOSUE'),
		lastName: capitalCadena('CHIREMA RIVERO'),
		type: 'regular',
		email: 'cedward@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12485,
		nationality: 'V'.toUpperCase(),
		cedula: 27464247,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dovalles'.toLowerCase(),
		name: capitalCadena('DARLING ARELIS'),
		lastName: capitalCadena('OVALLES DE RODRIGUEZ'),
		type: 'regular',
		email: 'dovalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12451,
		nationality: 'V'.toUpperCase(),
		cedula: 13667691,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epalma'.toLowerCase(),
		name: capitalCadena('EDUARDO JOSE'),
		lastName: capitalCadena('PALMA VERA'),
		type: 'regular',
		email: 'epalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12466,
		nationality: 'V'.toUpperCase(),
		cedula: 19158282,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zalconini'.toLowerCase(),
		name: capitalCadena('ZAIDA ALEJANDRA'),
		lastName: capitalCadena('ALCONINI CESPEDES'),
		type: 'regular',
		email: 'zalconini@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12506,
		nationality: 'V'.toUpperCase(),
		cedula: 14932396,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dguerra'.toLowerCase(),
		name: capitalCadena('DANNY RAFAEL'),
		lastName: capitalCadena('GUERRA MACHUCA'),
		type: 'regular',
		email: 'dguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12550,
		nationality: 'V'.toUpperCase(),
		cedula: 15823222,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wperez'.toLowerCase(),
		name: capitalCadena('WALKIRIA BENSALEM'),
		lastName: capitalCadena('PEREZ ORTUÑO'),
		type: 'regular',
		email: 'wperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12551,
		nationality: 'V'.toUpperCase(),
		cedula: 17517012,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'egotopo'.toLowerCase(),
		name: capitalCadena('EDWARD JESUS'),
		lastName: capitalCadena('GOTOPO ARTEAGA'),
		type: 'regular',
		email: 'egotopo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12578,
		nationality: 'V'.toUpperCase(),
		cedula: 16501755,
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
		userName: 'czapata'.toLowerCase(),
		name: capitalCadena('CELVELI ALESANDRA'),
		lastName: capitalCadena('ZAPATA DE MOSQUEDA'),
		type: 'regular',
		email: 'czapata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12580,
		nationality: 'V'.toUpperCase(),
		cedula: 17316946,
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
		userName: 'magonzalez'.toLowerCase(),
		name: capitalCadena('MARYORI CAROLINA'),
		lastName: capitalCadena('GONZALEZ ORTIZ'),
		type: 'regular',
		email: 'magonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12581,
		nationality: 'V'.toUpperCase(),
		cedula: 16401181,
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
		userName: 'mzamudio'.toLowerCase(),
		name: capitalCadena('MARIA CRISTINA'),
		lastName: capitalCadena('ZAMUDIO CONTRERAS'),
		type: 'regular',
		email: 'mzamudio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12585,
		nationality: 'V'.toUpperCase(),
		cedula: 18289759,
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
		userName: 'mcolmenares'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('COLMENARES GARCIA'),
		type: 'regular',
		email: 'mcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12619,
		nationality: 'V'.toUpperCase(),
		cedula: 18748108,
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
		userName: 'mlarocca'.toLowerCase(),
		name: capitalCadena('MARA PATRICIA'),
		lastName: capitalCadena('LA ROCCA DI PASQUALE'),
		type: 'regular',
		email: 'mlarocca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12620,
		nationality: 'V'.toUpperCase(),
		cedula: 14069024,
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
		userName: 'zleon'.toLowerCase(),
		name: capitalCadena('ZUGLEINYS JOSE'),
		lastName: capitalCadena('LEON VILLARROEL'),
		type: 'regular',
		email: 'zleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12613,
		nationality: 'V'.toUpperCase(),
		cedula: 18401895,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agonzalez'.toLowerCase(),
		name: capitalCadena('ANDRY MICHAEL'),
		lastName: capitalCadena('GONZALEZ GONZALEZ'),
		type: 'regular',
		email: 'agonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12670,
		nationality: 'V'.toUpperCase(),
		cedula: 15860671,
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
		userName: 'msira'.toLowerCase(),
		name: capitalCadena('MISLAI DEL CARMEN'),
		lastName: capitalCadena('SIRA GUTIERREZ'),
		type: 'regular',
		email: 'msira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12672,
		nationality: 'V'.toUpperCase(),
		cedula: 17994635,
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
		userName: 'jceballos'.toLowerCase(),
		name: capitalCadena('JORGE LUIS'),
		lastName: capitalCadena('CEBALLOS MOSQUERA'),
		type: 'regular',
		email: 'jceballos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12681,
		nationality: 'V'.toUpperCase(),
		cedula: 14676351,
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
		userName: 'wlopez'.toLowerCase(),
		name: capitalCadena('WILFREDO RAMON'),
		lastName: capitalCadena('LOPEZ PINTO'),
		type: 'regular',
		email: 'wlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12697,
		nationality: 'V'.toUpperCase(),
		cedula: 13809338,
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
		userName: 'izavala'.toLowerCase(),
		name: capitalCadena('IRENE MARIA'),
		lastName: capitalCadena('ZAVALA RODRIGUEZ'),
		type: 'regular',
		email: 'izavala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12700,
		nationality: 'V'.toUpperCase(),
		cedula: 18764569,
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
		userName: 'rpalazzolo'.toLowerCase(),
		name: capitalCadena('ROSANA '),
		lastName: capitalCadena('PALAZZOLO LEON'),
		type: 'regular',
		email: 'rpalazzolo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12720,
		nationality: 'V'.toUpperCase(),
		cedula: 7297225,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ilatini'.toLowerCase(),
		name: capitalCadena('IXA ROSNEY'),
		lastName: capitalCadena('LATINI GIL'),
		type: 'regular',
		email: 'ilatini@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12722,
		nationality: 'V'.toUpperCase(),
		cedula: 19827805,
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
		userName: 'afereira'.toLowerCase(),
		name: capitalCadena('ASTRID CAROLINA'),
		lastName: capitalCadena('FEREIRA HERRERA'),
		type: 'regular',
		email: 'afereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12483,
		nationality: 'V'.toUpperCase(),
		cedula: 19245673,
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
		userName: 'lecastro'.toLowerCase(),
		name: capitalCadena('LEYDA PATRICIA'),
		lastName: capitalCadena('CASTRO LOPEZ'),
		type: 'regular',
		email: 'lecastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12762,
		nationality: 'V'.toUpperCase(),
		cedula: 18436580,
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
		userName: 'dpinero'.toLowerCase(),
		name: capitalCadena('DULKELYN CAROLINA'),
		lastName: capitalCadena('PIÑERO HERNANDEZ'),
		type: 'regular',
		email: 'dpinero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12787,
		nationality: 'V'.toUpperCase(),
		cedula: 19053080,
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
		userName: 'ytorres'.toLowerCase(),
		name: capitalCadena('YETSY STEFHANIE'),
		lastName: capitalCadena('TORRES ROMERO'),
		type: 'regular',
		email: 'ytorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12790,
		nationality: 'V'.toUpperCase(),
		cedula: 19817362,
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
		userName: 'alzapata'.toLowerCase(),
		name: capitalCadena('ALEXAMAR VANESSA'),
		lastName: capitalCadena('ZAPATA ROJAS'),
		type: 'regular',
		email: 'alzapata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12806,
		nationality: 'V'.toUpperCase(),
		cedula: 20188975,
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
		userName: 'dpaul'.toLowerCase(),
		name: capitalCadena('DANY KENDRIA'),
		lastName: capitalCadena('PAUL '),
		type: 'regular',
		email: 'dpaul@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12717,
		nationality: 'V'.toUpperCase(),
		cedula: 22520892,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gorta'.toLowerCase(),
		name: capitalCadena('GIANCARLA DEL CARMEN'),
		lastName: capitalCadena('ORTA LIZARDI'),
		type: 'regular',
		email: 'gorta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12721,
		nationality: 'V'.toUpperCase(),
		cedula: 12598125,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apalma'.toLowerCase(),
		name: capitalCadena('ABRIL ANGIEMAR'),
		lastName: capitalCadena('PALMA CONTRERAS'),
		type: 'regular',
		email: 'apalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12774,
		nationality: 'V'.toUpperCase(),
		cedula: 28356734,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvalera'.toLowerCase(),
		name: capitalCadena('MAHOLI GREGORIA'),
		lastName: capitalCadena('VALERA CASTELLANOS'),
		type: 'regular',
		email: 'mvalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12853,
		nationality: 'V'.toUpperCase(),
		cedula: 19171021,
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
		userName: 'pgomez'.toLowerCase(),
		name: capitalCadena('PAOLA VALENTINA'),
		lastName: capitalCadena('GOMEZ NOGUERA'),
		type: 'regular',
		email: 'pgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12819,
		nationality: 'V'.toUpperCase(),
		cedula: 26977144,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycoronel'.toLowerCase(),
		name: capitalCadena('YORSA SOYLIMAR'),
		lastName: capitalCadena('CORONEL LABRADOR'),
		type: 'regular',
		email: 'ycoronel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12820,
		nationality: 'V'.toUpperCase(),
		cedula: 13721975,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'argonzalez'.toLowerCase(),
		name: capitalCadena('ARACELIS TERESA'),
		lastName: capitalCadena('GONZALEZ NUÑEZ'),
		type: 'regular',
		email: 'argonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12859,
		nationality: 'V'.toUpperCase(),
		cedula: 15114110,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lhernandez'.toLowerCase(),
		name: capitalCadena('LAURA YAMILETH'),
		lastName: capitalCadena('HERNANDEZ MACHADO'),
		type: 'regular',
		email: 'lhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12892,
		nationality: 'V'.toUpperCase(),
		cedula: 15257274,
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
		userName: 'difuentes'.toLowerCase(),
		name: capitalCadena('DIPTY SUSANA'),
		lastName: capitalCadena('FUENTES MILLAN'),
		type: 'regular',
		email: 'difuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12860,
		nationality: 'V'.toUpperCase(),
		cedula: 12225539,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vprincipal'.toLowerCase(),
		name: capitalCadena('VIVIAN NINORKA'),
		lastName: capitalCadena('PRINCIPAL MARCANO'),
		type: 'regular',
		email: 'vprincipal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12893,
		nationality: 'V'.toUpperCase(),
		cedula: 16130162,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mirrodriguez'.toLowerCase(),
		name: capitalCadena('MIRAYDA DEL VALLE'),
		lastName: capitalCadena('RODRIGUEZ DI GENOVA'),
		type: 'regular',
		email: 'mirrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12894,
		nationality: 'V'.toUpperCase(),
		cedula: 13579145,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsubero'.toLowerCase(),
		name: capitalCadena('GLISMARIS NARCELIS'),
		lastName: capitalCadena('SUBERO BARRIOS'),
		type: 'regular',
		email: 'gsubero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12897,
		nationality: 'V'.toUpperCase(),
		cedula: 25255574,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mafernandez'.toLowerCase(),
		name: capitalCadena('MARGORY PASTORA'),
		lastName: capitalCadena('FERNANDEZ RINCONES'),
		type: 'regular',
		email: 'mafernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12987,
		nationality: 'V'.toUpperCase(),
		cedula: 16532504,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cduarte'.toLowerCase(),
		name: capitalCadena('CARLOS NOEL'),
		lastName: capitalCadena('DUARTE CHACOA'),
		type: 'regular',
		email: 'cduarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12958,
		nationality: 'V'.toUpperCase(),
		cedula: 13953127,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kduarte'.toLowerCase(),
		name: capitalCadena('KARLA VALERIA'),
		lastName: capitalCadena('DUARTE ORTEGA'),
		type: 'regular',
		email: 'kduarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13020,
		nationality: 'V'.toUpperCase(),
		cedula: 28381105,
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
		userName: 'kgonzalez'.toLowerCase(),
		name: capitalCadena('KATHERINE ARIANNIS'),
		lastName: capitalCadena('GONZALEZ BEJARAN'),
		type: 'regular',
		email: 'kgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13021,
		nationality: 'V'.toUpperCase(),
		cedula: 26500745,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hegutierrez'.toLowerCase(),
		name: capitalCadena('HEIDI YUSVARI'),
		lastName: capitalCadena('GUTIERREZ RODRIGUEZ'),
		type: 'regular',
		email: 'hegutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12999,
		nationality: 'V'.toUpperCase(),
		cedula: 13625405,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rvargas'.toLowerCase(),
		name: capitalCadena('RAMON JOSE'),
		lastName: capitalCadena('VARGAS '),
		type: 'regular',
		email: 'rvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13029,
		nationality: 'V'.toUpperCase(),
		cedula: 8384943,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gjaimes'.toLowerCase(),
		name: capitalCadena('GERARDO ENRIQUE'),
		lastName: capitalCadena('JAIMES ESTRADA'),
		type: 'regular',
		email: 'gjaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13010,
		nationality: 'V'.toUpperCase(),
		cedula: 26369968,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krgonzalez'.toLowerCase(),
		name: capitalCadena('KRISTY DE LOS ANGELES'),
		lastName: capitalCadena('GONZALEZ HERNANDEZ'),
		type: 'regular',
		email: 'krgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13022,
		nationality: 'V'.toUpperCase(),
		cedula: 15908222,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kecastillo'.toLowerCase(),
		name: capitalCadena('KEYBER RAMON'),
		lastName: capitalCadena('CASTILLO GRANADO'),
		type: 'regular',
		email: 'kecastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13068,
		nationality: 'V'.toUpperCase(),
		cedula: 30210432,
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
		userName: 'ggilhernandez'.toLowerCase(),
		name: capitalCadena('GABI DEL CARMEN'),
		lastName: capitalCadena('GIL HERNANDEZ'),
		type: 'regular',
		email: 'ggilhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13071,
		nationality: 'V'.toUpperCase(),
		cedula: 29947099,
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
		userName: 'rospino'.toLowerCase(),
		name: capitalCadena('ROBERTO WALTER'),
		lastName: capitalCadena('OSPINO FLORES'),
		type: 'regular',
		email: 'rospino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13072,
		nationality: 'V'.toUpperCase(),
		cedula: 31747348,
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
		userName: 'mimendoza'.toLowerCase(),
		name: capitalCadena('MILAGRO ISABEL'),
		lastName: capitalCadena('MENDOZA VILLANUEVA'),
		type: 'regular',
		email: 'mimendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13073,
		nationality: 'V'.toUpperCase(),
		cedula: 31014261,
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
		userName: 'lgomez'.toLowerCase(),
		name: capitalCadena('LUISANA VALENTINA'),
		lastName: capitalCadena('GOMEZ TORCATES'),
		type: 'regular',
		email: 'lgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13074,
		nationality: 'V'.toUpperCase(),
		cedula: 31489821,
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
		userName: 'lespinoza'.toLowerCase(),
		name: capitalCadena('LAURENETH CAROLINA'),
		lastName: capitalCadena('ESPINOZA CUMANA'),
		type: 'regular',
		email: 'lespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13060,
		nationality: 'V'.toUpperCase(),
		cedula: 14911994,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ltiberio'.toLowerCase(),
		name: capitalCadena('LIRGUIS RAFAEL'),
		lastName: capitalCadena('TIBERIO COVA'),
		type: 'regular',
		email: 'ltiberio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13062,
		nationality: 'V'.toUpperCase(),
		cedula: 16931706,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ifernandez'.toLowerCase(),
		name: capitalCadena('ILIANA CAROLINA'),
		lastName: capitalCadena('FERNANDEZ ANDREA'),
		type: 'regular',
		email: 'ifernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13123,
		nationality: 'V'.toUpperCase(),
		cedula: 24159044,
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
		userName: 'xcastellanos'.toLowerCase(),
		name: capitalCadena('XIOMARA JOSEFINA'),
		lastName: capitalCadena('CASTELLANOS AULAR'),
		type: 'regular',
		email: 'xcastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13130,
		nationality: 'V'.toUpperCase(),
		cedula: 14413909,
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
		userName: 'alhernandez'.toLowerCase(),
		name: capitalCadena('ALBERTO JOSE'),
		lastName: capitalCadena('HERNANDEZ NOROÑO'),
		type: 'regular',
		email: 'alhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13122,
		nationality: 'V'.toUpperCase(),
		cedula: 24438665,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcastelin'.toLowerCase(),
		name: capitalCadena('LISETT DEL VALLE'),
		lastName: capitalCadena('CASTELIN FERNANDEZ'),
		type: 'regular',
		email: 'lcastelin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13170,
		nationality: 'V'.toUpperCase(),
		cedula: 13541947,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jramirez'.toLowerCase(),
		name: capitalCadena('JEORGINA VANESSA'),
		lastName: capitalCadena('RAMIREZ FERMIN'),
		type: 'regular',
		email: 'jramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13131,
		nationality: 'V'.toUpperCase(),
		cedula: 26243851,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krsalazar'.toLowerCase(),
		name: capitalCadena('KRISTHY DEL VALLE'),
		lastName: capitalCadena('SALAZAR MILLAN'),
		type: 'regular',
		email: 'krsalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13132,
		nationality: 'V'.toUpperCase(),
		cedula: 17653030,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lnarvaez'.toLowerCase(),
		name: capitalCadena('LUZBENNY DEL VALLE'),
		lastName: capitalCadena('NARVAEZ GOMEZ'),
		type: 'regular',
		email: 'lnarvaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13189,
		nationality: 'V'.toUpperCase(),
		cedula: 11537312,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsequera'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('SEQUERA SEQUERA'),
		type: 'regular',
		email: 'jsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13194,
		nationality: 'V'.toUpperCase(),
		cedula: 8845204,
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
		userName: 'daarroyo'.toLowerCase(),
		name: capitalCadena('DANIEL ANTONIO'),
		lastName: capitalCadena('ARROYO ROJAS'),
		type: 'regular',
		email: 'daarroyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13196,
		nationality: 'V'.toUpperCase(),
		cedula: 5930207,
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
		userName: 'vgrillo'.toLowerCase(),
		name: capitalCadena('VISTELBA NATIVIDAD'),
		lastName: capitalCadena('GRILLO POLEO'),
		type: 'regular',
		email: 'vgrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13197,
		nationality: 'V'.toUpperCase(),
		cedula: 8815853,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbetancor'.toLowerCase(),
		name: capitalCadena('CARLOS DAVID'),
		lastName: capitalCadena('BETANCOR PEREZ'),
		type: 'regular',
		email: 'cbetancor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13208,
		nationality: 'V'.toUpperCase(),
		cedula: 9539363,
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
		userName: 'ygoyo'.toLowerCase(),
		name: capitalCadena('YVONNE DEL CARMEN'),
		lastName: capitalCadena('GOYO TORRES'),
		type: 'regular',
		email: 'ygoyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13213,
		nationality: 'V'.toUpperCase(),
		cedula: 7462472,
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
		userName: 'memartinez'.toLowerCase(),
		name: capitalCadena('MERCEDES GARDENIA'),
		lastName: capitalCadena('MARTINEZ ROJAS'),
		type: 'regular',
		email: 'memartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13217,
		nationality: 'V'.toUpperCase(),
		cedula: 6813011,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pespinoza'.toLowerCase(),
		name: capitalCadena('PEDRO ANTONIO'),
		lastName: capitalCadena('ESPINOZA ANDRADE'),
		type: 'regular',
		email: 'pespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13220,
		nationality: 'V'.toUpperCase(),
		cedula: 5423335,
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
		userName: 'mariagomez'.toLowerCase(),
		name: capitalCadena('MARIA AUXILIADORA'),
		lastName: capitalCadena('GOMEZ '),
		type: 'regular',
		email: 'mariagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13227,
		nationality: 'V'.toUpperCase(),
		cedula: 9565140,
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
		userName: 'jortega'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('ORTEGA ORDOÑES'),
		type: 'regular',
		email: 'jortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13258,
		nationality: 'V'.toUpperCase(),
		cedula: 12924508,
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
		userName: 'dflores'.toLowerCase(),
		name: capitalCadena('DOUGLAS ENRIQUE'),
		lastName: capitalCadena('FLORES OCHOA'),
		type: 'regular',
		email: 'dflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13259,
		nationality: 'V'.toUpperCase(),
		cedula: 12034767,
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
		userName: 'amatute'.toLowerCase(),
		name: capitalCadena('ADELA ROSA'),
		lastName: capitalCadena('MATUTE COLINA'),
		type: 'regular',
		email: 'amatute@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13267,
		nationality: 'V'.toUpperCase(),
		cedula: 10643912,
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
		userName: 'diugonzalez'.toLowerCase(),
		name: capitalCadena('DIULIAN DE JESUS'),
		lastName: capitalCadena('GONZALEZ CAMPOS'),
		type: 'regular',
		email: 'diugonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13241,
		nationality: 'V'.toUpperCase(),
		cedula: 11009688,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpuerta'.toLowerCase(),
		name: capitalCadena('MAIGUALIDA MARIA'),
		lastName: capitalCadena('PUERTA APONTE'),
		type: 'regular',
		email: 'mpuerta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13264,
		nationality: 'V'.toUpperCase(),
		cedula: 11687031,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eespinoza'.toLowerCase(),
		name: capitalCadena('EDUARDO COROMOTO'),
		lastName: capitalCadena('ESPINOZA HERNANDEZ'),
		type: 'regular',
		email: 'eespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13284,
		nationality: 'V'.toUpperCase(),
		cedula: 7923816,
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
		userName: 'evelasquez'.toLowerCase(),
		name: capitalCadena('EIDA DEL VALLE'),
		lastName: capitalCadena('VELASQUEZ DE FERNÁNDEZ'),
		type: 'regular',
		email: 'evelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13296,
		nationality: 'V'.toUpperCase(),
		cedula: 9421583,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'raranguren'.toLowerCase(),
		name: capitalCadena('RUDY MARISOL'),
		lastName: capitalCadena('ARANGUREN GONZALEZ'),
		type: 'regular',
		email: 'raranguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13309,
		nationality: 'V'.toUpperCase(),
		cedula: 10143623,
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
		userName: 'jlinarez'.toLowerCase(),
		name: capitalCadena('JOSE FRANCISCO'),
		lastName: capitalCadena('LINAREZ '),
		type: 'regular',
		email: 'jlinarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13312,
		nationality: 'V'.toUpperCase(),
		cedula: 7302267,
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
		userName: 'irflores'.toLowerCase(),
		name: capitalCadena('IRIAN AMERICA'),
		lastName: capitalCadena('FLORES MACIAS'),
		type: 'regular',
		email: 'irflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13313,
		nationality: 'V'.toUpperCase(),
		cedula: 7128018,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anescalona'.toLowerCase(),
		name: capitalCadena('ANTONIO JOSE'),
		lastName: capitalCadena('ESCALONA '),
		type: 'regular',
		email: 'anescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13322,
		nationality: 'V'.toUpperCase(),
		cedula: 7986960,
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
		userName: 'japostol'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('APOSTOL TOVAR'),
		type: 'regular',
		email: 'japostol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13330,
		nationality: 'V'.toUpperCase(),
		cedula: 9603790,
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
		userName: 'agil'.toLowerCase(),
		name: capitalCadena('ANA MARIA'),
		lastName: capitalCadena('GIL MANZANILLA'),
		type: 'regular',
		email: 'agil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13341,
		nationality: 'V'.toUpperCase(),
		cedula: 7361284,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mlopez'.toLowerCase(),
		name: capitalCadena('MACARIO ANTONIO'),
		lastName: capitalCadena('LOPEZ '),
		type: 'regular',
		email: 'mlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13359,
		nationality: 'V'.toUpperCase(),
		cedula: 7367207,
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
		userName: 'clatorre'.toLowerCase(),
		name: capitalCadena('CECILIA '),
		lastName: capitalCadena('LA TORRE YAMBOA'),
		type: 'regular',
		email: 'clatorre@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13383,
		nationality: 'V'.toUpperCase(),
		cedula: 9563254,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jobando'.toLowerCase(),
		name: capitalCadena('JUANA BIANNEY'),
		lastName: capitalCadena('OBANDO MARCANO'),
		type: 'regular',
		email: 'jobando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13378,
		nationality: 'V'.toUpperCase(),
		cedula: 12909197,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmendoza'.toLowerCase(),
		name: capitalCadena('BLANCA MARIA'),
		lastName: capitalCadena('MENDOZA GALINDEZ'),
		type: 'regular',
		email: 'bmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13425,
		nationality: 'V'.toUpperCase(),
		cedula: 7462319,
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
		userName: 'jcastaneda'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('CASTAÑEDA LOPEZ'),
		type: 'regular',
		email: 'jcastaneda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13427,
		nationality: 'V'.toUpperCase(),
		cedula: 9118011,
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
		userName: 'glhernandez'.toLowerCase(),
		name: capitalCadena('GLORIMA LUDIN'),
		lastName: capitalCadena('HERNANDEZ GARCIA'),
		type: 'regular',
		email: 'glhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13428,
		nationality: 'V'.toUpperCase(),
		cedula: 7438101,
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
		userName: 'yecastillo'.toLowerCase(),
		name: capitalCadena('YELI ANGELINA'),
		lastName: capitalCadena('CASTILLO RODRIGUEZ'),
		type: 'regular',
		email: 'yecastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13450,
		nationality: 'V'.toUpperCase(),
		cedula: 11787572,
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
		userName: 'nparra'.toLowerCase(),
		name: capitalCadena('NORMELYS DESIREE'),
		lastName: capitalCadena('PARRA AVILA'),
		type: 'regular',
		email: 'nparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13458,
		nationality: 'V'.toUpperCase(),
		cedula: 12931557,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvelazco'.toLowerCase(),
		name: capitalCadena('YSMELYS YELITZA'),
		lastName: capitalCadena('VELAZCO DE SILVA'),
		type: 'regular',
		email: 'yvelazco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13466,
		nationality: 'V'.toUpperCase(),
		cedula: 8762237,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clabrador'.toLowerCase(),
		name: capitalCadena('CELIA LUCIA'),
		lastName: capitalCadena('LABRADOR CARDENAS'),
		type: 'regular',
		email: 'clabrador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13454,
		nationality: 'V'.toUpperCase(),
		cedula: 7261770,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'heduran'.toLowerCase(),
		name: capitalCadena('HERMINIA ROSA'),
		lastName: capitalCadena('DURAN RODRIGUEZ'),
		type: 'regular',
		email: 'heduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13485,
		nationality: 'V'.toUpperCase(),
		cedula: 12726600,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marpinto'.toLowerCase(),
		name: capitalCadena('MARIANELA BEATRIZ'),
		lastName: capitalCadena('PINTO ALVAREZ'),
		type: 'regular',
		email: 'marpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13490,
		nationality: 'V'.toUpperCase(),
		cedula: 10761697,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jostos'.toLowerCase(),
		name: capitalCadena('JOSE RAFAEL'),
		lastName: capitalCadena('OSTOS OSORIO'),
		type: 'regular',
		email: 'jostos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13507,
		nationality: 'V'.toUpperCase(),
		cedula: 12102290,
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
		userName: 'lfarias'.toLowerCase(),
		name: capitalCadena('LIBIA MERCEDES'),
		lastName: capitalCadena('FARIAS MARIÑO'),
		type: 'regular',
		email: 'lfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13509,
		nationality: 'V'.toUpperCase(),
		cedula: 4380986,
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
		userName: 'dhernandez'.toLowerCase(),
		name: capitalCadena('DEIVIS ORLANDO'),
		lastName: capitalCadena('HERNANDEZ NOGUERA'),
		type: 'regular',
		email: 'dhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13511,
		nationality: 'V'.toUpperCase(),
		cedula: 7129233,
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
		userName: 'ysalmeron'.toLowerCase(),
		name: capitalCadena('YSMERYS DEL CARMEN'),
		lastName: capitalCadena('SALMERON '),
		type: 'regular',
		email: 'ysalmeron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13475,
		nationality: 'V'.toUpperCase(),
		cedula: 11995546,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angutierrez'.toLowerCase(),
		name: capitalCadena('ANGEL MANUEL'),
		lastName: capitalCadena('GUTIERREZ SALCEDO'),
		type: 'regular',
		email: 'angutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13548,
		nationality: 'V'.toUpperCase(),
		cedula: 14001824,
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
		userName: 'ovillarroel'.toLowerCase(),
		name: capitalCadena('ORLANDO RAFAEL'),
		lastName: capitalCadena('VILLARROEL QUIJADA'),
		type: 'regular',
		email: 'ovillarroel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13518,
		nationality: 'V'.toUpperCase(),
		cedula: 9302863,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dnieves'.toLowerCase(),
		name: capitalCadena('DELSY VERONICA'),
		lastName: capitalCadena('NIEVES '),
		type: 'regular',
		email: 'dnieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13573,
		nationality: 'V'.toUpperCase(),
		cedula: 13683784,
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
		userName: 'yalvarado'.toLowerCase(),
		name: capitalCadena('YLDEMARO RAFAEL'),
		lastName: capitalCadena('ALVARADO ESCALONA'),
		type: 'regular',
		email: 'yalvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13574,
		nationality: 'V'.toUpperCase(),
		cedula: 12534158,
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
		userName: 'nesilva'.toLowerCase(),
		name: capitalCadena('NELLINA ESTHER'),
		lastName: capitalCadena('SILVA MOJICA'),
		type: 'regular',
		email: 'nesilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13578,
		nationality: 'V'.toUpperCase(),
		cedula: 12616535,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acordero'.toLowerCase(),
		name: capitalCadena('AMERICA LISETH'),
		lastName: capitalCadena('CORDERO BARCOS'),
		type: 'regular',
		email: 'acordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13586,
		nationality: 'V'.toUpperCase(),
		cedula: 10774076,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsequera'.toLowerCase(),
		name: capitalCadena('ROXANA JOSEFINA'),
		lastName: capitalCadena('SEQUERA ACEITUNO'),
		type: 'regular',
		email: 'rsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13589,
		nationality: 'V'.toUpperCase(),
		cedula: 11361365,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josehernandez'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('HERNANDEZ '),
		type: 'regular',
		email: 'josehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13608,
		nationality: 'V'.toUpperCase(),
		cedula: 7350956,
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
		userName: 'ydguzman'.toLowerCase(),
		name: capitalCadena('YDALIA DIULESES'),
		lastName: capitalCadena('GUZMAN GARRIDO'),
		type: 'regular',
		email: 'ydguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13590,
		nationality: 'V'.toUpperCase(),
		cedula: 11511409,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'miecheverria'.toLowerCase(),
		name: capitalCadena('MILDRED MARIDE'),
		lastName: capitalCadena('ECHEVERRIA GIL'),
		type: 'regular',
		email: 'miecheverria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13634,
		nationality: 'V'.toUpperCase(),
		cedula: 11263744,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josrodriguez'.toLowerCase(),
		name: capitalCadena('JOSE TEOFILO'),
		lastName: capitalCadena('RODRIGUEZ MORILLO'),
		type: 'regular',
		email: 'josrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13635,
		nationality: 'V'.toUpperCase(),
		cedula: 10129105,
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
		userName: 'vsucre'.toLowerCase(),
		name: capitalCadena('VICENTA DEL CARMEN'),
		lastName: capitalCadena('SUCRE CALDEA'),
		type: 'regular',
		email: 'vsucre@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13610,
		nationality: 'V'.toUpperCase(),
		cedula: 15570560,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'guseche'.toLowerCase(),
		name: capitalCadena('GUILLERMO ANTONIO'),
		lastName: capitalCadena('USECHE RAMIREZ'),
		type: 'regular',
		email: 'guseche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13619,
		nationality: 'V'.toUpperCase(),
		cedula: 10625558,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'blandaeta'.toLowerCase(),
		name: capitalCadena('BETZABEL JOSEFINA'),
		lastName: capitalCadena('LANDAETA ROMERO'),
		type: 'regular',
		email: 'blandaeta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13657,
		nationality: 'V'.toUpperCase(),
		cedula: 12121490,
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
		userName: 'amier'.toLowerCase(),
		name: capitalCadena('ANEUDYS VIANNEY'),
		lastName: capitalCadena('MIER Y TERAN DIAZ'),
		type: 'regular',
		email: 'amier@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13658,
		nationality: 'V'.toUpperCase(),
		cedula: 14830472,
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
		userName: 'aaranguren'.toLowerCase(),
		name: capitalCadena('ALFREDO JOSE'),
		lastName: capitalCadena('ARANGUREN VARGAS'),
		type: 'regular',
		email: 'aaranguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13659,
		nationality: 'V'.toUpperCase(),
		cedula: 12810134,
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
		userName: 'cmelendez'.toLowerCase(),
		name: capitalCadena('CRISTOBAL RAMON'),
		lastName: capitalCadena('MELENDEZ RODRIGUEZ'),
		type: 'regular',
		email: 'cmelendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13666,
		nationality: 'V'.toUpperCase(),
		cedula: 7391257,
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
		userName: 'halvarado'.toLowerCase(),
		name: capitalCadena('HILDA EVELYN'),
		lastName: capitalCadena('ALVARADO PACHECO'),
		type: 'regular',
		email: 'halvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13675,
		nationality: 'V'.toUpperCase(),
		cedula: 14162739,
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
		userName: 'erivera'.toLowerCase(),
		name: capitalCadena('ELCIDA JANETT'),
		lastName: capitalCadena('RIVERA ARENAS'),
		type: 'regular',
		email: 'erivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13685,
		nationality: 'V'.toUpperCase(),
		cedula: 10148460,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmontilla'.toLowerCase(),
		name: capitalCadena('MARIA AUXILIADORA'),
		lastName: capitalCadena('MONTILLA BASTIDAS'),
		type: 'regular',
		email: 'mmontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13695,
		nationality: 'V'.toUpperCase(),
		cedula: 11706220,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mameza'.toLowerCase(),
		name: capitalCadena('MARINA YULEIBI'),
		lastName: capitalCadena('MEZA COLLADO'),
		type: 'regular',
		email: 'mameza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13699,
		nationality: 'V'.toUpperCase(),
		cedula: 13947952,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marojas'.toLowerCase(),
		name: capitalCadena('MARIA CAROLINA'),
		lastName: capitalCadena('ROJAS ROMAN'),
		type: 'regular',
		email: 'marojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13656,
		nationality: 'V'.toUpperCase(),
		cedula: 16164183,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfranco'.toLowerCase(),
		name: capitalCadena('YEZENIA NATHALY'),
		lastName: capitalCadena('FRANCO ROJAS'),
		type: 'regular',
		email: 'yfranco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13708,
		nationality: 'V'.toUpperCase(),
		cedula: 15153855,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lramirez'.toLowerCase(),
		name: capitalCadena('LILIANA ELIZABETH'),
		lastName: capitalCadena('RAMIREZ GALICIA'),
		type: 'regular',
		email: 'lramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13715,
		nationality: 'V'.toUpperCase(),
		cedula: 12472814,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kgutierrez'.toLowerCase(),
		name: capitalCadena('KATTY ELENA'),
		lastName: capitalCadena('GUTIERREZ MELENDEZ'),
		type: 'regular',
		email: 'kgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13733,
		nationality: 'V'.toUpperCase(),
		cedula: 14733181,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hegarcia'.toLowerCase(),
		name: capitalCadena('HEIDI ADRIANA'),
		lastName: capitalCadena('GARCIA RENGIFO'),
		type: 'regular',
		email: 'hegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13735,
		nationality: 'V'.toUpperCase(),
		cedula: 12281774,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmarquez'.toLowerCase(),
		name: capitalCadena('MARIA DE LOS ANGELES'),
		lastName: capitalCadena('MARQUEZ ROJAS'),
		type: 'regular',
		email: 'mmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13741,
		nationality: 'V'.toUpperCase(),
		cedula: 16061976,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maiherrera'.toLowerCase(),
		name: capitalCadena('MAIRY DEL CARMEN'),
		lastName: capitalCadena('HERRERA DE LA HOZ'),
		type: 'regular',
		email: 'maiherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13760,
		nationality: 'V'.toUpperCase(),
		cedula: 15653549,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nocastillo'.toLowerCase(),
		name: capitalCadena('NORISBEL REBECA'),
		lastName: capitalCadena('CASTILLO CAZORLA'),
		type: 'regular',
		email: 'nocastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13784,
		nationality: 'V'.toUpperCase(),
		cedula: 19912303,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bcarvallo'.toLowerCase(),
		name: capitalCadena('BEGLYS ROSARIO'),
		lastName: capitalCadena('CARVALLO TORRES'),
		type: 'regular',
		email: 'bcarvallo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13807,
		nationality: 'V'.toUpperCase(),
		cedula: 17552559,
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
		userName: 'vuviedo'.toLowerCase(),
		name: capitalCadena('VIRGINIA JOSEFINA'),
		lastName: capitalCadena('UVIEDO ARAQUE'),
		type: 'regular',
		email: 'vuviedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13811,
		nationality: 'V'.toUpperCase(),
		cedula: 14925877,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ggudino'.toLowerCase(),
		name: capitalCadena('GLENDYS GABRIELA'),
		lastName: capitalCadena('GUDIÑO GARCIA'),
		type: 'regular',
		email: 'ggudino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13817,
		nationality: 'V'.toUpperCase(),
		cedula: 16946503,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eipacheco'.toLowerCase(),
		name: capitalCadena('EILEEN YSABEL'),
		lastName: capitalCadena('PACHECO MORALES'),
		type: 'regular',
		email: 'eipacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13835,
		nationality: 'V'.toUpperCase(),
		cedula: 15334221,
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
		userName: 'ecortez'.toLowerCase(),
		name: capitalCadena('ENZO ANDRES'),
		lastName: capitalCadena('CORTEZ SIERRALTA'),
		type: 'regular',
		email: 'ecortez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13871,
		nationality: 'V'.toUpperCase(),
		cedula: 9849241,
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
		userName: 'ysmoreno'.toLowerCase(),
		name: capitalCadena('YSMAEL EDUARDO'),
		lastName: capitalCadena('MORENO REYES'),
		type: 'regular',
		email: 'ysmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13888,
		nationality: 'V'.toUpperCase(),
		cedula: 18956348,
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
		userName: 'rubhernandez'.toLowerCase(),
		name: capitalCadena('RUBEN DARIO'),
		lastName: capitalCadena('HERNANDEZ HERNANDEZ'),
		type: 'regular',
		email: 'rubhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13901,
		nationality: 'V'.toUpperCase(),
		cedula: 15259925,
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
		userName: 'ycorrea'.toLowerCase(),
		name: capitalCadena('YOHAMI YELITSA'),
		lastName: capitalCadena('CORREA SUA'),
		type: 'regular',
		email: 'ycorrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13903,
		nationality: 'V'.toUpperCase(),
		cedula: 16277254,
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
		userName: 'ldelgado'.toLowerCase(),
		name: capitalCadena('LUISANA ANDREINA'),
		lastName: capitalCadena('DELGADO SALAZAR'),
		type: 'regular',
		email: 'ldelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13904,
		nationality: 'V'.toUpperCase(),
		cedula: 16502003,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ghurtado'.toLowerCase(),
		name: capitalCadena('GERARDO JESUS'),
		lastName: capitalCadena('HURTADO VILLAMEDIANA'),
		type: 'regular',
		email: 'ghurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13906,
		nationality: 'V'.toUpperCase(),
		cedula: 21484825,
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
		userName: 'gsulbaran'.toLowerCase(),
		name: capitalCadena('GUELWUIS JOSE'),
		lastName: capitalCadena('SULBARAN BARRIENTOS'),
		type: 'regular',
		email: 'gsulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13919,
		nationality: 'V'.toUpperCase(),
		cedula: 15970828,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dantequera'.toLowerCase(),
		name: capitalCadena('DIXON JOSE'),
		lastName: capitalCadena('ANTEQUERA HERNANDEZ'),
		type: 'regular',
		email: 'dantequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13922,
		nationality: 'V'.toUpperCase(),
		cedula: 16244388,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbracho'.toLowerCase(),
		name: capitalCadena('MILEXIS MARIBEL'),
		lastName: capitalCadena('BRACHO REYES'),
		type: 'regular',
		email: 'mbracho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13953,
		nationality: 'V'.toUpperCase(),
		cedula: 16110802,
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
		userName: 'lerodriguez'.toLowerCase(),
		name: capitalCadena('LEONOR JOSEFINA'),
		lastName: capitalCadena('RODRIGUEZ DURAND'),
		type: 'regular',
		email: 'lerodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13959,
		nationality: 'V'.toUpperCase(),
		cedula: 15470052,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ndasilva'.toLowerCase(),
		name: capitalCadena('NINOSKA JOSEFINA'),
		lastName: capitalCadena('DASILVA RIVAS'),
		type: 'regular',
		email: 'ndasilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13963,
		nationality: 'V'.toUpperCase(),
		cedula: 12643517,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesmarcano'.toLowerCase(),
		name: capitalCadena('JESUS RAFAEL'),
		lastName: capitalCadena('MARCANO MARCANO'),
		type: 'regular',
		email: 'jesmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13964,
		nationality: 'V'.toUpperCase(),
		cedula: 13670006,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mitorres'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('TORRES '),
		type: 'regular',
		email: 'mitorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13990,
		nationality: 'V'.toUpperCase(),
		cedula: 17066210,
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
		userName: 'pojeda'.toLowerCase(),
		name: capitalCadena('PATRICIA ALEJANDRA'),
		lastName: capitalCadena('OJEDA HERNANDEZ'),
		type: 'regular',
		email: 'pojeda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14003,
		nationality: 'V'.toUpperCase(),
		cedula: 21153846,
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
		userName: 'dalmartinez'.toLowerCase(),
		name: capitalCadena('DALISMARY DEL CARMEN'),
		lastName: capitalCadena('MARTINEZ DE PEREZ'),
		type: 'regular',
		email: 'dalmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14007,
		nationality: 'V'.toUpperCase(),
		cedula: 19113492,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcarieles'.toLowerCase(),
		name: capitalCadena('MILEIDY YOSELIN'),
		lastName: capitalCadena('CARIELES COLMENAREZ'),
		type: 'regular',
		email: 'mcarieles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14016,
		nationality: 'V'.toUpperCase(),
		cedula: 20321502,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llobo'.toLowerCase(),
		name: capitalCadena('LUSIRAIMA '),
		lastName: capitalCadena('LOBO CASTILLO'),
		type: 'regular',
		email: 'llobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14079,
		nationality: 'V'.toUpperCase(),
		cedula: 11715726,
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
		userName: 'isalazar'.toLowerCase(),
		name: capitalCadena('INGRYDS CAROLINA'),
		lastName: capitalCadena('SALAZAR SALAZAR'),
		type: 'regular',
		email: 'isalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13998,
		nationality: 'V'.toUpperCase(),
		cedula: 16930688,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ydelpino'.toLowerCase(),
		name: capitalCadena('YEBETZI DEL CARMEN'),
		lastName: capitalCadena('DELPINO SALAZAR'),
		type: 'regular',
		email: 'ydelpino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14067,
		nationality: 'V'.toUpperCase(),
		cedula: 14726517,
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
		userName: 'spineda'.toLowerCase(),
		name: capitalCadena('SUSANA ROXANA'),
		lastName: capitalCadena('PINEDA DIAZ'),
		type: 'regular',
		email: 'spineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14109,
		nationality: 'V'.toUpperCase(),
		cedula: 20486344,
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
		userName: 'yarnaez'.toLowerCase(),
		name: capitalCadena('YELITZA CAROLINA'),
		lastName: capitalCadena('ARNAEZ DUGARTE'),
		type: 'regular',
		email: 'yarnaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14113,
		nationality: 'V'.toUpperCase(),
		cedula: 13995419,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ejimenez'.toLowerCase(),
		name: capitalCadena('ERLENIS GABRIELA'),
		lastName: capitalCadena('JIMENEZ SOTO'),
		type: 'regular',
		email: 'ejimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14116,
		nationality: 'V'.toUpperCase(),
		cedula: 21308599,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acastro'.toLowerCase(),
		name: capitalCadena('ANDREINA MARISELA'),
		lastName: capitalCadena('CASTRO DE VARGAS'),
		type: 'regular',
		email: 'acastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14118,
		nationality: 'V'.toUpperCase(),
		cedula: 16423512,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sortega'.toLowerCase(),
		name: capitalCadena('SINDIVELY DEL CARMEN'),
		lastName: capitalCadena('ORTEGA ORTEGA'),
		type: 'regular',
		email: 'sortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13968,
		nationality: 'V'.toUpperCase(),
		cedula: 20443378,
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
		userName: 'fleal'.toLowerCase(),
		name: capitalCadena('FRAYERLIN CAROLINA'),
		lastName: capitalCadena('LEAL CASTAÑEDA'),
		type: 'regular',
		email: 'fleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14142,
		nationality: 'V'.toUpperCase(),
		cedula: 23566765,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaranguren'.toLowerCase(),
		name: capitalCadena('JAIKER ALEXANDER'),
		lastName: capitalCadena('ARANGUREN CACERES'),
		type: 'regular',
		email: 'jaranguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14283,
		nationality: 'V'.toUpperCase(),
		cedula: 25966091,
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
		userName: 'kpestana'.toLowerCase(),
		name: capitalCadena('KEETER JOSE'),
		lastName: capitalCadena('PESTANA DA COSTA'),
		type: 'regular',
		email: 'kpestana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14254,
		nationality: 'V'.toUpperCase(),
		cedula: 11232487,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lirojas'.toLowerCase(),
		name: capitalCadena('LILIA KARINA'),
		lastName: capitalCadena('ROJAS NUÑEZ'),
		type: 'regular',
		email: 'lirojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14309,
		nationality: 'V'.toUpperCase(),
		cedula: 11343655,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'raguilar'.toLowerCase(),
		name: capitalCadena('ROSA MILAGRO'),
		lastName: capitalCadena('DEL VALLE AGUILAR'),
		type: 'regular',
		email: 'raguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14325,
		nationality: 'V'.toUpperCase(),
		cedula: 15167246,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anavarro'.toLowerCase(),
		name: capitalCadena('ARTURO LUIS'),
		lastName: capitalCadena('NAVARRO MARTINEZ'),
		type: 'regular',
		email: 'anavarro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14290,
		nationality: 'V'.toUpperCase(),
		cedula: 17408416,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asangronis'.toLowerCase(),
		name: capitalCadena('ANGELY DESIREE'),
		lastName: capitalCadena('SANGRONIS '),
		type: 'regular',
		email: 'asangronis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14333,
		nationality: 'V'.toUpperCase(),
		cedula: 17808584,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juagarcia'.toLowerCase(),
		name: capitalCadena('JUAN MIGUEL'),
		lastName: capitalCadena('GARCIA ORTEGA'),
		type: 'regular',
		email: 'juagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14344,
		nationality: 'V'.toUpperCase(),
		cedula: 21215708,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atorrence'.toLowerCase(),
		name: capitalCadena('ANA MARIA'),
		lastName: capitalCadena('TORRENCE MARIÑO'),
		type: 'regular',
		email: 'atorrence@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14360,
		nationality: 'V'.toUpperCase(),
		cedula: 20082460,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abogado'.toLowerCase(),
		name: capitalCadena('ANDRES EDUARDO'),
		lastName: capitalCadena('BOGADO MEDINA'),
		type: 'regular',
		email: 'abogado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14306,
		nationality: 'V'.toUpperCase(),
		cedula: 22291168,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sperez'.toLowerCase(),
		name: capitalCadena('STEFANY ANDREINA'),
		lastName: capitalCadena('PEREZ PAREDES'),
		type: 'regular',
		email: 'sperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14409,
		nationality: 'V'.toUpperCase(),
		cedula: 26972329,
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
		userName: 'ftapias'.toLowerCase(),
		name: capitalCadena('FLOR DESIREE'),
		lastName: capitalCadena('TAPIAS RAMIREZ'),
		type: 'regular',
		email: 'ftapias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14435,
		nationality: 'V'.toUpperCase(),
		cedula: 10803473,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anagutierrez'.toLowerCase(),
		name: capitalCadena('ANA ROSA'),
		lastName: capitalCadena('GUTIERREZ TOVAR'),
		type: 'regular',
		email: 'anagutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14444,
		nationality: 'V'.toUpperCase(),
		cedula: 10268656,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lborges'.toLowerCase(),
		name: capitalCadena('LAYMEDES DEL VALLE'),
		lastName: capitalCadena('BORGES SALAZAR'),
		type: 'regular',
		email: 'lborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14454,
		nationality: 'V'.toUpperCase(),
		cedula: 16462014,
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
		userName: 'emeza'.toLowerCase(),
		name: capitalCadena('ELSY JOSEFINA'),
		lastName: capitalCadena('MEZA DE MONSALVE'),
		type: 'regular',
		email: 'emeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14466,
		nationality: 'V'.toUpperCase(),
		cedula: 14382513,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cpinto'.toLowerCase(),
		name: capitalCadena('CARELVIS YSNLENIA'),
		lastName: capitalCadena('PINTO LOPEZ'),
		type: 'regular',
		email: 'cpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14467,
		nationality: 'V'.toUpperCase(),
		cedula: 20485772,
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
		userName: 'fbustos'.toLowerCase(),
		name: capitalCadena('FLOR ELENA'),
		lastName: capitalCadena('BUSTOS DE RAMIREZ'),
		type: 'regular',
		email: 'fbustos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14482,
		nationality: 'V'.toUpperCase(),
		cedula: 10033788,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acolmenarez'.toLowerCase(),
		name: capitalCadena('ANA CRISTINA'),
		lastName: capitalCadena('COLMENAREZ COLMENAREZ'),
		type: 'regular',
		email: 'acolmenarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14502,
		nationality: 'V'.toUpperCase(),
		cedula: 17196712,
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
		userName: 'mescalona'.toLowerCase(),
		name: capitalCadena('MARY ANGELICA'),
		lastName: capitalCadena('ESCALONA MENDOZA'),
		type: 'regular',
		email: 'mescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14540,
		nationality: 'V'.toUpperCase(),
		cedula: 17844114,
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
		userName: 'yegonzalez'.toLowerCase(),
		name: capitalCadena('YERRY SANTOS'),
		lastName: capitalCadena('GONZALEZ BALAGUERA'),
		type: 'regular',
		email: 'yegonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14542,
		nationality: 'V'.toUpperCase(),
		cedula: 18361664,
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
		userName: 'yapacheco'.toLowerCase(),
		name: capitalCadena('YARITZA ARELIS'),
		lastName: capitalCadena('PACHECO JAEN'),
		type: 'regular',
		email: 'yapacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14543,
		nationality: 'V'.toUpperCase(),
		cedula: 8836257,
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
		userName: 'ecastellanos'.toLowerCase(),
		name: capitalCadena('ESTHER ANDREINA'),
		lastName: capitalCadena('CASTELLANOS NATERA'),
		type: 'regular',
		email: 'ecastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14648,
		nationality: 'V'.toUpperCase(),
		cedula: 22858465,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dvelasquez'.toLowerCase(),
		name: capitalCadena('DAYANA ROCIO'),
		lastName: capitalCadena('VELASQUEZ PETIT'),
		type: 'regular',
		email: 'dvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14707,
		nationality: 'V'.toUpperCase(),
		cedula: 12104413,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfernandez'.toLowerCase(),
		name: capitalCadena('YULAN MAYELI'),
		lastName: capitalCadena('FERNANDEZ MARQUEZ'),
		type: 'regular',
		email: 'yfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14737,
		nationality: 'V'.toUpperCase(),
		cedula: 18091802,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josalas'.toLowerCase(),
		name: capitalCadena('JOHEL JOSE'),
		lastName: capitalCadena('SALAS ACOSTA'),
		type: 'regular',
		email: 'josalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14747,
		nationality: 'V'.toUpperCase(),
		cedula: 13669955,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yerlopez'.toLowerCase(),
		name: capitalCadena('YERIDA FLORENCIA'),
		lastName: capitalCadena('LOPEZ MARTINEZ'),
		type: 'regular',
		email: 'yerlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14794,
		nationality: 'V'.toUpperCase(),
		cedula: 18187687,
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
		userName: 'yladino'.toLowerCase(),
		name: capitalCadena('YAHELIN COROMOTO'),
		lastName: capitalCadena('LADINO LADINO'),
		type: 'regular',
		email: 'yladino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14868,
		nationality: 'V'.toUpperCase(),
		cedula: 24936972,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpereira'.toLowerCase(),
		name: capitalCadena('JESUS DAVID'),
		lastName: capitalCadena('PEREIRA TORCATES'),
		type: 'regular',
		email: 'jpereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14895,
		nationality: 'V'.toUpperCase(),
		cedula: 29847715,
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
		userName: 'adgonzalez'.toLowerCase(),
		name: capitalCadena('ADRIAN ALEJANDRO'),
		lastName: capitalCadena('GONZALEZ CASTILLO'),
		type: 'regular',
		email: 'adgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14896,
		nationality: 'V'.toUpperCase(),
		cedula: 25163587,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pangulo'.toLowerCase(),
		name: capitalCadena('PEDRO ERNESTO'),
		lastName: capitalCadena('ANGULO RAMOS'),
		type: 'regular',
		email: 'pangulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14897,
		nationality: 'V'.toUpperCase(),
		cedula: 5130749,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mguevara'.toLowerCase(),
		name: capitalCadena('MARLVIRYS KAROLAYN'),
		lastName: capitalCadena('GUEVARA RONDON'),
		type: 'regular',
		email: 'mguevara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14964,
		nationality: 'V'.toUpperCase(),
		cedula: 18601582,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erdiaz'.toLowerCase(),
		name: capitalCadena('ERIKA VANESSA'),
		lastName: capitalCadena('DIAZ ROMERO'),
		type: 'regular',
		email: 'erdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14938,
		nationality: 'V'.toUpperCase(),
		cedula: 17459662,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvelasquez'.toLowerCase(),
		name: capitalCadena('YRISNEL PAOLA'),
		lastName: capitalCadena('VELASQUEZ FERRER'),
		type: 'regular',
		email: 'yvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14965,
		nationality: 'V'.toUpperCase(),
		cedula: 24719318,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agallardo'.toLowerCase(),
		name: capitalCadena('ALEXANDRA CRISTINA'),
		lastName: capitalCadena('GALLARDO VILLALOBOS'),
		type: 'regular',
		email: 'agallardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14987,
		nationality: 'V'.toUpperCase(),
		cedula: 26540152,
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
		userName: 'yriera'.toLowerCase(),
		name: capitalCadena('YOEXA TERESA'),
		lastName: capitalCadena('RIERA VASQUEZ'),
		type: 'regular',
		email: 'yriera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14988,
		nationality: 'V'.toUpperCase(),
		cedula: 15263734,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpernalete'.toLowerCase(),
		name: capitalCadena('KEILA CAROLYN'),
		lastName: capitalCadena('PERNALETE CORDERO'),
		type: 'regular',
		email: 'kpernalete@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14989,
		nationality: 'V'.toUpperCase(),
		cedula: 17621230,
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
		userName: 'amrondon'.toLowerCase(),
		name: capitalCadena('AMIRKA SOLEISIS'),
		lastName: capitalCadena('RONDON YDROGO'),
		type: 'regular',
		email: 'amrondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14980,
		nationality: 'V'.toUpperCase(),
		cedula: 13853637,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jeortiz'.toLowerCase(),
		name: capitalCadena('JEYMY ANDREA'),
		lastName: capitalCadena('ORTIZ ORTIZ'),
		type: 'regular',
		email: 'jeortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15008,
		nationality: 'V'.toUpperCase(),
		cedula: 14542486,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tgomez'.toLowerCase(),
		name: capitalCadena('THAIS YOLEYDA'),
		lastName: capitalCadena('GOMEZ PEREZ'),
		type: 'regular',
		email: 'tgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15043,
		nationality: 'V'.toUpperCase(),
		cedula: 9633860,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoya'.toLowerCase(),
		name: capitalCadena('JOANA ROSALINA'),
		lastName: capitalCadena('MOYA '),
		type: 'regular',
		email: 'jmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14984,
		nationality: 'V'.toUpperCase(),
		cedula: 12740314,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yulehernandez'.toLowerCase(),
		name: capitalCadena('YULEICI JOSE'),
		lastName: capitalCadena('HERNANDEZ OVIEDO'),
		type: 'regular',
		email: 'yulehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15047,
		nationality: 'V'.toUpperCase(),
		cedula: 24472221,
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
		userName: 'mmendez'.toLowerCase(),
		name: capitalCadena('MARIANA DEL MILAGRO'),
		lastName: capitalCadena('MENDEZ CALDERAS'),
		type: 'regular',
		email: 'mmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15004,
		nationality: 'V'.toUpperCase(),
		cedula: 24559637,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycastellano'.toLowerCase(),
		name: capitalCadena('YOSANDRE JOSE'),
		lastName: capitalCadena('CASTELLANO GODOY'),
		type: 'regular',
		email: 'ycastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15055,
		nationality: 'V'.toUpperCase(),
		cedula: 16157143,
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
		userName: 'mybarra'.toLowerCase(),
		name: capitalCadena('MARIA DANIELA'),
		lastName: capitalCadena('YBARRA BASTIDAS'),
		type: 'regular',
		email: 'mybarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15074,
		nationality: 'V'.toUpperCase(),
		cedula: 27145960,
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
		userName: 'fanton'.toLowerCase(),
		name: capitalCadena('FANIA ALEJANDRA'),
		lastName: capitalCadena('ANTON DE OLIVERO'),
		type: 'regular',
		email: 'fanton@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15007,
		nationality: 'V'.toUpperCase(),
		cedula: 14841482,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anagarcia'.toLowerCase(),
		name: capitalCadena('ANA KARINA'),
		lastName: capitalCadena('GARCIA FUSCO'),
		type: 'regular',
		email: 'anagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15087,
		nationality: 'V'.toUpperCase(),
		cedula: 18186879,
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
		userName: 'llara'.toLowerCase(),
		name: capitalCadena('LIANNYS MARIANA'),
		lastName: capitalCadena('LARA ROJAS'),
		type: 'regular',
		email: 'llara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15096,
		nationality: 'V'.toUpperCase(),
		cedula: 26581760,
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
		userName: 'gaponte'.toLowerCase(),
		name: capitalCadena('GERMAIN JOSE'),
		lastName: capitalCadena('APONTE SANCHEZ'),
		type: 'regular',
		email: 'gaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15097,
		nationality: 'V'.toUpperCase(),
		cedula: 18783490,
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
		userName: 'elpena'.toLowerCase(),
		name: capitalCadena('ELVIRA MARGARITA'),
		lastName: capitalCadena('PEÑA YUSTI'),
		type: 'regular',
		email: 'elpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15099,
		nationality: 'V'.toUpperCase(),
		cedula: 18746421,
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
		userName: 'ymora'.toLowerCase(),
		name: capitalCadena('YALIESCA ATNELIS'),
		lastName: capitalCadena('MORA SALAZAR'),
		type: 'regular',
		email: 'ymora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15090,
		nationality: 'V'.toUpperCase(),
		cedula: 25070681,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ceperez'.toLowerCase(),
		name: capitalCadena('CESAR FABIAN'),
		lastName: capitalCadena('PEREZ PAREDES'),
		type: 'regular',
		email: 'ceperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15156,
		nationality: 'V'.toUpperCase(),
		cedula: 28673103,
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
		userName: 'ecotogno'.toLowerCase(),
		name: capitalCadena('EDUARDO ALEJANDRO'),
		lastName: capitalCadena('COTOGNO REYES'),
		type: 'regular',
		email: 'ecotogno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15110,
		nationality: 'V'.toUpperCase(),
		cedula: 19116471,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'leperez'.toLowerCase(),
		name: capitalCadena('LESMA DORGREY'),
		lastName: capitalCadena('PEREZ CUEVAS'),
		type: 'regular',
		email: 'leperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15208,
		nationality: 'V'.toUpperCase(),
		cedula: 16234444,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marirodriguez'.toLowerCase(),
		name: capitalCadena('MARIANGEL BRIGITTE'),
		lastName: capitalCadena('RODRIGUEZ CALDERON'),
		type: 'regular',
		email: 'marirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15210,
		nationality: 'V'.toUpperCase(),
		cedula: 27477790,
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
		userName: 'magil'.toLowerCase(),
		name: capitalCadena('MARIELIS DE LOS ANGELES'),
		lastName: capitalCadena('GIL LUGO'),
		type: 'regular',
		email: 'magil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15238,
		nationality: 'V'.toUpperCase(),
		cedula: 23435780,
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
		userName: 'lucampos'.toLowerCase(),
		name: capitalCadena('LUISA JACQUELINE'),
		lastName: capitalCadena('CAMPOS ARISMENDI'),
		type: 'regular',
		email: 'lucampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15244,
		nationality: 'V'.toUpperCase(),
		cedula: 16828725,
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
		userName: 'andromero'.toLowerCase(),
		name: capitalCadena('ANDRY JOSE'),
		lastName: capitalCadena('ROMERO REYES'),
		type: 'regular',
		email: 'andromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15245,
		nationality: 'V'.toUpperCase(),
		cedula: 27754360,
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
		userName: 'jfuentes'.toLowerCase(),
		name: capitalCadena('JUAN ALEJANDRO'),
		lastName: capitalCadena('FUENTES PIÑERUA'),
		type: 'regular',
		email: 'jfuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15164,
		nationality: 'V'.toUpperCase(),
		cedula: 17847370,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'algomez'.toLowerCase(),
		name: capitalCadena('ALEXANDRA JOSEFINA'),
		lastName: capitalCadena('GOMEZ MAZZEI'),
		type: 'regular',
		email: 'algomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15254,
		nationality: 'V'.toUpperCase(),
		cedula: 9882139,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wrojas'.toLowerCase(),
		name: capitalCadena('WILLEIDI ISAMAR'),
		lastName: capitalCadena('ROJAS MENDOZA'),
		type: 'regular',
		email: 'wrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15196,
		nationality: 'V'.toUpperCase(),
		cedula: 23785724,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycorniel'.toLowerCase(),
		name: capitalCadena('YENSYS YURBELYS'),
		lastName: capitalCadena('CORNIEL ZAPATA'),
		type: 'regular',
		email: 'ycorniel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15243,
		nationality: 'V'.toUpperCase(),
		cedula: 19003339,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mdasilva'.toLowerCase(),
		name: capitalCadena('MANUEL ANDERSON'),
		lastName: capitalCadena('DA SILVA OSUNA'),
		type: 'regular',
		email: 'mdasilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15342,
		nationality: 'V'.toUpperCase(),
		cedula: 13062804,
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
		userName: 'blezama'.toLowerCase(),
		name: capitalCadena('BLISMAR DE LOS ANGELES'),
		lastName: capitalCadena('LEZAMA JIMENEZ'),
		type: 'regular',
		email: 'blezama@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15366,
		nationality: 'V'.toUpperCase(),
		cedula: 18827093,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edintorres'.toLowerCase(),
		name: capitalCadena('EDINSO JOSE'),
		lastName: capitalCadena('TORRES LOZADA'),
		type: 'regular',
		email: 'edintorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15365,
		nationality: 'V'.toUpperCase(),
		cedula: 21249398,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zparedes'.toLowerCase(),
		name: capitalCadena('ZULEIDY MARIA'),
		lastName: capitalCadena('PAREDES LOYO'),
		type: 'regular',
		email: 'zparedes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15378,
		nationality: 'V'.toUpperCase(),
		cedula: 22315059,
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
		userName: 'yjimenez'.toLowerCase(),
		name: capitalCadena('YEIBER JOSE'),
		lastName: capitalCadena('JIMENEZ RODRIGUEZ'),
		type: 'regular',
		email: 'yjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15416,
		nationality: 'V'.toUpperCase(),
		cedula: 29873689,
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
		userName: 'fmalave'.toLowerCase(),
		name: capitalCadena('FRANCIS DEL CARMEN'),
		lastName: capitalCadena('MALAVE GUTIERREZ'),
		type: 'regular',
		email: 'fmalave@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15410,
		nationality: 'V'.toUpperCase(),
		cedula: 26897794,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcarmona'.toLowerCase(),
		name: capitalCadena('JUAN JOSE'),
		lastName: capitalCadena('CARMONA BORDONES'),
		type: 'regular',
		email: 'jcarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15417,
		nationality: 'V'.toUpperCase(),
		cedula: 21099356,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maflores'.toLowerCase(),
		name: capitalCadena('MARINA DEL CARMEN'),
		lastName: capitalCadena('FLORES JIMENEZ'),
		type: 'regular',
		email: 'maflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15460,
		nationality: 'V'.toUpperCase(),
		cedula: 18690389,
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
		userName: 'ynlopez'.toLowerCase(),
		name: capitalCadena('YNGRELI YEXURI'),
		lastName: capitalCadena('LOPEZ DUQUE'),
		type: 'regular',
		email: 'ynlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15453,
		nationality: 'V'.toUpperCase(),
		cedula: 20453692,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jperaza'.toLowerCase(),
		name: capitalCadena('JHOAN ARNALDO'),
		lastName: capitalCadena('PERAZA BETANCOURT'),
		type: 'regular',
		email: 'jperaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15490,
		nationality: 'V'.toUpperCase(),
		cedula: 14159233,
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
		userName: 'dsuarez'.toLowerCase(),
		name: capitalCadena('DARLENY ANAHISA'),
		lastName: capitalCadena('SUAREZ RODRIGUEZ'),
		type: 'regular',
		email: 'dsuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15491,
		nationality: 'V'.toUpperCase(),
		cedula: 28577138,
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
		userName: 'alcolmenares'.toLowerCase(),
		name: capitalCadena('ALBA MARINA'),
		lastName: capitalCadena('COLMENARES ESCALONA'),
		type: 'regular',
		email: 'alcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15492,
		nationality: 'V'.toUpperCase(),
		cedula: 21160753,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmarin'.toLowerCase(),
		name: capitalCadena('FRANCIS DEL VALLE'),
		lastName: capitalCadena('MARIN DE SALINAS'),
		type: 'regular',
		email: 'fmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15458,
		nationality: 'V'.toUpperCase(),
		cedula: 12672959,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drodriguez'.toLowerCase(),
		name: capitalCadena('DAIREN DE JESUS'),
		lastName: capitalCadena('RODRIGUEZ PEREZ'),
		type: 'regular',
		email: 'drodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15488,
		nationality: 'V'.toUpperCase(),
		cedula: 23501969,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kirodriguez'.toLowerCase(),
		name: capitalCadena('KISLEIBY BAUDILIANA'),
		lastName: capitalCadena('RODRIGUEZ CASTRO'),
		type: 'regular',
		email: 'kirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15563,
		nationality: 'V'.toUpperCase(),
		cedula: 25161006,
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
		userName: 'nmontilla'.toLowerCase(),
		name: capitalCadena('NORBELYS COROMOTO'),
		lastName: capitalCadena('MONTILLA RAMOS'),
		type: 'regular',
		email: 'nmontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15564,
		nationality: 'V'.toUpperCase(),
		cedula: 22091765,
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
		userName: 'mvanegas'.toLowerCase(),
		name: capitalCadena('MIGUEL ANTONIO'),
		lastName: capitalCadena('VANEGAS MALAGUERA'),
		type: 'regular',
		email: 'mvanegas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15566,
		nationality: 'V'.toUpperCase(),
		cedula: 17206775,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycazano'.toLowerCase(),
		name: capitalCadena('YETZALI JOHANNA'),
		lastName: capitalCadena('CAZANO RODRIGUEZ'),
		type: 'regular',
		email: 'ycazano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15575,
		nationality: 'V'.toUpperCase(),
		cedula: 15506074,
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
		userName: 'anarvaez'.toLowerCase(),
		name: capitalCadena('ALVARO JOSE'),
		lastName: capitalCadena('NARVAEZ MATUTE'),
		type: 'regular',
		email: 'anarvaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15576,
		nationality: 'V'.toUpperCase(),
		cedula: 15776971,
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
		userName: 'mmatamoros'.toLowerCase(),
		name: capitalCadena('MARIANGEL GABRIELA'),
		lastName: capitalCadena('MATAMOROS PRIMERA'),
		type: 'regular',
		email: 'mmatamoros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15577,
		nationality: 'V'.toUpperCase(),
		cedula: 30430476,
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
		userName: 'cpineda'.toLowerCase(),
		name: capitalCadena('CARLA GABRIELA'),
		lastName: capitalCadena('PINEDA TERAN'),
		type: 'regular',
		email: 'cpineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15580,
		nationality: 'V'.toUpperCase(),
		cedula: 27501908,
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
		userName: 'tsalcedo'.toLowerCase(),
		name: capitalCadena('TIFFANYS FRANCINE'),
		lastName: capitalCadena('SALCEDO SUAREZ'),
		type: 'regular',
		email: 'tsalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15581,
		nationality: 'V'.toUpperCase(),
		cedula: 30996563,
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
		userName: 'olopez'.toLowerCase(),
		name: capitalCadena('OSCAR DOMINGO'),
		lastName: capitalCadena('LOPEZ TENORIO'),
		type: 'regular',
		email: 'olopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15582,
		nationality: 'V'.toUpperCase(),
		cedula: 7099396,
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
		userName: 'rarodriguez'.toLowerCase(),
		name: capitalCadena('RAQUEL NOEMI'),
		lastName: capitalCadena('RODRIGUEZ OTAIZA'),
		type: 'regular',
		email: 'rarodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15584,
		nationality: 'V'.toUpperCase(),
		cedula: 20030080,
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
		userName: 'rshahun'.toLowerCase(),
		name: capitalCadena('RADI DE JESUS'),
		lastName: capitalCadena('SHAHUN MORENO'),
		type: 'regular',
		email: 'rshahun@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15559,
		nationality: 'V'.toUpperCase(),
		cedula: 30555942,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'keicastillo'.toLowerCase(),
		name: capitalCadena('KEIMI JANIS'),
		lastName: capitalCadena('CASTILLO BERMUDEZ'),
		type: 'regular',
		email: 'keicastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15561,
		nationality: 'V'.toUpperCase(),
		cedula: 19531634,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zhernandez'.toLowerCase(),
		name: capitalCadena('ZOBEIDA ALEJANDRA'),
		lastName: capitalCadena('HERNANDEZ LEAL'),
		type: 'regular',
		email: 'zhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15624,
		nationality: 'V'.toUpperCase(),
		cedula: 16132528,
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
		userName: 'emiranda'.toLowerCase(),
		name: capitalCadena('ERIKA NATHALY'),
		lastName: capitalCadena('MIRANDA BENITEZ'),
		type: 'regular',
		email: 'emiranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15629,
		nationality: 'V'.toUpperCase(),
		cedula: 16217496,
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
		userName: 'zliscano'.toLowerCase(),
		name: capitalCadena('ZOHAR ADRIANA'),
		lastName: capitalCadena('LISCANO MIRABAL'),
		type: 'regular',
		email: 'zliscano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15663,
		nationality: 'V'.toUpperCase(),
		cedula: 27259251,
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
		userName: 'pinto'.toLowerCase(),
		name: capitalCadena('RICHARD EDINSON'),
		lastName: capitalCadena('PINTO SALCEDO'),
		type: 'regular',
		email: 'pinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15664,
		nationality: 'V'.toUpperCase(),
		cedula: 20649079,
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
		userName: 'yagomez'.toLowerCase(),
		name: capitalCadena('YAMILET JOSE'),
		lastName: capitalCadena('GOMEZ PADRON'),
		type: 'regular',
		email: 'yagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15616,
		nationality: 'V'.toUpperCase(),
		cedula: 17337596,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agarce'.toLowerCase(),
		name: capitalCadena('ALBANYS DANIELA'),
		lastName: capitalCadena('GARCE SANCHEZ'),
		type: 'regular',
		email: 'agarce@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15671,
		nationality: 'V'.toUpperCase(),
		cedula: 30391306,
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
		userName: 'mamejias'.toLowerCase(),
		name: capitalCadena('MARIANA ALEJANDRA'),
		lastName: capitalCadena('MEJIAS MEDINA'),
		type: 'regular',
		email: 'mamejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15672,
		nationality: 'V'.toUpperCase(),
		cedula: 31313828,
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
		userName: 'vvasquez'.toLowerCase(),
		name: capitalCadena('VERONICA IBRAYANA'),
		lastName: capitalCadena('VASQUEZ RIVERO'),
		type: 'regular',
		email: 'vvasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15674,
		nationality: 'V'.toUpperCase(),
		cedula: 28529249,
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
		userName: 'naleon'.toLowerCase(),
		name: capitalCadena('NATASHA VALENTINA'),
		lastName: capitalCadena('LEON APONTE'),
		type: 'regular',
		email: 'naleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15675,
		nationality: 'V'.toUpperCase(),
		cedula: 30821702,
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
		userName: 'maygutierrez'.toLowerCase(),
		name: capitalCadena('MAYRIANNY FRANYESQUI'),
		lastName: capitalCadena('GUTIERREZ SEQUERA'),
		type: 'regular',
		email: 'maygutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15676,
		nationality: 'V'.toUpperCase(),
		cedula: 30657003,
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
		userName: 'hbalza'.toLowerCase(),
		name: capitalCadena('HEIDIMAR ALEXANDRA'),
		lastName: capitalCadena('BALZA SILVA'),
		type: 'regular',
		email: 'hbalza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15677,
		nationality: 'V'.toUpperCase(),
		cedula: 29603454,
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
		userName: 'fdavila'.toLowerCase(),
		name: capitalCadena('FRANCHESKA MARIA'),
		lastName: capitalCadena('DAVILA CORREA'),
		type: 'regular',
		email: 'fdavila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15678,
		nationality: 'V'.toUpperCase(),
		cedula: 30948485,
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
		userName: 'limaldonado'.toLowerCase(),
		name: capitalCadena('LIZMAR ANDREA'),
		lastName: capitalCadena('MALDONADO ZERPA'),
		type: 'regular',
		email: 'limaldonado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15679,
		nationality: 'V'.toUpperCase(),
		cedula: 30197897,
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
		userName: 'naponte'.toLowerCase(),
		name: capitalCadena('NORELIS ANDREINA'),
		lastName: capitalCadena('APONTE MACIAS'),
		type: 'regular',
		email: 'naponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15680,
		nationality: 'V'.toUpperCase(),
		cedula: 30172384,
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
		userName: 'mtorrealba'.toLowerCase(),
		name: capitalCadena('MANUEL ALEJANDRO'),
		lastName: capitalCadena('TORREALBA ECHENIQUE'),
		type: 'regular',
		email: 'mtorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15681,
		nationality: 'V'.toUpperCase(),
		cedula: 25716519,
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
		userName: 'laurodriguez'.toLowerCase(),
		name: capitalCadena('LAURA MARIA'),
		lastName: capitalCadena('RODRIGUEZ QUERALES'),
		type: 'regular',
		email: 'laurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15732,
		nationality: 'V'.toUpperCase(),
		cedula: 16238575,
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
		userName: 'yearojas'.toLowerCase(),
		name: capitalCadena('YEANMAR ARIADNA'),
		lastName: capitalCadena('ROJAS BRITO'),
		type: 'regular',
		email: 'yearojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15733,
		nationality: 'V'.toUpperCase(),
		cedula: 19164553,
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
		userName: 'cgranda'.toLowerCase(),
		name: capitalCadena('CAROLL LISSETH'),
		lastName: capitalCadena('GRANDA SOTO'),
		type: 'regular',
		email: 'cgranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15734,
		nationality: 'V'.toUpperCase(),
		cedula: 15731647,
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
		userName: 'mgarcia'.toLowerCase(),
		name: capitalCadena('MAIROBY ALBANY'),
		lastName: capitalCadena('GARCIA DE OVIEDO'),
		type: 'regular',
		email: 'mgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15735,
		nationality: 'V'.toUpperCase(),
		cedula: 19640757,
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
		userName: 'jrojo'.toLowerCase(),
		name: capitalCadena('JOSELIN ALBANIS'),
		lastName: capitalCadena('ROJO ZAMBRANO'),
		type: 'regular',
		email: 'jrojo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15778,
		nationality: 'V'.toUpperCase(),
		cedula: 30647787,
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
		userName: 'ezrivas'.toLowerCase(),
		name: capitalCadena('DIANNYS DEL VALLE'),
		lastName: capitalCadena('MILLAN JIMENEZ'),
		type: 'regular',
		email: 'ezrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15763,
		nationality: 'V'.toUpperCase(),
		cedula: 21083313,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'heclopez'.toLowerCase(),
		name: capitalCadena('HECNAYLIN YESIVEL'),
		lastName: capitalCadena('LOPEZ GUERRA'),
		type: 'regular',
		email: 'heclopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15801,
		nationality: 'V'.toUpperCase(),
		cedula: 22222983,
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
		userName: 'miaguiar'.toLowerCase(),
		name: capitalCadena('MIRTHA ELENA'),
		lastName: capitalCadena('AGUIAR REYES'),
		type: 'regular',
		email: 'miaguiar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15802,
		nationality: 'V'.toUpperCase(),
		cedula: 9448765,
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
		userName: 'esoto'.toLowerCase(),
		name: capitalCadena('ESCARLET MICHELL'),
		lastName: capitalCadena('SOTO PERDOMO'),
		type: 'regular',
		email: 'esoto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15803,
		nationality: 'V'.toUpperCase(),
		cedula: 29872056,
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
		userName: 'cahernandez'.toLowerCase(),
		name: capitalCadena('CAROLINA LISBETH'),
		lastName: capitalCadena('HERNANDEZ COLMENAREZ'),
		type: 'regular',
		email: 'cahernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15806,
		nationality: 'V'.toUpperCase(),
		cedula: 17507423,
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
		userName: 'mereu'.toLowerCase(),
		name: capitalCadena('MARIA ANTONIETTA'),
		lastName: capitalCadena('EREU PEREZ'),
		type: 'regular',
		email: 'mereu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15807,
		nationality: 'V'.toUpperCase(),
		cedula: 17348132,
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
		userName: 'nrodriguez'.toLowerCase(),
		name: capitalCadena('NAIROBIS DAYANA'),
		lastName: capitalCadena('RODRIGUEZ CASTILLO'),
		type: 'regular',
		email: 'nrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15808,
		nationality: 'V'.toUpperCase(),
		cedula: 20694502,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvazquez'.toLowerCase(),
		name: capitalCadena('MARIAN HERNALY'),
		lastName: capitalCadena('VAZQUEZ SOTELDO'),
		type: 'regular',
		email: 'mvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15869,
		nationality: 'V'.toUpperCase(),
		cedula: 25340213,
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
		userName: 'fpinto'.toLowerCase(),
		name: capitalCadena('FRANKLIN JOSE'),
		lastName: capitalCadena('PINTO SANCHEZ'),
		type: 'regular',
		email: 'fpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15870,
		nationality: 'V'.toUpperCase(),
		cedula: 25049986,
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
		userName: 'anserrano'.toLowerCase(),
		name: capitalCadena('ANDRES JOSE'),
		lastName: capitalCadena('SERRANO CORTECIA'),
		type: 'regular',
		email: 'anserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15853,
		nationality: 'V'.toUpperCase(),
		cedula: 14840028,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'smartinez'.toLowerCase(),
		name: capitalCadena('SANDRA ISABEL'),
		lastName: capitalCadena('MARTINEZ MORENO'),
		type: 'regular',
		email: 'smartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15873,
		nationality: 'V'.toUpperCase(),
		cedula: 23579207,
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
		userName: 'marondon'.toLowerCase(),
		name: capitalCadena('MARIELA DEL CARMEN'),
		lastName: capitalCadena('RONDON MANZANO'),
		type: 'regular',
		email: 'marondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15875,
		nationality: 'V'.toUpperCase(),
		cedula: 13591741,
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
		userName: 'egalindez'.toLowerCase(),
		name: capitalCadena('EZEQUIEL DAVID'),
		lastName: capitalCadena('GALINDEZ JIMENEZ'),
		type: 'regular',
		email: 'egalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15876,
		nationality: 'V'.toUpperCase(),
		cedula: 30145614,
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
		userName: 'yarengifo'.toLowerCase(),
		name: capitalCadena('YANEYCA IROSANA'),
		lastName: capitalCadena('RENGIFO VALECILLOS'),
		type: 'regular',
		email: 'yarengifo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15865,
		nationality: 'V'.toUpperCase(),
		cedula: 26734831,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tsoto'.toLowerCase(),
		name: capitalCadena('TRINIDAD DE JESUS'),
		lastName: capitalCadena('SOTO FIGUERAS'),
		type: 'regular',
		email: 'tsoto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15907,
		nationality: 'V'.toUpperCase(),
		cedula: 16414594,
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
		userName: 'yacastillo'.toLowerCase(),
		name: capitalCadena('YASMIN ALEXANDER'),
		lastName: capitalCadena('CASTILLO SIERRALTA'),
		type: 'regular',
		email: 'yacastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15908,
		nationality: 'V'.toUpperCase(),
		cedula: 14303125,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edgonzalez'.toLowerCase(),
		name: capitalCadena('EDILBERTO RAMON'),
		lastName: capitalCadena('GONZALEZ GARCES'),
		type: 'regular',
		email: 'edgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15909,
		nationality: 'V'.toUpperCase(),
		cedula: 14663541,
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
		userName: 'kperez'.toLowerCase(),
		name: capitalCadena('KLEYIS MARIANGEL'),
		lastName: capitalCadena('PEREZ GEROMES'),
		type: 'regular',
		email: 'kperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15872,
		nationality: 'V'.toUpperCase(),
		cedula: 20693038,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'olugo'.toLowerCase(),
		name: capitalCadena('OSCAR JOSE'),
		lastName: capitalCadena('LUGO FERNANDEZ'),
		type: 'regular',
		email: 'olugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15929,
		nationality: 'V'.toUpperCase(),
		cedula: 18067445,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frondon'.toLowerCase(),
		name: capitalCadena('FERNANDO ISAAC'),
		lastName: capitalCadena('RONDON RODRIGUEZ'),
		type: 'regular',
		email: 'frondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15879,
		nationality: 'V'.toUpperCase(),
		cedula: 29643955,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yomedina'.toLowerCase(),
		name: capitalCadena('YOLIBETH LORENA'),
		lastName: capitalCadena('MEDINA RODRIGUEZ'),
		type: 'regular',
		email: 'yomedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15937,
		nationality: 'V'.toUpperCase(),
		cedula: 14540861,
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
		userName: 'lmedina'.toLowerCase(),
		name: capitalCadena('LIBIA NIRVANA'),
		lastName: capitalCadena('MEDINA DE DA SILVA'),
		type: 'regular',
		email: 'lmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15944,
		nationality: 'V'.toUpperCase(),
		cedula: 7023143,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrondon'.toLowerCase(),
		name: capitalCadena('LILIANA DEL CARMEN'),
		lastName: capitalCadena('RONDON '),
		type: 'regular',
		email: 'lrondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15958,
		nationality: 'V'.toUpperCase(),
		cedula: 16615794,
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
		userName: 'lherrera'.toLowerCase(),
		name: capitalCadena('LEOPOLDO ALBERTO'),
		lastName: capitalCadena('HERRERA ALAMO'),
		type: 'regular',
		email: 'lherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15936,
		nationality: 'V'.toUpperCase(),
		cedula: 15739170,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmonasterios'.toLowerCase(),
		name: capitalCadena('DANIEL JESUS'),
		lastName: capitalCadena('MONASTERIO RAMIREZ'),
		type: 'regular',
		email: 'dmonasterios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15939,
		nationality: 'V'.toUpperCase(),
		cedula: 28032055,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lhipolito'.toLowerCase(),
		name: capitalCadena('LEIDA SARAI'),
		lastName: capitalCadena('HIPOLITO MACHIS'),
		type: 'regular',
		email: 'lhipolito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15949,
		nationality: 'V'.toUpperCase(),
		cedula: 17999215,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mapadron'.toLowerCase(),
		name: capitalCadena('MARJORIE BEATRIZ'),
		lastName: capitalCadena('PADRON NOA'),
		type: 'regular',
		email: 'mapadron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15963,
		nationality: 'V'.toUpperCase(),
		cedula: 16762117,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kramos'.toLowerCase(),
		name: capitalCadena('KHARLA ANYERI'),
		lastName: capitalCadena('RAMOS CEBALLOS'),
		type: 'regular',
		email: 'kramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16021,
		nationality: 'V'.toUpperCase(),
		cedula: 17985426,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'misalas'.toLowerCase(),
		name: capitalCadena('MIRIAM JOSE'),
		lastName: capitalCadena('SALAS GRATEROL'),
		type: 'regular',
		email: 'misalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16023,
		nationality: 'V'.toUpperCase(),
		cedula: 16762151,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aleperez'.toLowerCase(),
		name: capitalCadena('ALEXANDRA MARINA'),
		lastName: capitalCadena('PEREZ REYES'),
		type: 'regular',
		email: 'aleperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16050,
		nationality: 'V'.toUpperCase(),
		cedula: 22009000,
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
		userName: 'amena'.toLowerCase(),
		name: capitalCadena('ADRIAN JOSE'),
		lastName: capitalCadena('MENA OTERO'),
		type: 'regular',
		email: 'amena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16032,
		nationality: 'V'.toUpperCase(),
		cedula: 25501946,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccastillo'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('CASTILLO LEDEZMA'),
		type: 'regular',
		email: 'ccastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16069,
		nationality: 'V'.toUpperCase(),
		cedula: 23785406,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'airivero'.toLowerCase(),
		name: capitalCadena('AIDA LILIMAR'),
		lastName: capitalCadena('RIVERO CASADIEGO'),
		type: 'regular',
		email: 'airivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16100,
		nationality: 'V'.toUpperCase(),
		cedula: 16993163,
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
		userName: 'ahermes'.toLowerCase(),
		name: capitalCadena('ANDREINA DESSIRE'),
		lastName: capitalCadena('HERMES MARQUEZ'),
		type: 'regular',
		email: 'ahermes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16116,
		nationality: 'V'.toUpperCase(),
		cedula: 19295728,
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
		userName: 'lgalindo'.toLowerCase(),
		name: capitalCadena('LAURY DEL VALLE'),
		lastName: capitalCadena('GALINDO CARTA'),
		type: 'regular',
		email: 'lgalindo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16102,
		nationality: 'V'.toUpperCase(),
		cedula: 10357225,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aalegria'.toLowerCase(),
		name: capitalCadena('ALEXIS ANTONIO'),
		lastName: capitalCadena('ALEGRIA VARGAS'),
		type: 'regular',
		email: 'aalegria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16168,
		nationality: 'V'.toUpperCase(),
		cedula: 13473604,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'laygomez'.toLowerCase(),
		name: capitalCadena('LAYLA CAROLINA'),
		lastName: capitalCadena('GOMEZ ORELLANA'),
		type: 'regular',
		email: 'laygomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16172,
		nationality: 'V'.toUpperCase(),
		cedula: 16530750,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hgalvis'.toLowerCase(),
		name: capitalCadena('HERNANDO JOSE'),
		lastName: capitalCadena('GALVIS BERMUDEZ'),
		type: 'regular',
		email: 'hgalvis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16221,
		nationality: 'V'.toUpperCase(),
		cedula: 15341045,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wcastillo'.toLowerCase(),
		name: capitalCadena('WILMER RAFAEL'),
		lastName: capitalCadena('CASTILLO ACOSTA'),
		type: 'regular',
		email: 'wcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16248,
		nationality: 'V'.toUpperCase(),
		cedula: 10230620,
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
		userName: 'rudvargas@bnc.com,ve'.toLowerCase(),
		name: capitalCadena('RUDDY SONILENNY'),
		lastName: capitalCadena('VARGAS YUSTIS'),
		type: 'regular',
		email: 'rudvargas@bnc.com,ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16249,
		nationality: 'V'.toUpperCase(),
		cedula: 21461151,
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
		userName: 'ftovar'.toLowerCase(),
		name: capitalCadena('FRANCISCO ANTONIO'),
		lastName: capitalCadena('TOVAR CARRASCO'),
		type: 'regular',
		email: 'ftovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16251,
		nationality: 'V'.toUpperCase(),
		cedula: 28439932,
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
		userName: 'frodriguez'.toLowerCase(),
		name: capitalCadena('NIEVES '),
		lastName: capitalCadena('RODRIGUEZ SAN FIEL'),
		type: 'regular',
		email: 'frodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16265,
		nationality: 'V'.toUpperCase(),
		cedula: 81185254,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'flima'.toLowerCase(),
		name: capitalCadena('FABIOLA THAIS'),
		lastName: capitalCadena('LIMA MEJIAS'),
		type: 'regular',
		email: 'flima@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16267,
		nationality: 'V'.toUpperCase(),
		cedula: 10328229,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nnavarro'.toLowerCase(),
		name: capitalCadena('NETZA VIRGINIA'),
		lastName: capitalCadena('NAVARRO QUINTERO'),
		type: 'regular',
		email: 'nnavarro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16268,
		nationality: 'V'.toUpperCase(),
		cedula: 18083974,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anatrodriguez'.toLowerCase(),
		name: capitalCadena('ANA TERESITA DE JESUS'),
		lastName: capitalCadena('RODRIGUEZ DE JIMENEZ'),
		type: 'regular',
		email: 'anatrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16269,
		nationality: 'V'.toUpperCase(),
		cedula: 12192588,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'evmartinez'.toLowerCase(),
		name: capitalCadena('EVELIN VANESSA'),
		lastName: capitalCadena('MARTINEZ '),
		type: 'regular',
		email: 'evmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16244,
		nationality: 'V'.toUpperCase(),
		cedula: 16700275,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hflores'.toLowerCase(),
		name: capitalCadena('HEDERLEY PAOLA'),
		lastName: capitalCadena('FLORES BORGES'),
		type: 'regular',
		email: 'hflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16250,
		nationality: 'V'.toUpperCase(),
		cedula: 26570797,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yadblanco'.toLowerCase(),
		name: capitalCadena('YADIWIL DE JESUS'),
		lastName: capitalCadena('BLANCO DE RODRIGUEZ'),
		type: 'regular',
		email: 'yadblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16296,
		nationality: 'V'.toUpperCase(),
		cedula: 15951131,
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
		userName: 'curquiola'.toLowerCase(),
		name: capitalCadena('CHRISTINE CAROLINA'),
		lastName: capitalCadena('URQUIOLA CABRERA'),
		type: 'regular',
		email: 'curquiola@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16297,
		nationality: 'V'.toUpperCase(),
		cedula: 20896673,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rgarcia'.toLowerCase(),
		name: capitalCadena('ROSAIDA DEL VALLE'),
		lastName: capitalCadena('GARCIA PINO'),
		type: 'regular',
		email: 'rgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16300,
		nationality: 'V'.toUpperCase(),
		cedula: 15676609,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymachado'.toLowerCase(),
		name: capitalCadena('YILMARIN ANDREINA'),
		lastName: capitalCadena('MACHADO HERNANDEZ'),
		type: 'regular',
		email: 'ymachado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16306,
		nationality: 'V'.toUpperCase(),
		cedula: 21252305,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ypino'.toLowerCase(),
		name: capitalCadena('YANETH CAROLINA'),
		lastName: capitalCadena('PINO VELASQUEZ'),
		type: 'regular',
		email: 'ypino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16357,
		nationality: 'V'.toUpperCase(),
		cedula: 18940352,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josvelasquez'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('VELASQUEZ CARBILLO'),
		type: 'regular',
		email: 'josvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16363,
		nationality: 'V'.toUpperCase(),
		cedula: 14509516,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'smavarez'.toLowerCase(),
		name: capitalCadena('SANDRA CONSTANSA'),
		lastName: capitalCadena('MAVAREZ ROMERO'),
		type: 'regular',
		email: 'smavarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16368,
		nationality: 'V'.toUpperCase(),
		cedula: 12326403,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luhernandez'.toLowerCase(),
		name: capitalCadena('LUIS MANUEL'),
		lastName: capitalCadena('HERNANDEZ REQUENA'),
		type: 'regular',
		email: 'luhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16391,
		nationality: 'V'.toUpperCase(),
		cedula: 12921640,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aigil'.toLowerCase(),
		name: capitalCadena('AIDA MARGARITA'),
		lastName: capitalCadena('GIL PEÑA'),
		type: 'regular',
		email: 'aigil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16392,
		nationality: 'V'.toUpperCase(),
		cedula: 10200557,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'airiarte'.toLowerCase(),
		name: capitalCadena('ARIAGNA MAYRELIS'),
		lastName: capitalCadena('IRIARTE FREITES'),
		type: 'regular',
		email: 'airiarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16405,
		nationality: 'V'.toUpperCase(),
		cedula: 30681193,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ywong'.toLowerCase(),
		name: capitalCadena('YVONNE YOSMAR'),
		lastName: capitalCadena('WONG LABRADOR'),
		type: 'regular',
		email: 'ywong@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16417,
		nationality: 'V'.toUpperCase(),
		cedula: 11993443,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'margil'.toLowerCase(),
		name: capitalCadena('MARYCRUZ '),
		lastName: capitalCadena('GIL '),
		type: 'regular',
		email: 'margil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16418,
		nationality: 'V'.toUpperCase(),
		cedula: 11419321,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lperez'.toLowerCase(),
		name: capitalCadena('LUISA ALEJANDRA'),
		lastName: capitalCadena('PEREZ GODOY'),
		type: 'regular',
		email: 'lperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16424,
		nationality: 'V'.toUpperCase(),
		cedula: 19032938,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'calvarez'.toLowerCase(),
		name: capitalCadena('CARMEN AMARILYS'),
		lastName: capitalCadena('ALVAREZ PERDOMO'),
		type: 'regular',
		email: 'calvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16434,
		nationality: 'V'.toUpperCase(),
		cedula: 14038144,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acolmenares'.toLowerCase(),
		name: capitalCadena('ANDRES JOSE'),
		lastName: capitalCadena('COLMENARES CHIVIDATTE'),
		type: 'regular',
		email: 'acolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16435,
		nationality: 'V'.toUpperCase(),
		cedula: 15601600,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aperaza'.toLowerCase(),
		name: capitalCadena('ANGELIS YSABEL'),
		lastName: capitalCadena('PERAZA SALAZAR'),
		type: 'regular',
		email: 'aperaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16425,
		nationality: 'V'.toUpperCase(),
		cedula: 27504638,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mrivero'.toLowerCase(),
		name: capitalCadena('MARAURI '),
		lastName: capitalCadena('RIVERO CORDOVA'),
		type: 'regular',
		email: 'mrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16442,
		nationality: 'V'.toUpperCase(),
		cedula: 10341422,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'holiveros'.toLowerCase(),
		name: capitalCadena('HECTOR OLIMPIO'),
		lastName: capitalCadena('OLIVEROS SALGADO'),
		type: 'regular',
		email: 'holiveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4959,
		nationality: 'V'.toUpperCase(),
		cedula: 2644343,
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
		userName: 'privas'.toLowerCase(),
		name: capitalCadena('PABLO LEONCIO'),
		lastName: capitalCadena('RIVAS SALAZAR'),
		type: 'regular',
		email: 'privas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7277,
		nationality: 'V'.toUpperCase(),
		cedula: 9934486,
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
		userName: 'jgonzalez'.toLowerCase(),
		name: capitalCadena('JUAN '),
		lastName: capitalCadena('GONZALEZ GONZALEZ'),
		type: 'regular',
		email: 'jgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9796,
		nationality: 'V'.toUpperCase(),
		cedula: 17990741,
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
		userName: 'acanizalez'.toLowerCase(),
		name: capitalCadena('ADRIAN ENRIQUE'),
		lastName: capitalCadena('CAÑIZALEZ VELANDRIA'),
		type: 'regular',
		email: 'acanizalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11876,
		nationality: 'V'.toUpperCase(),
		cedula: 21103661,
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
		userName: 'richardsilvera'.toLowerCase(),
		name: capitalCadena('RICHARD JOSE'),
		lastName: capitalCadena('SILVERA BOLIVAR'),
		type: 'regular',
		email: 'richardsilvera1399@hotmail.com'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11960,
		nationality: 'V'.toUpperCase(),
		cedula: 10616550,
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
		userName: 'jmendez'.toLowerCase(),
		name: capitalCadena('JOSE RAMON'),
		lastName: capitalCadena('MENDEZ VAZQUEZ'),
		type: 'regular',
		email: 'jmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13587,
		nationality: 'V'.toUpperCase(),
		cedula: 5541972,
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
		userName: 'jganain'.toLowerCase(),
		name: capitalCadena('JESUS GANAIN'),
		lastName: capitalCadena('LIRA '),
		type: 'regular',
		email: 'jganain@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13846,
		nationality: 'V'.toUpperCase(),
		cedula: 11963412,
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
		userName: 'leramirez'.toLowerCase(),
		name: capitalCadena('LENIN JOSUE'),
		lastName: capitalCadena('RAMIREZ RODRIGUEZ'),
		type: 'regular',
		email: 'leramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14548,
		nationality: 'V'.toUpperCase(),
		cedula: 10577918,
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
		userName: 'oscperez'.toLowerCase(),
		name: capitalCadena('OSCAR EDUARDO'),
		lastName: capitalCadena('PEREZ SOLORZANO'),
		type: 'regular',
		email: 'oscperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15076,
		nationality: 'V'.toUpperCase(),
		cedula: 12315936,
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
		userName: 'edescalona'.toLowerCase(),
		name: capitalCadena('EDGAR JESUS'),
		lastName: capitalCadena('ESCALONA PITTOL'),
		type: 'regular',
		email: 'edescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15572,
		nationality: 'V'.toUpperCase(),
		cedula: 18753218,
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
		userName: 'aaragort'.toLowerCase(),
		name: capitalCadena('ALLISON ARNALDO'),
		lastName: capitalCadena('ARAGORT CHAVEZ'),
		type: 'regular',
		email: 'aaragort@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15627,
		nationality: 'V'.toUpperCase(),
		cedula: 20245904,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crmartinez'.toLowerCase(),
		name: capitalCadena('CRISTOBAL EMILIO'),
		lastName: capitalCadena('MARTINEZ MURILLO'),
		type: 'regular',
		email: 'crmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15874,
		nationality: 'V'.toUpperCase(),
		cedula: 3885308,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jquilimaco'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('QUILIMACO CANELON'),
		type: 'regular',
		email: 'jquilimaco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15902,
		nationality: 'V'.toUpperCase(),
		cedula: 14494255,
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
		userName: 'tflores'.toLowerCase(),
		name: capitalCadena('TOMAS ENRIQUE'),
		lastName: capitalCadena('FLORES BRICEÑO'),
		type: 'regular',
		email: 'tflores@bnc.com,ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16194,
		nationality: 'V'.toUpperCase(),
		cedula: 6853445,
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
		userName: 'rlincoln'.toLowerCase(),
		name: capitalCadena('RAMIRO LINCOLN'),
		lastName: capitalCadena('JAMESON '),
		type: 'regular',
		email: 'rlincoln@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16419,
		nationality: 'V'.toUpperCase(),
		cedula: 11206291,
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
		userName: 'rgutierrez'.toLowerCase(),
		name: capitalCadena('RUBEN ELOY'),
		lastName: capitalCadena('GUTIERREZ LA ROSA'),
		type: 'regular',
		email: 'rgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 854,
		nationality: 'V'.toUpperCase(),
		cedula: 12111324,
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
		userName: 'dgomez'.toLowerCase(),
		name: capitalCadena('DANIEL JOSE'),
		lastName: capitalCadena('GOMEZ DOMINGUEZ'),
		type: 'regular',
		email: 'dgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1067,
		nationality: 'V'.toUpperCase(),
		cedula: 13510146,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fruiz'.toLowerCase(),
		name: capitalCadena('FRANCISCO JESUS'),
		lastName: capitalCadena('RUIZ SALAS'),
		type: 'regular',
		email: 'fruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7335,
		nationality: 'V'.toUpperCase(),
		cedula: 18092763,
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
		userName: 'joaguilar'.toLowerCase(),
		name: capitalCadena('JORGE LUIS'),
		lastName: capitalCadena('AGUILAR FARIAS'),
		type: 'regular',
		email: 'joaguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7694,
		nationality: 'V'.toUpperCase(),
		cedula: 11552968,
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
		userName: 'domendez'.toLowerCase(),
		name: capitalCadena('DOAN MEDARDO'),
		lastName: capitalCadena('MENDEZ MOTA'),
		type: 'regular',
		email: 'domendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13477,
		nationality: 'V'.toUpperCase(),
		cedula: 15466534,
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
		userName: 'abestgalue'.toLowerCase(),
		name: capitalCadena('ARTURO ENRIQUE'),
		lastName: capitalCadena('BEST GALUE'),
		type: 'regular',
		email: 'abestgalue@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13575,
		nationality: 'V'.toUpperCase(),
		cedula: 11354991,
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
		userName: 'mvasquez'.toLowerCase(),
		name: capitalCadena('MANUEL ENRIQUE'),
		lastName: capitalCadena('VASQUEZ AMARANTE'),
		type: 'regular',
		email: 'mvasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14063,
		nationality: 'V'.toUpperCase(),
		cedula: 14061433,
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
		userName: 'yemonsalve'.toLowerCase(),
		name: capitalCadena('YENIFER CAROLINA'),
		lastName: capitalCadena('MONSALVE PRADA'),
		type: 'regular',
		email: 'yemonsalve@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14318,
		nationality: 'V'.toUpperCase(),
		cedula: 18611989,
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
		userName: 'memorales'.toLowerCase(),
		name: capitalCadena('MERLIN VICTORIA'),
		lastName: capitalCadena('MORALES ISCULPI'),
		type: 'regular',
		email: 'memorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15455,
		nationality: 'V'.toUpperCase(),
		cedula: 12341706,
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
		userName: 'hemendoza'.toLowerCase(),
		name: capitalCadena('HENRY MANUEL'),
		lastName: capitalCadena('MENDOZA GONZALEZ'),
		type: 'regular',
		email: 'hemendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3420,
		nationality: 'V'.toUpperCase(),
		cedula: 7084688,
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
		userName: 'eroldan'.toLowerCase(),
		name: capitalCadena('EDITH MARYURI'),
		lastName: capitalCadena('ROLDAN '),
		type: 'regular',
		email: 'eroldan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6524,
		nationality: 'V'.toUpperCase(),
		cedula: 10234463,
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
		userName: 'agomez'.toLowerCase(),
		name: capitalCadena('ALIRIO JESUS'),
		lastName: capitalCadena('GOMEZ ESPINOZA'),
		type: 'regular',
		email: 'agomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9285,
		nationality: 'V'.toUpperCase(),
		cedula: 19321908,
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
		userName: 'nhurtado'.toLowerCase(),
		name: capitalCadena('NANCY FELICIA'),
		lastName: capitalCadena('HURTADO CRESPO'),
		type: 'regular',
		email: 'nhurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12468,
		nationality: 'V'.toUpperCase(),
		cedula: 6485524,
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
		userName: 'rocastro'.toLowerCase(),
		name: capitalCadena('ROYMAN ARMANDO'),
		lastName: capitalCadena('CASTRO PIN'),
		type: 'regular',
		email: 'rocastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14860,
		nationality: 'V'.toUpperCase(),
		cedula: 7957107,
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
		userName: 'jcuberos'.toLowerCase(),
		name: capitalCadena('JAIRO JOSE'),
		lastName: capitalCadena('CUBEROS ALBORNOZ'),
		type: 'regular',
		email: 'jcuberos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15014,
		nationality: 'V'.toUpperCase(),
		cedula: 12573134,
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
		userName: 'aaponte'.toLowerCase(),
		name: capitalCadena('ANTHONY JOSE'),
		lastName: capitalCadena('APONTE CALDERON'),
		type: 'regular',
		email: 'aaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15133,
		nationality: 'V'.toUpperCase(),
		cedula: 28248756,
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
		userName: 'jabarca'.toLowerCase(),
		name: capitalCadena('JESUS OCTAVIO'),
		lastName: capitalCadena('ABARCA PRIMERA'),
		type: 'regular',
		email: 'jabarca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15898,
		nationality: 'V'.toUpperCase(),
		cedula: 22285407,
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
		userName: 'jarciniegas'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('ARCINIEGAS SOTO'),
		type: 'regular',
		email: 'jarciniegas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16109,
		nationality: 'V'.toUpperCase(),
		cedula: 15899710,
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
	}
]
module.exports = { restoPrimeraParte }
