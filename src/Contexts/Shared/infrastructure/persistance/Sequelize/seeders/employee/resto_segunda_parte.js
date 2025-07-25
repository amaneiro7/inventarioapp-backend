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

const restoSegundaParte = [
	{
		userName: 'erojas'.toLowerCase(),
		name: capitalCadena('EDGAR ARTURO'),
		lastName: capitalCadena('ROJAS FIGUEROA'),
		type: 'regular',
		email: 'erojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13583,
		nationality: 'V'.toUpperCase(),
		cedula: 6376982,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'andperez'.toLowerCase(),
		name: capitalCadena('ANDREINA DEL VALLE'),
		lastName: capitalCadena('PEREZ SANCHEZ'),
		type: 'regular',
		email: 'andperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13880,
		nationality: 'V'.toUpperCase(),
		cedula: 18510614,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aballona'.toLowerCase(),
		name: capitalCadena('ADRIAN JOSE'),
		lastName: capitalCadena('BALLONA LABRADOR'),
		type: 'regular',
		email: 'aballona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14529,
		nationality: 'V'.toUpperCase(),
		cedula: 17370425,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jconde'.toLowerCase(),
		name: capitalCadena('JHOANNA THAYS'),
		lastName: capitalCadena('CONDE MARCANO'),
		type: 'regular',
		email: 'jconde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14672,
		nationality: 'V'.toUpperCase(),
		cedula: 11906535,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE (BEI)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yhernandez'.toLowerCase(),
		name: capitalCadena('YENNIFFER DEL VALLE'),
		lastName: capitalCadena('HERNANDEZ VILLARROEL'),
		type: 'regular',
		email: 'yhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15516,
		nationality: 'V'.toUpperCase(),
		cedula: 16479928,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE (BEI)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysaavedra'.toLowerCase(),
		name: capitalCadena('YINEYDI COROMOTO'),
		lastName: capitalCadena('SAAVEDRA '),
		type: 'regular',
		email: 'ysaavedra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15851,
		nationality: 'V'.toUpperCase(),
		cedula: 19894160,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yyanez'.toLowerCase(),
		name: capitalCadena('JANET DEL VALLE'),
		lastName: capitalCadena('YANEZ '),
		type: 'regular',
		email: 'yyanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 313,
		nationality: 'V'.toUpperCase(),
		cedula: 5574675,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yquiroga'.toLowerCase(),
		name: capitalCadena('YESENIA MICHELL'),
		lastName: capitalCadena('QUIROGA CARRERO'),
		type: 'regular',
		email: 'yquiroga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11830,
		nationality: 'V'.toUpperCase(),
		cedula: 18879878,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvelasco'.toLowerCase(),
		name: capitalCadena('LILIAM ELIZABETH'),
		lastName: capitalCadena('VELASCO DE MASTROLONARDO'),
		type: 'regular',
		email: 'lvelasco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15239,
		nationality: 'V'.toUpperCase(),
		cedula: 6887038,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rchourio'.toLowerCase(),
		name: capitalCadena('RICARDO ANDRES'),
		lastName: capitalCadena('CHOURIO FONSECA'),
		type: 'regular',
		email: 'rchourio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16366,
		nationality: 'V'.toUpperCase(),
		cedula: 29891604,
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
		userName: 'borellana'.toLowerCase(),
		name: capitalCadena('BETHZAY YEMALLIA'),
		lastName: capitalCadena('ORELLANA SANCHEZ'),
		type: 'regular',
		email: 'borellana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12206,
		nationality: 'V'.toUpperCase(),
		cedula: 18934117,
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
		userName: 'mnava'.toLowerCase(),
		name: capitalCadena('MARIANELLA '),
		lastName: capitalCadena('NAVA BRICEÑO'),
		type: 'regular',
		email: 'mnava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16456,
		nationality: 'V'.toUpperCase(),
		cedula: 13260345,
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
		userName: 'mblanco'.toLowerCase(),
		name: capitalCadena('MARIA NELLY'),
		lastName: capitalCadena('BLANCO RINCON'),
		type: 'regular',
		email: 'mblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 426,
		nationality: 'V'.toUpperCase(),
		cedula: 11023619,
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
		userName: 'jfher'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('FHER VEGAS'),
		type: 'regular',
		email: 'jfher@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 830,
		nationality: 'V'.toUpperCase(),
		cedula: 6337506,
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
		userName: 'lmendoza'.toLowerCase(),
		name: capitalCadena('LESBIA TERESA'),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'),
		type: 'regular',
		email: 'lmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12651,
		nationality: 'V'.toUpperCase(),
		cedula: 6319736,
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
		userName: 'acanache'.toLowerCase(),
		name: capitalCadena('AURA LISBETH'),
		lastName: capitalCadena('CANACHE '),
		type: 'regular',
		email: 'acanache@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 870,
		nationality: 'V'.toUpperCase(),
		cedula: 8340572,
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
		userName: 'nliendo'.toLowerCase(),
		name: capitalCadena('NAHIRIS DEL SOL'),
		lastName: capitalCadena('LIENDO MONZON'),
		type: 'regular',
		email: 'nliendo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 887,
		nationality: 'V'.toUpperCase(),
		cedula: 12162067,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmattey'.toLowerCase(),
		name: capitalCadena('LUISA TRINIDAD'),
		lastName: capitalCadena('MATTEY NEGRON'),
		type: 'regular',
		email: 'lmattey@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 543,
		nationality: 'V'.toUpperCase(),
		cedula: 8236655,
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
		userName: 'asidrian'.toLowerCase(),
		name: capitalCadena('ALEXANDER JOSE'),
		lastName: capitalCadena('SIDRIAN VILLEGAS'),
		type: 'regular',
		email: 'asidrian@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 645,
		nationality: 'V'.toUpperCase(),
		cedula: 10667184,
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
		userName: 'fortega'.toLowerCase(),
		name: capitalCadena('FRANCIS ELENA'),
		lastName: capitalCadena('ORTEGA RODRIGUEZ'),
		type: 'regular',
		email: 'fortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1082,
		nationality: 'V'.toUpperCase(),
		cedula: 11196333,
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
		userName: 'jguerrero'.toLowerCase(),
		name: capitalCadena('JOSE CARMELO'),
		lastName: capitalCadena('GUERRERO VIVAS'),
		type: 'regular',
		email: 'jguerrero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 782,
		nationality: 'V'.toUpperCase(),
		cedula: 5643023,
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
		userName: 'rvillalobos'.toLowerCase(),
		name: capitalCadena('RINA RUBISAY'),
		lastName: capitalCadena('VILLALOBOS MENDOZA'),
		type: 'regular',
		email: 'rvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1239,
		nationality: 'V'.toUpperCase(),
		cedula: 13244882,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sgonzalez'.toLowerCase(),
		name: capitalCadena('SAIMARELIS DEL VALLE'),
		lastName: capitalCadena('GONZALEZ CEDEÑO'),
		type: 'regular',
		email: 'sgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1422,
		nationality: 'V'.toUpperCase(),
		cedula: 11044427,
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
		userName: 'ymedina'.toLowerCase(),
		name: capitalCadena('YELITZA JOSEFINA'),
		lastName: capitalCadena('MEDINA NARANJO'),
		type: 'regular',
		email: 'ymedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1049,
		nationality: 'V'.toUpperCase(),
		cedula: 11482846,
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
		userName: 'fabriceno'.toLowerCase(),
		name: capitalCadena('FANNY DEL VALLE'),
		lastName: capitalCadena('BRICEÑO DE HERNANDEZ'),
		type: 'regular',
		email: 'fabriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1920,
		nationality: 'V'.toUpperCase(),
		cedula: 14275202,
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
		userName: 'abracho'.toLowerCase(),
		name: capitalCadena('ANDREINA DESIREE'),
		lastName: capitalCadena('BRACHO ACOSTA'),
		type: 'regular',
		email: 'abracho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2008,
		nationality: 'V'.toUpperCase(),
		cedula: 15442429,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsalcedo'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('SALCEDO BUSTILLOS'),
		type: 'regular',
		email: 'jsalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2012,
		nationality: 'V'.toUpperCase(),
		cedula: 6796569,
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
		userName: 'yrengifo'.toLowerCase(),
		name: capitalCadena('YURAIMA JOSEFINA'),
		lastName: capitalCadena('RENGIFO SALAZAR'),
		type: 'regular',
		email: 'yrengifo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2040,
		nationality: 'V'.toUpperCase(),
		cedula: 14056295,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crojas'.toLowerCase(),
		name: capitalCadena('CARMEN ELENA'),
		lastName: capitalCadena('ROJAS QUIÑONEZ'),
		type: 'regular',
		email: 'crojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1144,
		nationality: 'V'.toUpperCase(),
		cedula: 12309696,
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
		userName: 'naular'.toLowerCase(),
		name: capitalCadena('NORYS MARGARITA'),
		lastName: capitalCadena('AULAR OLIVO'),
		type: 'regular',
		email: 'naular@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1219,
		nationality: 'V'.toUpperCase(),
		cedula: 11842400,
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
		userName: 'roramirez'.toLowerCase(),
		name: capitalCadena('ROSA ERIKA'),
		lastName: capitalCadena('RAMIREZ PEÑALOZA'),
		type: 'regular',
		email: 'roramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1309,
		nationality: 'V'.toUpperCase(),
		cedula: 12633634,
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
		userName: 'jrodriguez'.toLowerCase(),
		name: capitalCadena('JACKELIN CARIDAD'),
		lastName: capitalCadena('RODRIGUEZ LARA'),
		type: 'regular',
		email: 'jrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2143,
		nationality: 'V'.toUpperCase(),
		cedula: 17063987,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drivero'.toLowerCase(),
		name: capitalCadena('DANIELA ALEJANDRA'),
		lastName: capitalCadena('RIVERO MARTINEZ'),
		type: 'regular',
		email: 'drivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2199,
		nationality: 'V'.toUpperCase(),
		cedula: 18617184,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ivgonzalez'.toLowerCase(),
		name: capitalCadena('IVETTE '),
		lastName: capitalCadena('GONZALEZ RODRIGUEZ'),
		type: 'regular',
		email: 'ivgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2352,
		nationality: 'V'.toUpperCase(),
		cedula: 7997634,
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
		userName: 'mbermudez'.toLowerCase(),
		name: capitalCadena('MARIA CAROLINA'),
		lastName: capitalCadena('BERMUDEZ BARRIO'),
		type: 'regular',
		email: 'mbermudez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1669,
		nationality: 'V'.toUpperCase(),
		cedula: 13002704,
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
		userName: 'glopez'.toLowerCase(),
		name: capitalCadena('GABRIELA JOSEFINA'),
		lastName: capitalCadena('LOPEZ RENGEL'),
		type: 'regular',
		email: 'glopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2569,
		nationality: 'V'.toUpperCase(),
		cedula: 16697466,
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
		userName: 'gcastillo'.toLowerCase(),
		name: capitalCadena('GARDENIS COROMOTO'),
		lastName: capitalCadena('CASTILLO ZACARIAS'),
		type: 'regular',
		email: 'gcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2074,
		nationality: 'V'.toUpperCase(),
		cedula: 12842992,
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
		userName: 'masanchez'.toLowerCase(),
		name: capitalCadena('MARIAN DEL VALLE'),
		lastName: capitalCadena('SANCHEZ '),
		type: 'regular',
		email: 'masanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2619,
		nationality: 'V'.toUpperCase(),
		cedula: 15962524,
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
		userName: 'bmendez'.toLowerCase(),
		name: capitalCadena('BETY COROMOTO'),
		lastName: capitalCadena('MENDEZ '),
		type: 'regular',
		email: 'bmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2692,
		nationality: 'V'.toUpperCase(),
		cedula: 11049058,
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
		userName: 'dascanio'.toLowerCase(),
		name: capitalCadena('DANIELA DEL CARMEN'),
		lastName: capitalCadena('ASCANIO '),
		type: 'regular',
		email: 'dascanio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2697,
		nationality: 'V'.toUpperCase(),
		cedula: 12625306,
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
		userName: 'rvillarreal'.toLowerCase(),
		name: capitalCadena('ROSALBA '),
		lastName: capitalCadena('VILLARREAL GUTIERREZ'),
		type: 'regular',
		email: 'rvillarreal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2438,
		nationality: 'V'.toUpperCase(),
		cedula: 14148164,
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
		userName: 'azambrano'.toLowerCase(),
		name: capitalCadena('ALEXIS NABOR'),
		lastName: capitalCadena('ZAMBRANO ROA'),
		type: 'regular',
		email: 'azambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2816,
		nationality: 'V'.toUpperCase(),
		cedula: 16411645,
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
		userName: 'fasuaje'.toLowerCase(),
		name: capitalCadena('FERNANDO RAMON'),
		lastName: capitalCadena('ASUAJE RODRIGUEZ'),
		type: 'regular',
		email: 'fasuaje@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2618,
		nationality: 'V'.toUpperCase(),
		cedula: 13483452,
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
		userName: 'daldiaz'.toLowerCase(),
		name: capitalCadena('DALIA ROSA'),
		lastName: capitalCadena('DIAZ COLMENARES'),
		type: 'regular',
		email: 'daldiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3159,
		nationality: 'V'.toUpperCase(),
		cedula: 11200467,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'opena'.toLowerCase(),
		name: capitalCadena('OSWALDO ENRRIQUE'),
		lastName: capitalCadena('PEÑA '),
		type: 'regular',
		email: 'opena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3227,
		nationality: 'V'.toUpperCase(),
		cedula: 6865476,
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
		userName: 'pdelgado'.toLowerCase(),
		name: capitalCadena('PEDRO FELIX'),
		lastName: capitalCadena('DELGADO COVA'),
		type: 'regular',
		email: 'pdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2727,
		nationality: 'V'.toUpperCase(),
		cedula: 7213550,
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
		userName: 'anruiz'.toLowerCase(),
		name: capitalCadena('ANGEL ROBERTO'),
		lastName: capitalCadena('RUIZ MIJARES'),
		type: 'regular',
		email: 'anruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2743,
		nationality: 'V'.toUpperCase(),
		cedula: 7288354,
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
		userName: 'fmata'.toLowerCase(),
		name: capitalCadena('FELIZAIDA DEL VALLE'),
		lastName: capitalCadena('MATA MARQUEZ'),
		type: 'regular',
		email: 'fmata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3505,
		nationality: 'V'.toUpperCase(),
		cedula: 10952421,
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
		userName: 'darias'.toLowerCase(),
		name: capitalCadena('DOUGLAS JOSE'),
		lastName: capitalCadena('ARIAS TORO'),
		type: 'regular',
		email: 'darias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2776,
		nationality: 'V'.toUpperCase(),
		cedula: 14672583,
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
		userName: 'risturiz'.toLowerCase(),
		name: capitalCadena('RAFAEL JOSE'),
		lastName: capitalCadena('ISTURIZ MARCANO'),
		type: 'regular',
		email: 'risturiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2851,
		nationality: 'V'.toUpperCase(),
		cedula: 9889251,
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
		userName: 'durrieta'.toLowerCase(),
		name: capitalCadena('DANI YAJAIRA'),
		lastName: capitalCadena('URRIETA GIL'),
		type: 'regular',
		email: 'durrieta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3899,
		nationality: 'V'.toUpperCase(),
		cedula: 15160850,
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
		userName: 'respanol'.toLowerCase(),
		name: capitalCadena('REIVAN SAYEK'),
		lastName: capitalCadena('ESPAÑOL ROJAS'),
		type: 'regular',
		email: 'respanol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13141,
		nationality: 'V'.toUpperCase(),
		cedula: 27426512,
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
		userName: 'jregalado'.toLowerCase(),
		name: capitalCadena('JOSE VIDAL'),
		lastName: capitalCadena('REGALADO OSORIO'),
		type: 'regular',
		email: 'jregalado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4030,
		nationality: 'V'.toUpperCase(),
		cedula: 7908368,
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
		userName: 'armartinez'.toLowerCase(),
		name: capitalCadena('ARCENIO MANUEL'),
		lastName: capitalCadena('MARTINEZ MACHADO'),
		type: 'regular',
		email: 'armartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3444,
		nationality: 'V'.toUpperCase(),
		cedula: 14233039,
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
		userName: 'vfernandez'.toLowerCase(),
		name: capitalCadena('VIRGILIO '),
		lastName: capitalCadena('FERNANDEZ DELGADO'),
		type: 'regular',
		email: 'vfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4238,
		nationality: 'V'.toUpperCase(),
		cedula: 5652457,
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
		userName: 'etorres'.toLowerCase(),
		name: capitalCadena('EBELICE COROMOTO'),
		lastName: capitalCadena('TORRES MALAVE'),
		type: 'regular',
		email: 'etorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4299,
		nationality: 'V'.toUpperCase(),
		cedula: 11416612,
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
		userName: 'tdiaz'.toLowerCase(),
		name: capitalCadena('THOMAS ELIAS'),
		lastName: capitalCadena('DIAZ SALAZAR'),
		type: 'regular',
		email: 'tdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4336,
		nationality: 'V'.toUpperCase(),
		cedula: 16264518,
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
		userName: 'amata'.toLowerCase(),
		name: capitalCadena('AIMAR CAROLINA'),
		lastName: capitalCadena('MATA GARCIA'),
		type: 'regular',
		email: 'amata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4421,
		nationality: 'V'.toUpperCase(),
		cedula: 20191769,
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
		userName: 'ribrito'.toLowerCase(),
		name: capitalCadena('RICHARD ANTONIO'),
		lastName: capitalCadena('BRITO MARQUEZ'),
		type: 'regular',
		email: 'ribrito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4423,
		nationality: 'V'.toUpperCase(),
		cedula: 15540912,
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
		userName: 'argodoy'.toLowerCase(),
		name: capitalCadena('ARGELIA TIBISAY'),
		lastName: capitalCadena('GODOY MACHADO'),
		type: 'regular',
		email: 'argodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13237,
		nationality: 'V'.toUpperCase(),
		cedula: 6243993,
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
		userName: 'arangel'.toLowerCase(),
		name: capitalCadena('ANTONIO RAMON'),
		lastName: capitalCadena('RANGEL '),
		type: 'regular',
		email: 'arangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4521,
		nationality: 'V'.toUpperCase(),
		cedula: 5045098,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hplaza'.toLowerCase(),
		name: capitalCadena('HERIKA CAROLINA'),
		lastName: capitalCadena('PLAZA ZOTILLO'),
		type: 'regular',
		email: 'hplaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3687,
		nationality: 'V'.toUpperCase(),
		cedula: 19079414,
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
		userName: 'lcampos'.toLowerCase(),
		name: capitalCadena('LUCIA FERNANDA'),
		lastName: capitalCadena('CAMPOS GOBERDHAN'),
		type: 'regular',
		email: 'lcampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4602,
		nationality: 'V'.toUpperCase(),
		cedula: 16814125,
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
		userName: 'tzambrano'.toLowerCase(),
		name: capitalCadena('TUESDAY AIDEE'),
		lastName: capitalCadena('ZAMBRANO DE HERNANDEZ'),
		type: 'regular',
		email: 'tzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13294,
		nationality: 'V'.toUpperCase(),
		cedula: 7659851,
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
		userName: 'nsilva'.toLowerCase(),
		name: capitalCadena('NAHYR ELENA'),
		lastName: capitalCadena('SILVA SEILER'),
		type: 'regular',
		email: 'nsilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4755,
		nationality: 'V'.toUpperCase(),
		cedula: 18390963,
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
		userName: 'rnieves'.toLowerCase(),
		name: capitalCadena('RAMON EDUARDO'),
		lastName: capitalCadena('NIEVES HERNANDEZ'),
		type: 'regular',
		email: 'rnieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4775,
		nationality: 'V'.toUpperCase(),
		cedula: 18803430,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jonavarro'.toLowerCase(),
		name: capitalCadena('JOELI CAROLINA'),
		lastName: capitalCadena('NAVARRO ASPURUA'),
		type: 'regular',
		email: 'jonavarro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4792,
		nationality: 'V'.toUpperCase(),
		cedula: 15239932,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mijimenez'.toLowerCase(),
		name: capitalCadena('MIRNA ISABEL'),
		lastName: capitalCadena('JIMENEZ PAREJA'),
		type: 'regular',
		email: 'mijimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4043,
		nationality: 'V'.toUpperCase(),
		cedula: 15980037,
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
		userName: 'iblanco'.toLowerCase(),
		name: capitalCadena('ISMELY COROMOTO'),
		lastName: capitalCadena('BLANCO MORANTE'),
		type: 'regular',
		email: 'iblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4891,
		nationality: 'V'.toUpperCase(),
		cedula: 11670363,
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
		userName: 'yabreu'.toLowerCase(),
		name: capitalCadena('YORMA YAQUIMA'),
		lastName: capitalCadena('ABREU MARQUEZ'),
		type: 'regular',
		email: 'yabreu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4908,
		nationality: 'V'.toUpperCase(),
		cedula: 12830677,
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
		userName: 'frivera'.toLowerCase(),
		name: capitalCadena('FANNY MELANIA'),
		lastName: capitalCadena('RIVERA ROJAS'),
		type: 'regular',
		email: 'frivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14048,
		nationality: 'V'.toUpperCase(),
		cedula: 19658792,
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
		userName: 'dsimancas'.toLowerCase(),
		name: capitalCadena('DISMARLY DEL CARMEN'),
		lastName: capitalCadena('SIMANCAS ANDRADE'),
		type: 'regular',
		email: 'dsimancas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6259,
		nationality: 'V'.toUpperCase(),
		cedula: 19514030,
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
		userName: 'agutierrez'.toLowerCase(),
		name: capitalCadena('AMBAR DOMENICA'),
		lastName: capitalCadena('GUTIERREZ ALVAREZ'),
		type: 'regular',
		email: 'agutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5180,
		nationality: 'V'.toUpperCase(),
		cedula: 17964014,
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
		userName: 'oguzman'.toLowerCase(),
		name: capitalCadena('ORIANA ELISA'),
		lastName: capitalCadena('GUZMAN RAMIREZ'),
		type: 'regular',
		email: 'oguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8668,
		nationality: 'V'.toUpperCase(),
		cedula: 20838440,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dpimentel'.toLowerCase(),
		name: capitalCadena('DEIKER JOSE'),
		lastName: capitalCadena('PIMENTEL AVILES'),
		type: 'regular',
		email: 'dpimentel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5263,
		nationality: 'V'.toUpperCase(),
		cedula: 18351505,
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
		userName: 'jgelves'.toLowerCase(),
		name: capitalCadena('JONATHAN JOSE'),
		lastName: capitalCadena('GELVES MACHUCA'),
		type: 'regular',
		email: 'jgelves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14068,
		nationality: 'V'.toUpperCase(),
		cedula: 16474087,
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
		userName: 'mcarrasco'.toLowerCase(),
		name: capitalCadena('MARIBEL DEL VALLE'),
		lastName: capitalCadena('CARRASCO RONDON'),
		type: 'regular',
		email: 'mcarrasco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5304,
		nationality: 'V'.toUpperCase(),
		cedula: 14859595,
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
		userName: 'yhuz'.toLowerCase(),
		name: capitalCadena('YOSELIN DEL CARMEN'),
		lastName: capitalCadena('HUZ BASTIDAS'),
		type: 'regular',
		email: 'yhuz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4598,
		nationality: 'V'.toUpperCase(),
		cedula: 13404257,
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
		userName: 'jobarreto'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('BARRETO '),
		type: 'regular',
		email: 'jobarreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5384,
		nationality: 'V'.toUpperCase(),
		cedula: 6801634,
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
		userName: 'aorono'.toLowerCase(),
		name: capitalCadena('AURISERG CAROLINA'),
		lastName: capitalCadena('OROÑO ROMERO'),
		type: 'regular',
		email: 'aorono@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5399,
		nationality: 'V'.toUpperCase(),
		cedula: 16846523,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'playa'.toLowerCase(),
		name: capitalCadena('PRISCA RAMONA'),
		lastName: capitalCadena('LAYA '),
		type: 'regular',
		email: 'playa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4678,
		nationality: 'V'.toUpperCase(),
		cedula: 8769833,
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
		userName: 'pehernandez'.toLowerCase(),
		name: capitalCadena('PEDRO JAVIER'),
		lastName: capitalCadena('HERNANDEZ '),
		type: 'regular',
		email: 'pehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9412,
		nationality: 'V'.toUpperCase(),
		cedula: 10891958,
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
		userName: 'cardiaz'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('DIAZ LEONICE'),
		type: 'regular',
		email: 'cardiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14886,
		nationality: 'V'.toUpperCase(),
		cedula: 15929611,
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
		userName: 'dblanco'.toLowerCase(),
		name: capitalCadena('DIULECSI LIROLEIZA'),
		lastName: capitalCadena('BLANCO GIL'),
		type: 'regular',
		email: 'dblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5252,
		nationality: 'V'.toUpperCase(),
		cedula: 9884489,
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
		userName: 'modreman'.toLowerCase(),
		name: capitalCadena('MAIRA ALEXANDRA'),
		lastName: capitalCadena('ODREMAN GARCIA'),
		type: 'regular',
		email: 'modreman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15205,
		nationality: 'V'.toUpperCase(),
		cedula: 14909391,
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
		userName: 'pgonzalez'.toLowerCase(),
		name: capitalCadena('PIERINA DEL VALLE'),
		lastName: capitalCadena('GONZALEZ PRADO'),
		type: 'regular',
		email: 'pgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5466,
		nationality: 'V'.toUpperCase(),
		cedula: 21314645,
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
		userName: 'lescalona'.toLowerCase(),
		name: capitalCadena('LESBIA MARGARITA'),
		lastName: capitalCadena('ESCALONA PEREZ'),
		type: 'regular',
		email: 'lescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9788,
		nationality: 'V'.toUpperCase(),
		cedula: 6227883,
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
		userName: 'ourbano'.toLowerCase(),
		name: capitalCadena('OSMARI DORINA'),
		lastName: capitalCadena('URBANO TORRES'),
		type: 'regular',
		email: 'ourbano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6261,
		nationality: 'V'.toUpperCase(),
		cedula: 20328019,
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
		userName: 'zquintero'.toLowerCase(),
		name: capitalCadena('ZULLY COROMOTO'),
		lastName: capitalCadena('QUINTERO ORTEGA'),
		type: 'regular',
		email: 'zquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4684,
		nationality: 'V'.toUpperCase(),
		cedula: 10535999,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcanelon'.toLowerCase(),
		name: capitalCadena('LICET MANUELA'),
		lastName: capitalCadena('CANELON SEIJA'),
		type: 'regular',
		email: 'lcanelon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6349,
		nationality: 'V'.toUpperCase(),
		cedula: 11338136,
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
		userName: 'eaguilera'.toLowerCase(),
		name: capitalCadena('EMMA ROSALIA'),
		lastName: capitalCadena('AGUILERA RIVERO'),
		type: 'regular',
		email: 'eaguilera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6363,
		nationality: 'V'.toUpperCase(),
		cedula: 15706657,
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
		userName: 'mavelasquez'.toLowerCase(),
		name: capitalCadena('MARBELIS DEL VALLE'),
		lastName: capitalCadena('VELASQUEZ CRUCES'),
		type: 'regular',
		email: 'mavelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5582,
		nationality: 'V'.toUpperCase(),
		cedula: 8345123,
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
		userName: 'jvasquez'.toLowerCase(),
		name: capitalCadena('JESUS ANTONIO'),
		lastName: capitalCadena('VASQUEZ SISO'),
		type: 'regular',
		email: 'jvasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6446,
		nationality: 'V'.toUpperCase(),
		cedula: 5962746,
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
		userName: 'betsanchez'.toLowerCase(),
		name: capitalCadena('BETZABET DEL VALLE'),
		lastName: capitalCadena('SANCHEZ RODRIGUEZ'),
		type: 'regular',
		email: 'betsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6057,
		nationality: 'V'.toUpperCase(),
		cedula: 12575577,
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
		userName: 'matovar'.toLowerCase(),
		name: capitalCadena('MARIA DEL CARMEN'),
		lastName: capitalCadena('TOVAR TOLEDO'),
		type: 'regular',
		email: 'matovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6481,
		nationality: 'V'.toUpperCase(),
		cedula: 18032830,
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
		userName: 'opatete'.toLowerCase(),
		name: capitalCadena('OSMARIS CAROLINA'),
		lastName: capitalCadena('PATETE GONZALEZ'),
		type: 'regular',
		email: 'opatete@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6127,
		nationality: 'V'.toUpperCase(),
		cedula: 17546918,
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
		userName: 'dsandoval'.toLowerCase(),
		name: capitalCadena('DUBRASKA DANELYS'),
		lastName: capitalCadena('SANDOVAL OVALLES'),
		type: 'regular',
		email: 'dsandoval@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6825,
		nationality: 'V'.toUpperCase(),
		cedula: 20824784,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmartinez'.toLowerCase(),
		name: capitalCadena('FIOMER ISAI'),
		lastName: capitalCadena('MARTINEZ GARCIA'),
		type: 'regular',
		email: 'fmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6593,
		nationality: 'V'.toUpperCase(),
		cedula: 19123139,
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
		userName: 'pcolmenares'.toLowerCase(),
		name: capitalCadena('PEDRO LUIS'),
		lastName: capitalCadena('COLMENARES ROMERO'),
		type: 'regular',
		email: 'pcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6639,
		nationality: 'V'.toUpperCase(),
		cedula: 10166263,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jguzman'.toLowerCase(),
		name: capitalCadena('JULIA NOREIDA'),
		lastName: capitalCadena('GUZMAN CASTRO'),
		type: 'regular',
		email: 'jguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6670,
		nationality: 'V'.toUpperCase(),
		cedula: 10626585,
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
		userName: 'padiaz'.toLowerCase(),
		name: capitalCadena('PATRICIA DEL CARMEN'),
		lastName: capitalCadena('DIAZ VICTORA'),
		type: 'regular',
		email: 'padiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6701,
		nationality: 'V'.toUpperCase(),
		cedula: 21345578,
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
		userName: 'suhernandez'.toLowerCase(),
		name: capitalCadena('SUHAY YAMILEE'),
		lastName: capitalCadena('HERNANDEZ GARCIA'),
		type: 'regular',
		email: 'suhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6737,
		nationality: 'V'.toUpperCase(),
		cedula: 13616941,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afajardo'.toLowerCase(),
		name: capitalCadena('ANGELMIRO '),
		lastName: capitalCadena('FAJARDO BUITRAGO'),
		type: 'regular',
		email: 'afajardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6743,
		nationality: 'V'.toUpperCase(),
		cedula: 5283076,
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
		userName: 'acorro'.toLowerCase(),
		name: capitalCadena('ANYI MARIA'),
		lastName: capitalCadena('CORRO RODRIGUEZ'),
		type: 'regular',
		email: 'acorro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6758,
		nationality: 'V'.toUpperCase(),
		cedula: 20115357,
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
		userName: 'ybracho'.toLowerCase(),
		name: capitalCadena('YAIMARA ELVIMAR'),
		lastName: capitalCadena('BRACHO MENDEZ'),
		type: 'regular',
		email: 'ybracho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10596,
		nationality: 'V'.toUpperCase(),
		cedula: 23617729,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jealvarez'.toLowerCase(),
		name: capitalCadena('JENNY TERESA'),
		lastName: capitalCadena('ALVAREZ QUIJADA'),
		type: 'regular',
		email: 'jealvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6370,
		nationality: 'V'.toUpperCase(),
		cedula: 11655734,
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
		userName: 'ydeparucho'.toLowerCase(),
		name: capitalCadena('YAMILET GREGORIA'),
		lastName: capitalCadena('VALLENILLA DE PARUCHO'),
		type: 'regular',
		email: 'ydeparucho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6448,
		nationality: 'V'.toUpperCase(),
		cedula: 13092811,
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
		userName: 'roxgonzalez'.toLowerCase(),
		name: capitalCadena('ROXANA LORENA'),
		lastName: capitalCadena('GONZALEZ LOZANO'),
		type: 'regular',
		email: 'roxgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6556,
		nationality: 'V'.toUpperCase(),
		cedula: 14208802,
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
		userName: 'glrodriguez'.toLowerCase(),
		name: capitalCadena('GLENYS MARIELAROSA'),
		lastName: capitalCadena('RODRIGUEZ RODRIGUEZ'),
		type: 'regular',
		email: 'glrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7133,
		nationality: 'V'.toUpperCase(),
		cedula: 19003364,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmonte'.toLowerCase(),
		name: capitalCadena('MARIELA EDITH'),
		lastName: capitalCadena('MONTE CABRERA'),
		type: 'regular',
		email: 'mmonte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7083,
		nationality: 'V'.toUpperCase(),
		cedula: 16708475,
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
		userName: 'magomez'.toLowerCase(),
		name: capitalCadena('MARIA VICTORIA'),
		lastName: capitalCadena('GOMEZ HERNANDEZ'),
		type: 'regular',
		email: 'magomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7107,
		nationality: 'V'.toUpperCase(),
		cedula: 16384708,
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
		userName: 'anguerra'.toLowerCase(),
		name: capitalCadena('ANGELA MARIA'),
		lastName: capitalCadena('GUERRA DE NUÑEZ'),
		type: 'regular',
		email: 'anguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7288,
		nationality: 'V'.toUpperCase(),
		cedula: 12664782,
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
		userName: 'jovasquez'.toLowerCase(),
		name: capitalCadena('JOSE ALI'),
		lastName: capitalCadena('VASQUEZ ROJAS'),
		type: 'regular',
		email: 'jovasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7151,
		nationality: 'V'.toUpperCase(),
		cedula: 18219475,
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
		userName: 'jramos'.toLowerCase(),
		name: capitalCadena('JESUS VALENTIN'),
		lastName: capitalCadena('RAMOS NUÑEZ'),
		type: 'regular',
		email: 'jramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7167,
		nationality: 'V'.toUpperCase(),
		cedula: 12524207,
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
		userName: 'wmolina'.toLowerCase(),
		name: capitalCadena('WILMER JOSE'),
		lastName: capitalCadena('MOLINA MONTIEL'),
		type: 'regular',
		email: 'wmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7185,
		nationality: 'V'.toUpperCase(),
		cedula: 13244361,
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
		userName: 'jfarias'.toLowerCase(),
		name: capitalCadena('JESUS ENRIQUE'),
		lastName: capitalCadena('FARIAS '),
		type: 'regular',
		email: 'jfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7214,
		nationality: 'V'.toUpperCase(),
		cedula: 11444827,
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
		userName: 'mmalave'.toLowerCase(),
		name: capitalCadena('MARIA ESTHER'),
		lastName: capitalCadena('MALAVE QUINTERO'),
		type: 'regular',
		email: 'mmalave@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7435,
		nationality: 'V'.toUpperCase(),
		cedula: 9278692,
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
		userName: 'hrosario'.toLowerCase(),
		name: capitalCadena('HILNA ROSA'),
		lastName: capitalCadena('ROSARIO PAYARES'),
		type: 'regular',
		email: 'hrosario@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7215,
		nationality: 'V'.toUpperCase(),
		cedula: 10219637,
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
		userName: 'yablanco'.toLowerCase(),
		name: capitalCadena('YASMIN DEL VALLE'),
		lastName: capitalCadena('BLANCO LOZADA'),
		type: 'regular',
		email: 'yablanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7705,
		nationality: 'V'.toUpperCase(),
		cedula: 10913735,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jezapata'.toLowerCase(),
		name: capitalCadena('JESICA MARELYN'),
		lastName: capitalCadena('ZAPATA AMAYA'),
		type: 'regular',
		email: 'jezapata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7862,
		nationality: 'V'.toUpperCase(),
		cedula: 19224951,
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
		userName: 'srangel'.toLowerCase(),
		name: capitalCadena('STEPHANY SOLANYEL'),
		lastName: capitalCadena('RANGEL PEÑA'),
		type: 'regular',
		email: 'srangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11420,
		nationality: 'V'.toUpperCase(),
		cedula: 27309223,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcolina'.toLowerCase(),
		name: capitalCadena('MIGDALIA JOSEFINA'),
		lastName: capitalCadena('COLINA LOPEZ'),
		type: 'regular',
		email: 'mcolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8110,
		nationality: 'V'.toUpperCase(),
		cedula: 10966096,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dvivas'.toLowerCase(),
		name: capitalCadena('DAYANA LISMAR'),
		lastName: capitalCadena('VIVAS PEREZ'),
		type: 'regular',
		email: 'dvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7226,
		nationality: 'V'.toUpperCase(),
		cedula: 14238617,
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
		userName: 'kisalazar'.toLowerCase(),
		name: capitalCadena('KLIBER SIMON'),
		lastName: capitalCadena('SALAZAR AGUILERA'),
		type: 'regular',
		email: 'kisalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7290,
		nationality: 'V'.toUpperCase(),
		cedula: 12659457,
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
		userName: 'annlopez'.toLowerCase(),
		name: capitalCadena('ANNY JUSMERY'),
		lastName: capitalCadena('LOPEZ SANCHEZ'),
		type: 'regular',
		email: 'annlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8245,
		nationality: 'V'.toUpperCase(),
		cedula: 13014581,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcastro'.toLowerCase(),
		name: capitalCadena('LUIS ALFONSO'),
		lastName: capitalCadena('CASTRO RAMIREZ'),
		type: 'regular',
		email: 'lcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 625,
		nationality: 'V'.toUpperCase(),
		cedula: 9246246,
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
		userName: 'vlaguna'.toLowerCase(),
		name: capitalCadena('VIVIANA '),
		lastName: capitalCadena('LAGUNA LOPEZ'),
		type: 'regular',
		email: 'vlaguna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12032,
		nationality: 'V'.toUpperCase(),
		cedula: 18188967,
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
		userName: 'domoreno'.toLowerCase(),
		name: capitalCadena('DOMAIKELYS FABIANA'),
		lastName: capitalCadena('MORENO ESPINOZA'),
		type: 'regular',
		email: 'domoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8350,
		nationality: 'V'.toUpperCase(),
		cedula: 20784928,
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
		userName: 'alblopez'.toLowerCase(),
		name: capitalCadena('ALBANELLYS DEL CARMEN'),
		lastName: capitalCadena('LOPEZ VALLEJO'),
		type: 'regular',
		email: 'alblopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7291,
		nationality: 'V'.toUpperCase(),
		cedula: 13360795,
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
		userName: 'scolmenares'.toLowerCase(),
		name: capitalCadena('SCARLET ADAMELIS'),
		lastName: capitalCadena('COLMENARES GAMBOA'),
		type: 'regular',
		email: 'scolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7292,
		nationality: 'V'.toUpperCase(),
		cedula: 12165539,
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
		userName: 'yubenitez'.toLowerCase(),
		name: capitalCadena('YUSNERBI VANESSA'),
		lastName: capitalCadena('BENITEZ '),
		type: 'regular',
		email: 'yubenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8593,
		nationality: 'V'.toUpperCase(),
		cedula: 20308191,
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
		userName: 'dparra'.toLowerCase(),
		name: capitalCadena('DINORATH YANETH'),
		lastName: capitalCadena('PARRA CONTRERAS'),
		type: 'regular',
		email: 'dparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13405,
		nationality: 'V'.toUpperCase(),
		cedula: 12048141,
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
		userName: 'mcalles'.toLowerCase(),
		name: capitalCadena('MARIELA EDUVIGIS'),
		lastName: capitalCadena('CALLES LEONI'),
		type: 'regular',
		email: 'mcalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3545,
		nationality: 'V'.toUpperCase(),
		cedula: 14726104,
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
		userName: 'grruiz'.toLowerCase(),
		name: capitalCadena('GREISI ERAIS'),
		lastName: capitalCadena('RUIZ GUIPE'),
		type: 'regular',
		email: 'grruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8185,
		nationality: 'V'.toUpperCase(),
		cedula: 21662651,
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
		userName: 'jobolivar'.toLowerCase(),
		name: capitalCadena('JOSE BALTAZAR'),
		lastName: capitalCadena('BOLIVAR SEIJAS'),
		type: 'regular',
		email: 'jobolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8202,
		nationality: 'V'.toUpperCase(),
		cedula: 18175644,
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
		userName: 'fzorrilla'.toLowerCase(),
		name: capitalCadena('FLORIMAR ELENA'),
		lastName: capitalCadena('ZORRILLA RIVAS'),
		type: 'regular',
		email: 'fzorrilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9173,
		nationality: 'V'.toUpperCase(),
		cedula: 13293834,
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
		userName: 'emromero'.toLowerCase(),
		name: capitalCadena('EMILY PAOLA'),
		lastName: capitalCadena('ROMERO SANCHEZ'),
		type: 'regular',
		email: 'emromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9214,
		nationality: 'V'.toUpperCase(),
		cedula: 23456050,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'imoreno'.toLowerCase(),
		name: capitalCadena('ISMAEL JOSE'),
		lastName: capitalCadena('MORENO AGRAZ'),
		type: 'regular',
		email: 'imoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8528,
		nationality: 'V'.toUpperCase(),
		cedula: 18836750,
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
		userName: 'lgaranito'.toLowerCase(),
		name: capitalCadena('LIDIA '),
		lastName: capitalCadena('GARANITO TEIXEIRA'),
		type: 'regular',
		email: 'lgaranito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3974,
		nationality: 'V'.toUpperCase(),
		cedula: 7884680,
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
		userName: 'matvelasquez'.toLowerCase(),
		name: capitalCadena('MATILDE BEATRIZ'),
		lastName: capitalCadena('VELASQUEZ MEJIAS'),
		type: 'regular',
		email: 'matvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9261,
		nationality: 'V'.toUpperCase(),
		cedula: 10287306,
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
		userName: 'noherrera'.toLowerCase(),
		name: capitalCadena('NORELYS JOSEFINA'),
		lastName: capitalCadena('HERRERA GARCIA'),
		type: 'regular',
		email: 'noherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9307,
		nationality: 'V'.toUpperCase(),
		cedula: 16504395,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mtroconis'.toLowerCase(),
		name: capitalCadena('MARIANGI DEL CARMEN'),
		lastName: capitalCadena('TROCONIS HERNANDEZ'),
		type: 'regular',
		email: 'mtroconis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8569,
		nationality: 'V'.toUpperCase(),
		cedula: 21358672,
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
		userName: 'lliss'.toLowerCase(),
		name: capitalCadena('LISBETH MARILDA'),
		lastName: capitalCadena('LISS GUILLEN'),
		type: 'regular',
		email: 'lliss@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13611,
		nationality: 'V'.toUpperCase(),
		cedula: 10076003,
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
		userName: 'jteran'.toLowerCase(),
		name: capitalCadena('JULIO CESAR'),
		lastName: capitalCadena('TERAN BLANCO'),
		type: 'regular',
		email: 'jteran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8772,
		nationality: 'V'.toUpperCase(),
		cedula: 11163458,
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
		userName: 'bparra'.toLowerCase(),
		name: capitalCadena('BEIZA YANET'),
		lastName: capitalCadena('PARRA CALDERA'),
		type: 'regular',
		email: 'bparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8896,
		nationality: 'V'.toUpperCase(),
		cedula: 14958141,
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
		userName: 'lesuarez'.toLowerCase(),
		name: capitalCadena('LEIDY YUREIMA'),
		lastName: capitalCadena('SUAREZ CONTRERAS'),
		type: 'regular',
		email: 'lesuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9581,
		nationality: 'V'.toUpperCase(),
		cedula: 18110809,
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
		userName: 'wimendoza'.toLowerCase(),
		name: capitalCadena('WILMER EDUARDO'),
		lastName: capitalCadena('MENDOZA COLMENARES'),
		type: 'regular',
		email: 'wimendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9402,
		nationality: 'V'.toUpperCase(),
		cedula: 17368388,
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
		userName: 'salfonzo'.toLowerCase(),
		name: capitalCadena('SOLIMAR MARIA'),
		lastName: capitalCadena('ALFONZO ASCENCION'),
		type: 'regular',
		email: 'salfonzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9614,
		nationality: 'V'.toUpperCase(),
		cedula: 11673452,
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
		userName: 'dafernandez'.toLowerCase(),
		name: capitalCadena('DAIRILYS MARIA'),
		lastName: capitalCadena('FERNANDEZ MARCANO'),
		type: 'regular',
		email: 'dafernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9641,
		nationality: 'V'.toUpperCase(),
		cedula: 14856219,
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
		userName: 'yelhernandez'.toLowerCase(),
		name: capitalCadena('YELI MARIA'),
		lastName: capitalCadena('HERNANDEZ INFANTE'),
		type: 'regular',
		email: 'yelhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9461,
		nationality: 'V'.toUpperCase(),
		cedula: 24628481,
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
		userName: 'gibarra'.toLowerCase(),
		name: capitalCadena('GLORIESKY DEL VALLE'),
		lastName: capitalCadena('IBARRA PAEZ'),
		type: 'regular',
		email: 'gibarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9495,
		nationality: 'V'.toUpperCase(),
		cedula: 21335636,
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
		userName: 'yaxramirez'.toLowerCase(),
		name: capitalCadena('YAXENIA YORMARY'),
		lastName: capitalCadena('RAMIREZ NIEVES'),
		type: 'regular',
		email: 'yaxramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9751,
		nationality: 'V'.toUpperCase(),
		cedula: 20356012,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymartinez'.toLowerCase(),
		name: capitalCadena('YUSMAIRA '),
		lastName: capitalCadena('LEON MARTINEZ'),
		type: 'regular',
		email: 'ymartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13899,
		nationality: 'V'.toUpperCase(),
		cedula: 15892365,
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
		userName: 'rmora'.toLowerCase(),
		name: capitalCadena('REYES MARIA'),
		lastName: capitalCadena('MORA GUERRERO'),
		type: 'regular',
		email: 'rmora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9940,
		nationality: 'V'.toUpperCase(),
		cedula: 12847352,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adgraterol'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('GRATEROL PIAR'),
		type: 'regular',
		email: 'adgraterol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9989,
		nationality: 'V'.toUpperCase(),
		cedula: 27600131,
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
		userName: 'girangel'.toLowerCase(),
		name: capitalCadena('GILBERTO '),
		lastName: capitalCadena('RANGEL RONDON'),
		type: 'regular',
		email: 'girangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10012,
		nationality: 'V'.toUpperCase(),
		cedula: 9026992,
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
		userName: 'tesaa'.toLowerCase(),
		name: capitalCadena('TEDDY TATIANA'),
		lastName: capitalCadena('ESAA ROJAS'),
		type: 'regular',
		email: 'tesaa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9591,
		nationality: 'V'.toUpperCase(),
		cedula: 18147527,
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
		userName: 'alreyes'.toLowerCase(),
		name: capitalCadena('ALFREDO JOSE'),
		lastName: capitalCadena('REYES BARRERA'),
		type: 'regular',
		email: 'alreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9603,
		nationality: 'V'.toUpperCase(),
		cedula: 19747507,
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
		userName: 'baponte'.toLowerCase(),
		name: capitalCadena('BETSY CAROLINA'),
		lastName: capitalCadena('APONTE FERNANDEZ'),
		type: 'regular',
		email: 'baponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13956,
		nationality: 'V'.toUpperCase(),
		cedula: 15475467,
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
		userName: 'mylinares'.toLowerCase(),
		name: capitalCadena('MYLEIDI CAROLINA'),
		lastName: capitalCadena('LINARES RAMIREZ'),
		type: 'regular',
		email: 'mylinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10227,
		nationality: 'V'.toUpperCase(),
		cedula: 25258339,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'icanizales'.toLowerCase(),
		name: capitalCadena('IRAIDA DEL CARMEN'),
		lastName: capitalCadena('CAÑIZALES VILORIA'),
		type: 'regular',
		email: 'icanizales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10398,
		nationality: 'V'.toUpperCase(),
		cedula: 6235231,
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
		userName: 'rboscan'.toLowerCase(),
		name: capitalCadena('REILLY DEIVID'),
		lastName: capitalCadena('BOSCAN GARCIA'),
		type: 'regular',
		email: 'rboscan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10482,
		nationality: 'V'.toUpperCase(),
		cedula: 19680584,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'omnava'.toLowerCase(),
		name: capitalCadena('OMAR JOSE'),
		lastName: capitalCadena('NAVA CHIRINOS'),
		type: 'regular',
		email: 'omnava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9684,
		nationality: 'V'.toUpperCase(),
		cedula: 26820022,
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
		userName: 'earay'.toLowerCase(),
		name: capitalCadena('ERIK JAVIER'),
		lastName: capitalCadena('ARAY '),
		type: 'regular',
		email: 'earay@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10495,
		nationality: 'V'.toUpperCase(),
		cedula: 18173643,
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
		userName: 'jaldana'.toLowerCase(),
		name: capitalCadena('JAINET MARINA'),
		lastName: capitalCadena('ALDANA DE ALMARZA'),
		type: 'regular',
		email: 'jaldana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9692,
		nationality: 'V'.toUpperCase(),
		cedula: 16367677,
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
		userName: 'jalvarez'.toLowerCase(),
		name: capitalCadena('JHOANNY COROMOTO'),
		lastName: capitalCadena('ALVAREZ '),
		type: 'regular',
		email: 'jalvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10019,
		nationality: 'V'.toUpperCase(),
		cedula: 19617811,
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
		userName: 'jvivas'.toLowerCase(),
		name: capitalCadena('JOSE JEFERSON'),
		lastName: capitalCadena('VIVAS HERNANDEZ'),
		type: 'regular',
		email: 'jvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10528,
		nationality: 'V'.toUpperCase(),
		cedula: 19740843,
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
		userName: 'gmarin'.toLowerCase(),
		name: capitalCadena('GUSMAN ANTONIO'),
		lastName: capitalCadena('MARIN ATACHO'),
		type: 'regular',
		email: 'gmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10073,
		nationality: 'V'.toUpperCase(),
		cedula: 19442333,
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
		userName: 'jplessmann'.toLowerCase(),
		name: capitalCadena('JOSE RAFAEL'),
		lastName: capitalCadena('PLESSMANN MARQUIS'),
		type: 'regular',
		email: 'jplessmann@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5273,
		nationality: 'V'.toUpperCase(),
		cedula: 6029852,
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
		userName: 'marigomez'.toLowerCase(),
		name: capitalCadena('MARIA LAURA'),
		lastName: capitalCadena('GOMEZ FERRER'),
		type: 'regular',
		email: 'marigomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10618,
		nationality: 'V'.toUpperCase(),
		cedula: 26197749,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bcarrasco'.toLowerCase(),
		name: capitalCadena('BERANGELIS PAOLA'),
		lastName: capitalCadena('CARRASCO BAYONA'),
		type: 'regular',
		email: 'bcarrasco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10332,
		nationality: 'V'.toUpperCase(),
		cedula: 23268213,
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
		userName: 'yediaz'.toLowerCase(),
		name: capitalCadena('YENIRE COROMOTO'),
		lastName: capitalCadena('DIAZ CARRILLO'),
		type: 'regular',
		email: 'yediaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10783,
		nationality: 'V'.toUpperCase(),
		cedula: 20872135,
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
		userName: 'emoreno'.toLowerCase(),
		name: capitalCadena('EFRAIN ALEJANDRO'),
		lastName: capitalCadena('MORENO SEGOVIA'),
		type: 'regular',
		email: 'emoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10790,
		nationality: 'V'.toUpperCase(),
		cedula: 26553704,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybarroso'.toLowerCase(),
		name: capitalCadena('YUDEINIS JOSEFINA'),
		lastName: capitalCadena('BARROSO FERNANDEZ'),
		type: 'regular',
		email: 'ybarroso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10486,
		nationality: 'V'.toUpperCase(),
		cedula: 21039945,
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
		userName: 'pcabrera'.toLowerCase(),
		name: capitalCadena('PATRICIA ANDREINA'),
		lastName: capitalCadena('CABRERA TABEROA'),
		type: 'regular',
		email: 'pcabrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10498,
		nationality: 'V'.toUpperCase(),
		cedula: 22631617,
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
		userName: 'yreinosa'.toLowerCase(),
		name: capitalCadena('YEILIS NAYERLIN'),
		lastName: capitalCadena('REINOSA CASTRO'),
		type: 'regular',
		email: 'yreinosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10801,
		nationality: 'V'.toUpperCase(),
		cedula: 21640034,
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
		userName: 'iescobar'.toLowerCase(),
		name: capitalCadena('ISAMAR MARGARITA'),
		lastName: capitalCadena('ESCOBAR GUTIERREZ'),
		type: 'regular',
		email: 'iescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10803,
		nationality: 'V'.toUpperCase(),
		cedula: 22764423,
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
		userName: 'dcabello'.toLowerCase(),
		name: capitalCadena('DAYERLYN YESENIA'),
		lastName: capitalCadena('CABELLO REQUE'),
		type: 'regular',
		email: 'dcabello@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10804,
		nationality: 'V'.toUpperCase(),
		cedula: 24530007,
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
		userName: 'hbenitez'.toLowerCase(),
		name: capitalCadena('HEUDYS ANAIS'),
		lastName: capitalCadena('BENITEZ VOLCANES'),
		type: 'regular',
		email: 'hbenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10807,
		nationality: 'V'.toUpperCase(),
		cedula: 27497603,
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
		userName: 'dquintana'.toLowerCase(),
		name: capitalCadena('DAVIANA DANYELI'),
		lastName: capitalCadena('QUINTANA PIÑANGO'),
		type: 'regular',
		email: 'dquintana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10568,
		nationality: 'V'.toUpperCase(),
		cedula: 25542554,
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
		userName: 'hbetancourt'.toLowerCase(),
		name: capitalCadena('HINGERBERT LING'),
		lastName: capitalCadena('BETANCOURT MARTINEZ'),
		type: 'regular',
		email: 'hbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10606,
		nationality: 'V'.toUpperCase(),
		cedula: 20547492,
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
		userName: 'mealcala'.toLowerCase(),
		name: capitalCadena('MELISA MAIKELIS'),
		lastName: capitalCadena('ALCALA LONGART'),
		type: 'regular',
		email: 'mealcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10897,
		nationality: 'V'.toUpperCase(),
		cedula: 16218500,
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
		userName: 'bromero'.toLowerCase(),
		name: capitalCadena('BARBARA YULIMAR'),
		lastName: capitalCadena('ROMERO CORONA'),
		type: 'regular',
		email: 'bromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10791,
		nationality: 'V'.toUpperCase(),
		cedula: 17097987,
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
		userName: 'yguayapero'.toLowerCase(),
		name: capitalCadena('YELITZA MERCEDES'),
		lastName: capitalCadena('GUAYAPERO '),
		type: 'regular',
		email: 'yguayapero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10986,
		nationality: 'V'.toUpperCase(),
		cedula: 8485757,
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
		userName: 'dherrera'.toLowerCase(),
		name: capitalCadena('DAYANA COROMOTO'),
		lastName: capitalCadena('HERRERA '),
		type: 'regular',
		email: 'dherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10792,
		nationality: 'V'.toUpperCase(),
		cedula: 15130234,
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
		userName: 'ylopez'.toLowerCase(),
		name: capitalCadena('YULIANA DEL VALLE'),
		lastName: capitalCadena('LOPEZ LOPEZ'),
		type: 'regular',
		email: 'ylopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10875,
		nationality: 'V'.toUpperCase(),
		cedula: 18151394,
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
		userName: 'aalfonzo'.toLowerCase(),
		name: capitalCadena('ARMANDO RAFAEL'),
		lastName: capitalCadena('ALFONZO VELÁSQUEZ'),
		type: 'regular',
		email: 'aalfonzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11078,
		nationality: 'V'.toUpperCase(),
		cedula: 11143647,
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
		userName: 'jzamor'.toLowerCase(),
		name: capitalCadena('JENSY MICHELENA'),
		lastName: capitalCadena('ZAMOR CARREUS'),
		type: 'regular',
		email: 'jzamor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11085,
		nationality: 'V'.toUpperCase(),
		cedula: 21467688,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nbriceno'.toLowerCase(),
		name: capitalCadena('NORVIS JOSE'),
		lastName: capitalCadena('BRICEÑO GONZALEZ'),
		type: 'regular',
		email: 'nbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11088,
		nationality: 'V'.toUpperCase(),
		cedula: 16883154,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gbarreno'.toLowerCase(),
		name: capitalCadena('GLEISY JHOANA'),
		lastName: capitalCadena('BARRENO DE AVILA'),
		type: 'regular',
		email: 'gbarreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11109,
		nationality: 'V'.toUpperCase(),
		cedula: 14226843,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hvillasmil'.toLowerCase(),
		name: capitalCadena('HUSSEY CHIQUINQUIRA'),
		lastName: capitalCadena('VILLASMIL LUZARDO'),
		type: 'regular',
		email: 'hvillasmil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10920,
		nationality: 'V'.toUpperCase(),
		cedula: 18005657,
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
		userName: 'adurand'.toLowerCase(),
		name: capitalCadena('ALEXKA COROMOTO'),
		lastName: capitalCadena('DURAND PADRON'),
		type: 'regular',
		email: 'adurand@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11199,
		nationality: 'V'.toUpperCase(),
		cedula: 24178079,
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
		userName: 'dcarruido'.toLowerCase(),
		name: capitalCadena('DARIFER '),
		lastName: capitalCadena('CARRUIDO PIMENTEL'),
		type: 'regular',
		email: 'dcarruido@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10988,
		nationality: 'V'.toUpperCase(),
		cedula: 16074332,
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
		userName: 'ynava'.toLowerCase(),
		name: capitalCadena('YUGLIMAR CAROLINA'),
		lastName: capitalCadena('NAVA RIZCO'),
		type: 'regular',
		email: 'ynava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11244,
		nationality: 'V'.toUpperCase(),
		cedula: 27384152,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jolopez'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('LOPEZ ANDRADE'),
		type: 'regular',
		email: 'jolopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11303,
		nationality: 'V'.toUpperCase(),
		cedula: 18283141,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncaserta'.toLowerCase(),
		name: capitalCadena('NATHALY DEL VALLE'),
		lastName: capitalCadena('CASERTA '),
		type: 'regular',
		email: 'ncaserta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11351,
		nationality: 'V'.toUpperCase(),
		cedula: 19880848,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csanchez'.toLowerCase(),
		name: capitalCadena('CARMEN GREY'),
		lastName: capitalCadena('SANCHEZ CHACON'),
		type: 'regular',
		email: 'csanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14904,
		nationality: 'V'.toUpperCase(),
		cedula: 10486715,
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
		userName: 'gchirinos'.toLowerCase(),
		name: capitalCadena('GINETTE ORIANA'),
		lastName: capitalCadena('CHIRINOS MARTINEZ'),
		type: 'regular',
		email: 'gchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11407,
		nationality: 'V'.toUpperCase(),
		cedula: 25840318,
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
		userName: 'rorozco'.toLowerCase(),
		name: capitalCadena('ROSMELY NACARY'),
		lastName: capitalCadena('OROZCO ROA'),
		type: 'regular',
		email: 'rorozco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11418,
		nationality: 'V'.toUpperCase(),
		cedula: 24886553,
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
		userName: 'mmejia'.toLowerCase(),
		name: capitalCadena('MARIA EGDALYS VIRGINIA'),
		lastName: capitalCadena('MEJIA GUZMAN'),
		type: 'regular',
		email: 'mmejia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8336,
		nationality: 'V'.toUpperCase(),
		cedula: 10514581,
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
		userName: 'omosquera'.toLowerCase(),
		name: capitalCadena('ORIANA PAOLA'),
		lastName: capitalCadena('MOSQUERA CASTILLO'),
		type: 'regular',
		email: 'omosquera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11505,
		nationality: 'V'.toUpperCase(),
		cedula: 27107761,
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
		userName: 'rjardim'.toLowerCase(),
		name: capitalCadena('RITA RAQUEL'),
		lastName: capitalCadena('JARDIM DE ANDRADE'),
		type: 'regular',
		email: 'rjardim@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16207,
		nationality: 'V'.toUpperCase(),
		cedula: 6272220,
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
		userName: 'jnocente'.toLowerCase(),
		name: capitalCadena('JOHAN ISAAC'),
		lastName: capitalCadena('NOCENTE MEDINA'),
		type: 'regular',
		email: 'jnocente@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11560,
		nationality: 'V'.toUpperCase(),
		cedula: 21466046,
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
		userName: 'asarmiento'.toLowerCase(),
		name: capitalCadena('ANTONY JOSE'),
		lastName: capitalCadena('SARMIENTO ROJAS'),
		type: 'regular',
		email: 'asarmiento@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11240,
		nationality: 'V'.toUpperCase(),
		cedula: 23765442,
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
		userName: 'mriera'.toLowerCase(),
		name: capitalCadena('MARIO RENE'),
		lastName: capitalCadena('RIERA TORO'),
		type: 'regular',
		email: 'mriera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11248,
		nationality: 'V'.toUpperCase(),
		cedula: 16183451,
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
		userName: 'hpereira'.toLowerCase(),
		name: capitalCadena('HECTOR JESUS'),
		lastName: capitalCadena('PEREIRA TAYUPO'),
		type: 'regular',
		email: 'hpereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11254,
		nationality: 'V'.toUpperCase(),
		cedula: 18981587,
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
		userName: 'agodoy'.toLowerCase(),
		name: capitalCadena('ALEXANDER JOSE'),
		lastName: capitalCadena('GODOY CARRASQUERO'),
		type: 'regular',
		email: 'agodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11299,
		nationality: 'V'.toUpperCase(),
		cedula: 20862182,
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
		userName: 'jagarcia'.toLowerCase(),
		name: capitalCadena('JANAKI BIHARI'),
		lastName: capitalCadena('GARCIA HERNANDEZ'),
		type: 'regular',
		email: 'jagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11689,
		nationality: 'V'.toUpperCase(),
		cedula: 22904736,
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
		userName: 'jequintero'.toLowerCase(),
		name: capitalCadena('JENNIFER MARIA'),
		lastName: capitalCadena('QUINTERO BERMUDEZ'),
		type: 'regular',
		email: 'jequintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11388,
		nationality: 'V'.toUpperCase(),
		cedula: 15727662,
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
		userName: 'yoguevara'.toLowerCase(),
		name: capitalCadena('YORNELLY KLEIDIMAR'),
		lastName: capitalCadena('GUEVARA FLORES'),
		type: 'regular',
		email: 'yoguevara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11578,
		nationality: 'V'.toUpperCase(),
		cedula: 20066618,
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
		userName: 'jevelasquez'.toLowerCase(),
		name: capitalCadena('JESUS FRANCISCO'),
		lastName: capitalCadena('VELASQUEZ PALACIOS'),
		type: 'regular',
		email: 'jevelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11610,
		nationality: 'V'.toUpperCase(),
		cedula: 26299519,
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
		userName: 'clmartinez'.toLowerCase(),
		name: capitalCadena('CLARO OCTAVIO'),
		lastName: capitalCadena('MARTINEZ MACHADO'),
		type: 'regular',
		email: 'clmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11631,
		nationality: 'V'.toUpperCase(),
		cedula: 13949013,
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
		userName: 'jacosta'.toLowerCase(),
		name: capitalCadena('JESSICA CATALINA'),
		lastName: capitalCadena('ACOSTA MAVAREZ'),
		type: 'regular',
		email: 'jacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11699,
		nationality: 'V'.toUpperCase(),
		cedula: 20085603,
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
		userName: 'eandara'.toLowerCase(),
		name: capitalCadena('EDIGNA AUXILIADORA'),
		lastName: capitalCadena('ANDARA DE BLANCO'),
		type: 'regular',
		email: 'eandara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11721,
		nationality: 'V'.toUpperCase(),
		cedula: 15915088,
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
		userName: 'ifranco'.toLowerCase(),
		name: capitalCadena('IVONNE OXIMAR'),
		lastName: capitalCadena('FRANCO CHAPARRO'),
		type: 'regular',
		email: 'ifranco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11943,
		nationality: 'V'.toUpperCase(),
		cedula: 15393610,
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
		userName: 'gmolina'.toLowerCase(),
		name: capitalCadena('GRISHKA JEANNINE'),
		lastName: capitalCadena('MOLINA ACOSTA'),
		type: 'regular',
		email: 'gmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16255,
		nationality: 'V'.toUpperCase(),
		cedula: 12685985,
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
		userName: 'ancontreras'.toLowerCase(),
		name: capitalCadena('ANA YELITZA'),
		lastName: capitalCadena('CONTRERAS GARCIA'),
		type: 'regular',
		email: 'ancontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11953,
		nationality: 'V'.toUpperCase(),
		cedula: 18990406,
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
		userName: 'kadarme'.toLowerCase(),
		name: capitalCadena('KEYLA VANESSA'),
		lastName: capitalCadena('ADARME MILANO'),
		type: 'regular',
		email: 'kadarme@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12049,
		nationality: 'V'.toUpperCase(),
		cedula: 15393136,
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
		userName: 'josperez'.toLowerCase(),
		name: capitalCadena('JOSE JAVIER'),
		lastName: capitalCadena('PEREZ '),
		type: 'regular',
		email: 'josperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11959,
		nationality: 'V'.toUpperCase(),
		cedula: 15174389,
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
		userName: 'rpolanco'.toLowerCase(),
		name: capitalCadena('RHAYZA CECILIA'),
		lastName: capitalCadena('POLANCO HURTADO'),
		type: 'regular',
		email: 'rpolanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12009,
		nationality: 'V'.toUpperCase(),
		cedula: 14227706,
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
		userName: 'amalave'.toLowerCase(),
		name: capitalCadena('AMARILYS DEL VALLE'),
		lastName: capitalCadena('MALAVE HERNANDEZ'),
		type: 'regular',
		email: 'amalave@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12048,
		nationality: 'V'.toUpperCase(),
		cedula: 17022240,
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
		userName: 'hhidalgo'.toLowerCase(),
		name: capitalCadena('HUMBERLY NACARIS'),
		lastName: capitalCadena('HIDALGO RIOS'),
		type: 'regular',
		email: 'hhidalgo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13669,
		nationality: 'V'.toUpperCase(),
		cedula: 16871209,
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
		userName: 'dicolmenares'.toLowerCase(),
		name: capitalCadena('DIEGO JOSE'),
		lastName: capitalCadena('COLMENARES CARDENAS'),
		type: 'regular',
		email: 'dicolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12142,
		nationality: 'V'.toUpperCase(),
		cedula: 25778228,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dorojas'.toLowerCase(),
		name: capitalCadena('DOUGLAS GERMAN'),
		lastName: capitalCadena('ROJAS TORTOZA'),
		type: 'regular',
		email: 'dorojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12050,
		nationality: 'V'.toUpperCase(),
		cedula: 21005780,
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
		userName: 'dalvarez'.toLowerCase(),
		name: capitalCadena('DUBRASKA ELIZABETH'),
		lastName: capitalCadena('ALVAREZ MEJIA'),
		type: 'regular',
		email: 'dalvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14695,
		nationality: 'V'.toUpperCase(),
		cedula: 12418349,
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
		userName: 'kzambrano'.toLowerCase(),
		name: capitalCadena('KERLY SUSANA'),
		lastName: capitalCadena('ZAMBRANO DOZA'),
		type: 'regular',
		email: 'kzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12207,
		nationality: 'V'.toUpperCase(),
		cedula: 16412002,
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
		userName: 'wblanco'.toLowerCase(),
		name: capitalCadena('WILLIAM JOEL'),
		lastName: capitalCadena('BLANCO RODRIGUEZ'),
		type: 'regular',
		email: 'wblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12274,
		nationality: 'V'.toUpperCase(),
		cedula: 12399618,
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
		userName: 'margomez'.toLowerCase(),
		name: capitalCadena('MARY CARMEN'),
		lastName: capitalCadena('GOMEZ DE VILLAMIZAR'),
		type: 'regular',
		email: 'margomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12094,
		nationality: 'V'.toUpperCase(),
		cedula: 16779659,
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
		userName: 'garaque'.toLowerCase(),
		name: capitalCadena('GLEDYS DEL SOCORRO'),
		lastName: capitalCadena('ARAQUE PUENTE'),
		type: 'regular',
		email: 'garaque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12170,
		nationality: 'V'.toUpperCase(),
		cedula: 12115762,
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
		userName: 'rsayago'.toLowerCase(),
		name: capitalCadena('ROSMARITH YORGELYS'),
		lastName: capitalCadena('SAYAGO CONTRERAS'),
		type: 'regular',
		email: 'rsayago@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12387,
		nationality: 'V'.toUpperCase(),
		cedula: 23826634,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lenunez'.toLowerCase(),
		name: capitalCadena('LEISLY ANDREINA'),
		lastName: capitalCadena('NUÑEZ MORA'),
		type: 'regular',
		email: 'lenunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12416,
		nationality: 'V'.toUpperCase(),
		cedula: 16228231,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jtarazona'.toLowerCase(),
		name: capitalCadena('JOSE MARINO'),
		lastName: capitalCadena('TARAZONA GUERRERO'),
		type: 'regular',
		email: 'jtarazona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12417,
		nationality: 'V'.toUpperCase(),
		cedula: 5740278,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efonseca'.toLowerCase(),
		name: capitalCadena('ERVIN JOSE DE JESUS'),
		lastName: capitalCadena('FONSECA JIMENEZ'),
		type: 'regular',
		email: 'efonseca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12178,
		nationality: 'V'.toUpperCase(),
		cedula: 17178173,
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
		userName: 'ydehorta'.toLowerCase(),
		name: capitalCadena('YULEISI '),
		lastName: capitalCadena('DE HORTA VALENZUELA'),
		type: 'regular',
		email: 'ydehorta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12433,
		nationality: 'V'.toUpperCase(),
		cedula: 21289751,
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
		userName: 'mramirez'.toLowerCase(),
		name: capitalCadena('MARIA CAROLINA'),
		lastName: capitalCadena('RAMIREZ '),
		type: 'regular',
		email: 'mramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12362,
		nationality: 'V'.toUpperCase(),
		cedula: 14255106,
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
		userName: 'vmartinez'.toLowerCase(),
		name: capitalCadena('VICTOR MANUEL'),
		lastName: capitalCadena('MARTINEZ RODRIGUEZ'),
		type: 'regular',
		email: 'vmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12371,
		nationality: 'V'.toUpperCase(),
		cedula: 22878477,
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
		userName: 'lumorales'.toLowerCase(),
		name: capitalCadena('LUIS ENRIQUE'),
		lastName: capitalCadena('MORALES ORTEGA'),
		type: 'regular',
		email: 'lumorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12384,
		nationality: 'V'.toUpperCase(),
		cedula: 21146945,
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
		userName: 'jorondon'.toLowerCase(),
		name: capitalCadena('JOSE ALONSO'),
		lastName: capitalCadena('RONDON ZERPA'),
		type: 'regular',
		email: 'jorondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12428,
		nationality: 'V'.toUpperCase(),
		cedula: 10108582,
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
		userName: 'ligonzalez'.toLowerCase(),
		name: capitalCadena('LISETH JOSEFINA'),
		lastName: capitalCadena('GONZALEZ BELLORIN'),
		type: 'regular',
		email: 'ligonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12440,
		nationality: 'V'.toUpperCase(),
		cedula: 10299397,
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
		userName: 'ncastro'.toLowerCase(),
		name: capitalCadena('NELSON JAVIER'),
		lastName: capitalCadena('CASTRO VIVAS'),
		type: 'regular',
		email: 'ncastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12499,
		nationality: 'V'.toUpperCase(),
		cedula: 12834620,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yohernandez'.toLowerCase(),
		name: capitalCadena('YOLIBER CAROLINA'),
		lastName: capitalCadena('HERNANDEZ GONZALEZ'),
		type: 'regular',
		email: 'yohernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12476,
		nationality: 'V'.toUpperCase(),
		cedula: 16040053,
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
		userName: 'ygarcia'.toLowerCase(),
		name: capitalCadena('YELLY JOSEFINA'),
		lastName: capitalCadena('GARCIA GOITA'),
		type: 'regular',
		email: 'ygarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12481,
		nationality: 'V'.toUpperCase(),
		cedula: 16288485,
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
		userName: 'jrivas'.toLowerCase(),
		name: capitalCadena('JOSE FELIX'),
		lastName: capitalCadena('RIVAS VILLAROEL'),
		type: 'regular',
		email: 'jrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12486,
		nationality: 'V'.toUpperCase(),
		cedula: 13767864,
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
		userName: 'cpacheco'.toLowerCase(),
		name: capitalCadena('CARLOS ALBERTO'),
		lastName: capitalCadena('PACHECO SIERVO'),
		type: 'regular',
		email: 'cpacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12492,
		nationality: 'V'.toUpperCase(),
		cedula: 27628810,
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
		userName: 'aromero'.toLowerCase(),
		name: capitalCadena('ALFREDO LUIS'),
		lastName: capitalCadena('ROMERO PERDOMO'),
		type: 'regular',
		email: 'aromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12595,
		nationality: 'V'.toUpperCase(),
		cedula: 7662091,
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
		userName: 'amoya'.toLowerCase(),
		name: capitalCadena('ANDRES ALEXANDER'),
		lastName: capitalCadena('MOYA HERNANDEZ'),
		type: 'regular',
		email: 'amoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12505,
		nationality: 'V'.toUpperCase(),
		cedula: 16832007,
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
		userName: 'aolivero'.toLowerCase(),
		name: capitalCadena('ANGELICA ANAIS'),
		lastName: capitalCadena('OLIVERO ALVAREZ'),
		type: 'regular',
		email: 'aolivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12571,
		nationality: 'V'.toUpperCase(),
		cedula: 18691451,
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
		userName: 'ralcala'.toLowerCase(),
		name: capitalCadena('ROSLEISY YENIREE'),
		lastName: capitalCadena('ALCALA RIVERA'),
		type: 'regular',
		email: 'ralcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12614,
		nationality: 'V'.toUpperCase(),
		cedula: 19716366,
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
		userName: 'raponte'.toLowerCase(),
		name: capitalCadena('ROSMI ALEJANDRA'),
		lastName: capitalCadena('APONTE JARAMILLO'),
		type: 'regular',
		email: 'raponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12573,
		nationality: 'V'.toUpperCase(),
		cedula: 18488080,
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
		userName: 'aborjas'.toLowerCase(),
		name: capitalCadena('AILEN CAROLINA'),
		lastName: capitalCadena('BORJAS GRATEROL'),
		type: 'regular',
		email: 'aborjas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12574,
		nationality: 'V'.toUpperCase(),
		cedula: 17647898,
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
		userName: 'cgallardo'.toLowerCase(),
		name: capitalCadena('CARLOS ALBERTO'),
		lastName: capitalCadena('GALLARDO LOPEZ'),
		type: 'regular',
		email: 'cgallardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16273,
		nationality: 'V'.toUpperCase(),
		cedula: 7925155,
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
		userName: 'djardim'.toLowerCase(),
		name: capitalCadena('DIMAR JAVIER'),
		lastName: capitalCadena('JARDIM HERNANDEZ'),
		type: 'regular',
		email: 'djardim@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12606,
		nationality: 'V'.toUpperCase(),
		cedula: 15489974,
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
		userName: 'yeslopez'.toLowerCase(),
		name: capitalCadena('YESICA MARIA'),
		lastName: capitalCadena('LOPEZ MONTILLA'),
		type: 'regular',
		email: 'yeslopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12621,
		nationality: 'V'.toUpperCase(),
		cedula: 18724921,
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
		userName: 'jespinoza'.toLowerCase(),
		name: capitalCadena('JESUS ALBERTO'),
		lastName: capitalCadena('ESPINOZA BRAVO'),
		type: 'regular',
		email: 'jespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12642,
		nationality: 'V'.toUpperCase(),
		cedula: 26762896,
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
		userName: 'fhernandez'.toLowerCase(),
		name: capitalCadena('FIDIAS JOSE'),
		lastName: capitalCadena('HERNANDEZ PEROZO'),
		type: 'regular',
		email: 'fhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12653,
		nationality: 'V'.toUpperCase(),
		cedula: 15556253,
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
		userName: 'ksanchez'.toLowerCase(),
		name: capitalCadena('KARIENNYS KAINA'),
		lastName: capitalCadena('SANCHEZ LOPEZ'),
		type: 'regular',
		email: 'ksanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12654,
		nationality: 'V'.toUpperCase(),
		cedula: 25128175,
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
		userName: 'jtorrealba'.toLowerCase(),
		name: capitalCadena('JAIRO LEONARD'),
		lastName: capitalCadena('TORREALBA BLANCO'),
		type: 'regular',
		email: 'jtorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12710,
		nationality: 'V'.toUpperCase(),
		cedula: 17147106,
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
		userName: 'lmaldonado'.toLowerCase(),
		name: capitalCadena('LISBETH DEL CARMEN'),
		lastName: capitalCadena('MALDONADO DE PEREZ'),
		type: 'regular',
		email: 'lmaldonado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12655,
		nationality: 'V'.toUpperCase(),
		cedula: 14975561,
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
		userName: 'mlugo'.toLowerCase(),
		name: capitalCadena('MARYURI CAROLINA'),
		lastName: capitalCadena('LUGO FAJARDO'),
		type: 'regular',
		email: 'mlugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12669,
		nationality: 'V'.toUpperCase(),
		cedula: 14322000,
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
		userName: 'pegonzalez'.toLowerCase(),
		name: capitalCadena('PENELOPE DEL CARMEN'),
		lastName: capitalCadena('GONZALEZ '),
		type: 'regular',
		email: 'pegonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12725,
		nationality: 'V'.toUpperCase(),
		cedula: 16430183,
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
		userName: 'ligarcia'.toLowerCase(),
		name: capitalCadena('LIDUZKA MARIA'),
		lastName: capitalCadena('GARCIA DE MACHADO'),
		type: 'regular',
		email: 'ligarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12728,
		nationality: 'V'.toUpperCase(),
		cedula: 13873595,
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
		userName: 'ycana'.toLowerCase(),
		name: capitalCadena('YUSNEIDY JOSE'),
		lastName: capitalCadena('CAÑA RUIZ'),
		type: 'regular',
		email: 'ycana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12748,
		nationality: 'V'.toUpperCase(),
		cedula: 19633149,
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
		userName: 'jcastillo'.toLowerCase(),
		name: capitalCadena('JOSE RAMON'),
		lastName: capitalCadena('CASTILLO RAMIREZ'),
		type: 'regular',
		email: 'jcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12677,
		nationality: 'V'.toUpperCase(),
		cedula: 25477347,
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
		userName: 'yostos'.toLowerCase(),
		name: capitalCadena('YASIBIT CAROLINA'),
		lastName: capitalCadena('OSTOS PEREZ'),
		type: 'regular',
		email: 'yostos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12693,
		nationality: 'V'.toUpperCase(),
		cedula: 17471951,
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
		userName: 'apalacios'.toLowerCase(),
		name: capitalCadena('ADRIANA DE LOS ANGELES'),
		lastName: capitalCadena('PALACIOS MARCANO'),
		type: 'regular',
		email: 'apalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12808,
		nationality: 'V'.toUpperCase(),
		cedula: 15050906,
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
		userName: 'jandrade'.toLowerCase(),
		name: capitalCadena('JESUS NOEL'),
		lastName: capitalCadena('ANDRADE ARRIECHE'),
		type: 'regular',
		email: 'jandrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12828,
		nationality: 'V'.toUpperCase(),
		cedula: 10503876,
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
		userName: 'vcoa'.toLowerCase(),
		name: capitalCadena('VALERY MEREDITH'),
		lastName: capitalCadena('COA MAQUEDA'),
		type: 'regular',
		email: 'vcoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12838,
		nationality: 'V'.toUpperCase(),
		cedula: 26327081,
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
		userName: 'jocando'.toLowerCase(),
		name: capitalCadena('JEAN CARLOS'),
		lastName: capitalCadena('OCANDO PEREZ'),
		type: 'regular',
		email: 'jocando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12816,
		nationality: 'V'.toUpperCase(),
		cedula: 14457933,
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
		userName: 'rcastro'.toLowerCase(),
		name: capitalCadena('ROSMARY JOSEFINA'),
		lastName: capitalCadena('CASTRO RUJANO'),
		type: 'regular',
		email: 'rcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12824,
		nationality: 'V'.toUpperCase(),
		cedula: 15917648,
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
		userName: 'wfernandez'.toLowerCase(),
		name: capitalCadena('WILLIAM ENRIQUE'),
		lastName: capitalCadena('FERNANDEZ ANGULO'),
		type: 'regular',
		email: 'wfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12861,
		nationality: 'V'.toUpperCase(),
		cedula: 13050156,
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
		userName: 'jusalazar'.toLowerCase(),
		name: capitalCadena('JUAN LUIS'),
		lastName: capitalCadena('SALAZAR STRUVE'),
		type: 'regular',
		email: 'jusalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12885,
		nationality: 'V'.toUpperCase(),
		cedula: 27082512,
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
		userName: 'magarcia'.toLowerCase(),
		name: capitalCadena('MANUEL ANDRES'),
		lastName: capitalCadena('GARCIA '),
		type: 'regular',
		email: 'magarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12886,
		nationality: 'V'.toUpperCase(),
		cedula: 17675057,
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
		userName: 'npinero'.toLowerCase(),
		name: capitalCadena('NAIDELYS YANELI'),
		lastName: capitalCadena('PIÑERO RIVAS'),
		type: 'regular',
		email: 'npinero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12937,
		nationality: 'V'.toUpperCase(),
		cedula: 27796563,
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
		userName: 'marreyes'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('REYES DE ROMERO'),
		type: 'regular',
		email: 'marreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12912,
		nationality: 'V'.toUpperCase(),
		cedula: 12608879,
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
		userName: 'bobonaga'.toLowerCase(),
		name: capitalCadena('BLANCA YULITZA'),
		lastName: capitalCadena('OBONAGA CHIRINOS'),
		type: 'regular',
		email: 'bobonaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12924,
		nationality: 'V'.toUpperCase(),
		cedula: 27315943,
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
		userName: 'augonzalez'.toLowerCase(),
		name: capitalCadena('AURIMAR '),
		lastName: capitalCadena('GONZALEZ QUINTERO'),
		type: 'regular',
		email: 'augonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12926,
		nationality: 'V'.toUpperCase(),
		cedula: 9796511,
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
		userName: 'kkilso'.toLowerCase(),
		name: capitalCadena('KELVIS KAREL'),
		lastName: capitalCadena('KILSO GONZALEZ'),
		type: 'regular',
		email: 'kkilso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12950,
		nationality: 'V'.toUpperCase(),
		cedula: 12695515,
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
		userName: 'ngallardo'.toLowerCase(),
		name: capitalCadena('NEIDA BEATRIZ'),
		lastName: capitalCadena('GALLARDO YORIS'),
		type: 'regular',
		email: 'ngallardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12986,
		nationality: 'V'.toUpperCase(),
		cedula: 14266186,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuhernandez'.toLowerCase(),
		name: capitalCadena('YURAYMA ANDREYNA'),
		lastName: capitalCadena('HERNANDEZ PACHECO'),
		type: 'regular',
		email: 'yuhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12991,
		nationality: 'V'.toUpperCase(),
		cedula: 20007591,
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
		userName: 'vcolmenarez'.toLowerCase(),
		name: capitalCadena('VANESSA CAROLINA'),
		lastName: capitalCadena('COLMENAREZ DE DAZA'),
		type: 'regular',
		email: 'vcolmenarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12952,
		nationality: 'V'.toUpperCase(),
		cedula: 17834752,
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
		userName: 'jmoreno'.toLowerCase(),
		name: capitalCadena('JORGE JAVIER'),
		lastName: capitalCadena('MORENO CAMARGO'),
		type: 'regular',
		email: 'jmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12975,
		nationality: 'V'.toUpperCase(),
		cedula: 30933567,
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
		userName: 'ymontiel'.toLowerCase(),
		name: capitalCadena('YEIMAR JOHANA'),
		lastName: capitalCadena('MONTIEL MONTIEL'),
		type: 'regular',
		email: 'ymontiel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12976,
		nationality: 'V'.toUpperCase(),
		cedula: 30070262,
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
		userName: 'hvilchez'.toLowerCase(),
		name: capitalCadena('HERNAN EDUARDO'),
		lastName: capitalCadena('VILCHEZ GUILLEN'),
		type: 'regular',
		email: 'hvilchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13023,
		nationality: 'V'.toUpperCase(),
		cedula: 12232369,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'andiaz'.toLowerCase(),
		name: capitalCadena('ANIFRE LEONDER'),
		lastName: capitalCadena('DIAZ HERNANDEZ'),
		type: 'regular',
		email: 'andiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13027,
		nationality: 'V'.toUpperCase(),
		cedula: 27788569,
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
		userName: 'eibarra'.toLowerCase(),
		name: capitalCadena('EMIRO JOSUE'),
		lastName: capitalCadena('IBARRA PAYARES'),
		type: 'regular',
		email: 'eibarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13004,
		nationality: 'V'.toUpperCase(),
		cedula: 28296180,
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
		userName: 'msilvera'.toLowerCase(),
		name: capitalCadena('MANUEL RAMON'),
		lastName: capitalCadena('SILVERA LUGO'),
		type: 'regular',
		email: 'msilvera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13041,
		nationality: 'V'.toUpperCase(),
		cedula: 11198325,
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
		userName: 'eguaina'.toLowerCase(),
		name: capitalCadena('ELI RAMON'),
		lastName: capitalCadena('GUAINA MARCANO'),
		type: 'regular',
		email: 'eguaina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13006,
		nationality: 'V'.toUpperCase(),
		cedula: 15292748,
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
		userName: 'cnieves'.toLowerCase(),
		name: capitalCadena('CARMEN JUDITH'),
		lastName: capitalCadena('NIEVES SILVA'),
		type: 'regular',
		email: 'cnieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13056,
		nationality: 'V'.toUpperCase(),
		cedula: 10275366,
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
		userName: 'wmayor'.toLowerCase(),
		name: capitalCadena('WILFREDO ENRIQUE'),
		lastName: capitalCadena('MAYOR CAMACHO'),
		type: 'regular',
		email: 'wmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13030,
		nationality: 'V'.toUpperCase(),
		cedula: 15263146,
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
		userName: 'llaya'.toLowerCase(),
		name: capitalCadena('LUISAURA EDITH'),
		lastName: capitalCadena('LAYA GOMEZ'),
		type: 'regular',
		email: 'llaya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13051,
		nationality: 'V'.toUpperCase(),
		cedula: 26652966,
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
		userName: 'ssilva'.toLowerCase(),
		name: capitalCadena('SAHILIBETH ELIOMARIS'),
		lastName: capitalCadena('SILVA BOLIVAR'),
		type: 'regular',
		email: 'ssilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13052,
		nationality: 'V'.toUpperCase(),
		cedula: 26231591,
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
		userName: 'jesalcedo'.toLowerCase(),
		name: capitalCadena('JESUS EDUARDO'),
		lastName: capitalCadena('SALCEDO PARRA'),
		type: 'regular',
		email: 'jesalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13058,
		nationality: 'V'.toUpperCase(),
		cedula: 27601393,
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
		userName: 'ggonzalez'.toLowerCase(),
		name: capitalCadena('GREIDYS FRANCELYS'),
		lastName: capitalCadena('GONZALEZ LEGON'),
		type: 'regular',
		email: 'ggonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13089,
		nationality: 'V'.toUpperCase(),
		cedula: 27770202,
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
		userName: 'yuacosta'.toLowerCase(),
		name: capitalCadena('YUSMARY ELENA'),
		lastName: capitalCadena('ACOSTA ULACIO'),
		type: 'regular',
		email: 'yuacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13059,
		nationality: 'V'.toUpperCase(),
		cedula: 12326565,
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
		userName: 'legonzalez'.toLowerCase(),
		name: capitalCadena('LEONARDO '),
		lastName: capitalCadena('GONZALEZ '),
		type: 'regular',
		email: 'legonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13063,
		nationality: 'V'.toUpperCase(),
		cedula: 19133432,
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
		userName: 'hsangronis'.toLowerCase(),
		name: capitalCadena('HELMAR JUDITH'),
		lastName: capitalCadena('SANGRONIS PATIÑO'),
		type: 'regular',
		email: 'hsangronis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13095,
		nationality: 'V'.toUpperCase(),
		cedula: 13902231,
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
		userName: 'aalcala'.toLowerCase(),
		name: capitalCadena('ANNIBER MARIA'),
		lastName: capitalCadena('ALCALA BRAVO'),
		type: 'regular',
		email: 'aalcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13096,
		nationality: 'V'.toUpperCase(),
		cedula: 15882190,
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
		userName: 'amfernandez'.toLowerCase(),
		name: capitalCadena('AMEL MARIA'),
		lastName: capitalCadena('FERNANDEZ RODRIGUEZ'),
		type: 'regular',
		email: 'amfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13099,
		nationality: 'V'.toUpperCase(),
		cedula: 13074450,
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
		userName: 'cadiaz'.toLowerCase(),
		name: capitalCadena('CARMEN AILIR'),
		lastName: capitalCadena('DIAZ TUSEN'),
		type: 'regular',
		email: 'cadiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13100,
		nationality: 'V'.toUpperCase(),
		cedula: 11014276,
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
		userName: 'merojas'.toLowerCase(),
		name: capitalCadena('MELENY NAZARETH'),
		lastName: capitalCadena('ROJAS AVILA'),
		type: 'regular',
		email: 'merojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13115,
		nationality: 'V'.toUpperCase(),
		cedula: 20793054,
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
		userName: 'yomartinez'.toLowerCase(),
		name: capitalCadena('YORWIS JULIO'),
		lastName: capitalCadena('MARTINEZ GONZALEZ'),
		type: 'regular',
		email: 'yomartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12126,
		nationality: 'V'.toUpperCase(),
		cedula: 19739069,
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
		userName: 'rlugo'.toLowerCase(),
		name: capitalCadena('ROSELYS JOHANA'),
		lastName: capitalCadena('LUGO GONZALEZ'),
		type: 'regular',
		email: 'rlugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13101,
		nationality: 'V'.toUpperCase(),
		cedula: 20807052,
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
		userName: 'dchacin'.toLowerCase(),
		name: capitalCadena('DANIELA ALEJANDRA'),
		lastName: capitalCadena('CHACIN MORALES'),
		type: 'regular',
		email: 'dchacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13107,
		nationality: 'V'.toUpperCase(),
		cedula: 19214289,
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
		userName: 'cinfante'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('INFANTE ALVARADO'),
		type: 'regular',
		email: 'cinfante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13129,
		nationality: 'V'.toUpperCase(),
		cedula: 17147152,
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
		userName: 'rvilchez'.toLowerCase(),
		name: capitalCadena('ROBERTO GERMANICO'),
		lastName: capitalCadena('VILCHEZ MENDEZ'),
		type: 'regular',
		email: 'rvilchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13108,
		nationality: 'V'.toUpperCase(),
		cedula: 16296033,
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
		userName: 'nnavea'.toLowerCase(),
		name: capitalCadena('NERVA DEL VALLE'),
		lastName: capitalCadena('NAVEA MORALES'),
		type: 'regular',
		email: 'nnavea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13113,
		nationality: 'V'.toUpperCase(),
		cedula: 11499778,
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
		userName: 'fpoleo'.toLowerCase(),
		name: capitalCadena('FELISA IZNARDA'),
		lastName: capitalCadena('POLEO DE PORTELA'),
		type: 'regular',
		email: 'fpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13299,
		nationality: 'V'.toUpperCase(),
		cedula: 6730686,
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
		userName: 'emartinez'.toLowerCase(),
		name: capitalCadena('EDINSON '),
		lastName: capitalCadena('MARTINEZ PEREZ'),
		type: 'regular',
		email: 'emartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13151,
		nationality: 'V'.toUpperCase(),
		cedula: 26921839,
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
		userName: 'ascanache'.toLowerCase(),
		name: capitalCadena('ASTRID CAROLINA'),
		lastName: capitalCadena('CANACHE PARAQUEIMO'),
		type: 'regular',
		email: 'ascanache@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13161,
		nationality: 'V'.toUpperCase(),
		cedula: 18127257,
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
		userName: 'yramirez'.toLowerCase(),
		name: capitalCadena('YASMIN YULIBEL'),
		lastName: capitalCadena('RAMIREZ AYALA'),
		type: 'regular',
		email: 'yramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13124,
		nationality: 'V'.toUpperCase(),
		cedula: 14102337,
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
		userName: 'anperez'.toLowerCase(),
		name: capitalCadena('ANTHOR ENRIQUE'),
		lastName: capitalCadena('PEREZ REYES'),
		type: 'regular',
		email: 'anperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13135,
		nationality: 'V'.toUpperCase(),
		cedula: 22457504,
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
		userName: 'nolopez'.toLowerCase(),
		name: capitalCadena('NORMA KARINA'),
		lastName: capitalCadena('LOPEZ RANGEL'),
		type: 'regular',
		email: 'nolopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13163,
		nationality: 'V'.toUpperCase(),
		cedula: 18354642,
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
		userName: 'rgonzalez'.toLowerCase(),
		name: capitalCadena('RAFAEL ENRIQUE'),
		lastName: capitalCadena('GONZALEZ PARRA'),
		type: 'regular',
		email: 'rgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13177,
		nationality: 'V'.toUpperCase(),
		cedula: 25906886,
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
		userName: 'despinoza'.toLowerCase(),
		name: capitalCadena('DORA ELENA'),
		lastName: capitalCadena('ESPINOZA LOBO'),
		type: 'regular',
		email: 'despinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13191,
		nationality: 'V'.toUpperCase(),
		cedula: 6458040,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mandrade'.toLowerCase(),
		name: capitalCadena('MARIA CONCEPCION'),
		lastName: capitalCadena('DE ANDRADE JESUS'),
		type: 'regular',
		email: 'mandrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13204,
		nationality: 'V'.toUpperCase(),
		cedula: 6157811,
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
		userName: 'yacedeno'.toLowerCase(),
		name: capitalCadena('YASMERY JOSEFINA'),
		lastName: capitalCadena('CEDEÑO LUNAR'),
		type: 'regular',
		email: 'yacedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13211,
		nationality: 'V'.toUpperCase(),
		cedula: 9996426,
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
		userName: 'emarcano'.toLowerCase(),
		name: capitalCadena('EVELYN DEL VALLE'),
		lastName: capitalCadena('MARCANO SALAZAR'),
		type: 'regular',
		email: 'emarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13212,
		nationality: 'V'.toUpperCase(),
		cedula: 9997342,
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
		userName: 'atorres'.toLowerCase(),
		name: capitalCadena('ARSENIO JOSE'),
		lastName: capitalCadena('TORRES CABRERA'),
		type: 'regular',
		email: 'atorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13178,
		nationality: 'V'.toUpperCase(),
		cedula: 15726562,
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
		userName: 'zcastaneda'.toLowerCase(),
		name: capitalCadena('ZULAY DEL CARMEN'),
		lastName: capitalCadena('CASTAÑEDA MALAVE'),
		type: 'regular',
		email: 'zcastaneda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13221,
		nationality: 'V'.toUpperCase(),
		cedula: 10467377,
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
		userName: 'echacin'.toLowerCase(),
		name: capitalCadena('EYERIVETH GREOANNA'),
		lastName: capitalCadena('CHACIN CHIRINO'),
		type: 'regular',
		email: 'echacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13182,
		nationality: 'V'.toUpperCase(),
		cedula: 14206374,
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
		userName: 'igutierrez'.toLowerCase(),
		name: capitalCadena('ISABELINA D.L.SANTOS'),
		lastName: capitalCadena('GUTIERREZ DE PIÑA'),
		type: 'regular',
		email: 'igutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13231,
		nationality: 'V'.toUpperCase(),
		cedula: 10081428,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jeaponte'.toLowerCase(),
		name: capitalCadena('JESUS ANTONIO'),
		lastName: capitalCadena('APONTE GIL'),
		type: 'regular',
		email: 'jeaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13233,
		nationality: 'V'.toUpperCase(),
		cedula: 10786489,
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
		userName: 'abeltran'.toLowerCase(),
		name: capitalCadena('AMIRA COROMOTO'),
		lastName: capitalCadena('BELTRAN AGUILAR'),
		type: 'regular',
		email: 'abeltran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13234,
		nationality: 'V'.toUpperCase(),
		cedula: 10519862,
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
		userName: 'antrodriguez'.toLowerCase(),
		name: capitalCadena('ANTONIO JOSE'),
		lastName: capitalCadena('RODRIGUEZ GRATEROL'),
		type: 'regular',
		email: 'antrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13187,
		nationality: 'V'.toUpperCase(),
		cedula: 21364243,
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
		userName: 'davila'.toLowerCase(),
		name: capitalCadena('DAYSI '),
		lastName: capitalCadena('AVILA DIAZ'),
		type: 'regular',
		email: 'davila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13858,
		nationality: 'V'.toUpperCase(),
		cedula: 6311644,
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
		userName: 'ccampos'.toLowerCase(),
		name: capitalCadena('CARMEN DAYANIRA'),
		lastName: capitalCadena('CAMPOS MARTINEZ'),
		type: 'regular',
		email: 'ccampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13240,
		nationality: 'V'.toUpperCase(),
		cedula: 10094598,
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
		userName: 'fleon'.toLowerCase(),
		name: capitalCadena('FLOR SENAIS'),
		lastName: capitalCadena('LEON DE RODRIGUEZ'),
		type: 'regular',
		email: 'fleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13190,
		nationality: 'V'.toUpperCase(),
		cedula: 8155212,
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
		userName: 'mlandaeta'.toLowerCase(),
		name: capitalCadena('MAIGUALIDA TERESA'),
		lastName: capitalCadena('LANDAETA MOLINA'),
		type: 'regular',
		email: 'mlandaeta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13246,
		nationality: 'V'.toUpperCase(),
		cedula: 5452933,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfrenellin'.toLowerCase(),
		name: capitalCadena('JUANA YUDILMA'),
		lastName: capitalCadena('FRENELLIN DE BRACHO'),
		type: 'regular',
		email: 'jfrenellin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13250,
		nationality: 'V'.toUpperCase(),
		cedula: 7572437,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irmendoza'.toLowerCase(),
		name: capitalCadena('IRIAN MAGALY'),
		lastName: capitalCadena('MENDOZA LOPEZ'),
		type: 'regular',
		email: 'irmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13215,
		nationality: 'V'.toUpperCase(),
		cedula: 5648643,
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
		userName: 'yuromero'.toLowerCase(),
		name: capitalCadena('YUBIRY JOSEFINA'),
		lastName: capitalCadena('ROMERO ZERPA'),
		type: 'regular',
		email: 'yuromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13253,
		nationality: 'V'.toUpperCase(),
		cedula: 7968827,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emolina'.toLowerCase(),
		name: capitalCadena('ENEIDA RAQUEL'),
		lastName: capitalCadena('MOLINA DE AULAR'),
		type: 'regular',
		email: 'emolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13257,
		nationality: 'V'.toUpperCase(),
		cedula: 11767887,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'talonzo'.toLowerCase(),
		name: capitalCadena('TITO JESUS'),
		lastName: capitalCadena('ALONZO BAILON'),
		type: 'regular',
		email: 'talonzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13260,
		nationality: 'V'.toUpperCase(),
		cedula: 15821938,
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
		userName: 'ptineo'.toLowerCase(),
		name: capitalCadena('PEDRO JOSE'),
		lastName: capitalCadena('TINEO GONZALEZ'),
		type: 'regular',
		email: 'ptineo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13225,
		nationality: 'V'.toUpperCase(),
		cedula: 6528492,
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
		userName: 'laranguibel'.toLowerCase(),
		name: capitalCadena('LILA JOSEFINA'),
		lastName: capitalCadena('ARANGUIBEL DE GONZALEZ'),
		type: 'regular',
		email: 'laranguibel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13266,
		nationality: 'V'.toUpperCase(),
		cedula: 9779954,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gigonzalez'.toLowerCase(),
		name: capitalCadena('GILBERTO JOSE'),
		lastName: capitalCadena('GONZALEZ BALZAN'),
		type: 'regular',
		email: 'gigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13271,
		nationality: 'V'.toUpperCase(),
		cedula: 12805489,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdlucas'.toLowerCase(),
		name: capitalCadena('JOSEFINA '),
		lastName: capitalCadena('D LUCAS CABEZA'),
		type: 'regular',
		email: 'jdlucas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13236,
		nationality: 'V'.toUpperCase(),
		cedula: 8555924,
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
		userName: 'zbarrios'.toLowerCase(),
		name: capitalCadena('ZAILIS COROMOTO'),
		lastName: capitalCadena('BARRIOS MORALES'),
		type: 'regular',
		email: 'zbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13252,
		nationality: 'V'.toUpperCase(),
		cedula: 9705199,
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
		userName: 'sherrera'.toLowerCase(),
		name: capitalCadena('SERGIO ANTONIO'),
		lastName: capitalCadena('HERRERA BOTIA'),
		type: 'regular',
		email: 'sherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14164,
		nationality: 'V'.toUpperCase(),
		cedula: 24933215,
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
		userName: 'deromero'.toLowerCase(),
		name: capitalCadena('DERYS COROMOTO'),
		lastName: capitalCadena('ROMERO DE CHACIN'),
		type: 'regular',
		email: 'deromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13272,
		nationality: 'V'.toUpperCase(),
		cedula: 9793470,
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
		userName: 'elmarin'.toLowerCase(),
		name: capitalCadena('ELIDA GRICELIA'),
		lastName: capitalCadena('MARIN MARIN'),
		type: 'regular',
		email: 'elmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13305,
		nationality: 'V'.toUpperCase(),
		cedula: 7855169,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ealbornoz'.toLowerCase(),
		name: capitalCadena('ELIZABETH DEL CARMEN'),
		lastName: capitalCadena('ALBORNOZ ZABALA'),
		type: 'regular',
		email: 'ealbornoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13308,
		nationality: 'V'.toUpperCase(),
		cedula: 12831672,
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
		userName: 'adbriceno'.toLowerCase(),
		name: capitalCadena('ADRIANA LISSETTE'),
		lastName: capitalCadena('BRICEÑO DE GOMEZ'),
		type: 'regular',
		email: 'adbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13279,
		nationality: 'V'.toUpperCase(),
		cedula: 11767404,
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
		userName: 'lifernandez'.toLowerCase(),
		name: capitalCadena('LILIANA RAMONA'),
		lastName: capitalCadena('FERNANDEZ DE MORENO'),
		type: 'regular',
		email: 'lifernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13324,
		nationality: 'V'.toUpperCase(),
		cedula: 11286328,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfinol'.toLowerCase(),
		name: capitalCadena('LISSETT CHIQUINQUIRA'),
		lastName: capitalCadena('FINOL CASANOVA'),
		type: 'regular',
		email: 'lfinol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13282,
		nationality: 'V'.toUpperCase(),
		cedula: 12695901,
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
		userName: 'aparra'.toLowerCase(),
		name: capitalCadena('ABRAHAM DE JESUS'),
		lastName: capitalCadena('PARRA RINCON'),
		type: 'regular',
		email: 'aparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13283,
		nationality: 'V'.toUpperCase(),
		cedula: 9744286,
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
		userName: 'jocarmona'.toLowerCase(),
		name: capitalCadena('JOSE VICENTE'),
		lastName: capitalCadena('CARMONA COLMENARES'),
		type: 'regular',
		email: 'jocarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13335,
		nationality: 'V'.toUpperCase(),
		cedula: 6109145,
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
		userName: 'frsanchez'.toLowerCase(),
		name: capitalCadena('FRANK ANTONIO'),
		lastName: capitalCadena('SANCHEZ LUCENA'),
		type: 'regular',
		email: 'frsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13339,
		nationality: 'V'.toUpperCase(),
		cedula: 6525557,
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
		userName: 'mtrujillo'.toLowerCase(),
		name: capitalCadena('MIRLA CRISTINA'),
		lastName: capitalCadena('TRUJILLO FARIA'),
		type: 'regular',
		email: 'mtrujillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13346,
		nationality: 'V'.toUpperCase(),
		cedula: 12308038,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kkilson'.toLowerCase(),
		name: capitalCadena('KATIUZCA KARINA'),
		lastName: capitalCadena('KILSON GONZALEZ'),
		type: 'regular',
		email: 'kkilson@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13301,
		nationality: 'V'.toUpperCase(),
		cedula: 6747661,
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
		userName: 'nerivas'.toLowerCase(),
		name: capitalCadena('NESTOR JOSE'),
		lastName: capitalCadena('RIVAS PIRELA'),
		type: 'regular',
		email: 'nerivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13316,
		nationality: 'V'.toUpperCase(),
		cedula: 11283803,
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
		userName: 'megonzalez'.toLowerCase(),
		name: capitalCadena('MERIS NAYLE'),
		lastName: capitalCadena('GONZALEZ '),
		type: 'regular',
		email: 'megonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13329,
		nationality: 'V'.toUpperCase(),
		cedula: 7781151,
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
		userName: 'licastillo'.toLowerCase(),
		name: capitalCadena('LIVIA MARINA'),
		lastName: capitalCadena('CASTILLO MONTOYA'),
		type: 'regular',
		email: 'licastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13333,
		nationality: 'V'.toUpperCase(),
		cedula: 10352938,
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
		userName: 'trall'.toLowerCase(),
		name: capitalCadena('THANIA DE LA CONCEPCIÓN'),
		lastName: capitalCadena('RALL ZAMBRANO'),
		type: 'regular',
		email: 'trall@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13357,
		nationality: 'V'.toUpperCase(),
		cedula: 11927019,
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
		userName: 'prondon'.toLowerCase(),
		name: capitalCadena('PEDRO JOSE'),
		lastName: capitalCadena('RONDON GARCIA'),
		type: 'regular',
		email: 'prondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13349,
		nationality: 'V'.toUpperCase(),
		cedula: 7857197,
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
		userName: 'monrodriguez'.toLowerCase(),
		name: capitalCadena('MONICA MARIA'),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'),
		type: 'regular',
		email: 'monrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13350,
		nationality: 'V'.toUpperCase(),
		cedula: 13141043,
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
		userName: 'aanez'.toLowerCase(),
		name: capitalCadena('ASDRUBAL DE JESUS'),
		lastName: capitalCadena('AÑEZ FEREIRA'),
		type: 'regular',
		email: 'aanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13351,
		nationality: 'V'.toUpperCase(),
		cedula: 7897875,
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
		userName: 'mipalacios'.toLowerCase(),
		name: capitalCadena('MIGUEL JOSE'),
		lastName: capitalCadena('PALACIOS RIVAS'),
		type: 'regular',
		email: 'mipalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13352,
		nationality: 'V'.toUpperCase(),
		cedula: 9902275,
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
		userName: 'ibravo'.toLowerCase(),
		name: capitalCadena('INDIRA HELEN'),
		lastName: capitalCadena('BRAVO BRAVO'),
		type: 'regular',
		email: 'ibravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13360,
		nationality: 'V'.toUpperCase(),
		cedula: 12443075,
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
		userName: 'emendoza'.toLowerCase(),
		name: capitalCadena('EDGAR ALFONSO'),
		lastName: capitalCadena('MENDOZA ESCALANTE'),
		type: 'regular',
		email: 'emendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13365,
		nationality: 'V'.toUpperCase(),
		cedula: 9210258,
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
		userName: 'acoronel'.toLowerCase(),
		name: capitalCadena('ANA LEONOR'),
		lastName: capitalCadena('CORONEL CONDE'),
		type: 'regular',
		email: 'acoronel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13370,
		nationality: 'V'.toUpperCase(),
		cedula: 7571666,
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
		userName: 'ljaramillo'.toLowerCase(),
		name: capitalCadena('LUIS MANUEL'),
		lastName: capitalCadena('JARAMILLO '),
		type: 'regular',
		email: 'ljaramillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13387,
		nationality: 'V'.toUpperCase(),
		cedula: 12562899,
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
		userName: 'scadenas'.toLowerCase(),
		name: capitalCadena('SUYIN OCARINA'),
		lastName: capitalCadena('CADENAS DE PERCHE'),
		type: 'regular',
		email: 'scadenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13390,
		nationality: 'V'.toUpperCase(),
		cedula: 12444859,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msantana'.toLowerCase(),
		name: capitalCadena('MARIELA DEL CARMEN'),
		lastName: capitalCadena('SANTANA DE RINCON'),
		type: 'regular',
		email: 'msantana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13377,
		nationality: 'V'.toUpperCase(),
		cedula: 9718053,
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
		userName: 'nflores'.toLowerCase(),
		name: capitalCadena('NORILIS MILAGROS'),
		lastName: capitalCadena('FLORES MANRIQUE'),
		type: 'regular',
		email: 'nflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13399,
		nationality: 'V'.toUpperCase(),
		cedula: 10515103,
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
		userName: 'ysalas'.toLowerCase(),
		name: capitalCadena('YENITZ RAMONA'),
		lastName: capitalCadena('SALAS DE FIGUEREDO'),
		type: 'regular',
		email: 'ysalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13414,
		nationality: 'V'.toUpperCase(),
		cedula: 9171363,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mquevedo'.toLowerCase(),
		name: capitalCadena('MAGDIEL MIGUEL'),
		lastName: capitalCadena('QUEVEDO '),
		type: 'regular',
		email: 'mquevedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13379,
		nationality: 'V'.toUpperCase(),
		cedula: 13283555,
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
		userName: 'yoliveros'.toLowerCase(),
		name: capitalCadena('YAJAIRA DEL CARMEN'),
		lastName: capitalCadena('OLIVEROS CALDERA'),
		type: 'regular',
		email: 'yoliveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13384,
		nationality: 'V'.toUpperCase(),
		cedula: 13209221,
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
		userName: 'dgalindez'.toLowerCase(),
		name: capitalCadena('DINORATH MERCEDES'),
		lastName: capitalCadena('GALINDEZ '),
		type: 'regular',
		email: 'dgalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13433,
		nationality: 'V'.toUpperCase(),
		cedula: 4850006,
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
		userName: 'lgascon'.toLowerCase(),
		name: capitalCadena('LISSIT DEL MAR'),
		lastName: capitalCadena('GASCON LOPEZ'),
		type: 'regular',
		email: 'lgascon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13445,
		nationality: 'V'.toUpperCase(),
		cedula: 6670839,
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
		userName: 'alrivera'.toLowerCase(),
		name: capitalCadena('ALBA ELANY'),
		lastName: capitalCadena('RIVERA URDANETA'),
		type: 'regular',
		email: 'alrivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13394,
		nationality: 'V'.toUpperCase(),
		cedula: 9792001,
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
		userName: 'aqrodriguez'.toLowerCase(),
		name: capitalCadena('AQUILINA MARGARITA'),
		lastName: capitalCadena('RODRIGUEZ ROJAS'),
		type: 'regular',
		email: 'aqrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13449,
		nationality: 'V'.toUpperCase(),
		cedula: 7573740,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoron'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('MORON MORAN'),
		type: 'regular',
		email: 'jmoron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13406,
		nationality: 'V'.toUpperCase(),
		cedula: 7976163,
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
		userName: 'mgodoy'.toLowerCase(),
		name: capitalCadena('MIRIAM DEL CARMEN'),
		lastName: capitalCadena('GODOY '),
		type: 'regular',
		email: 'mgodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13416,
		nationality: 'V'.toUpperCase(),
		cedula: 12796000,
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
		userName: 'amavarez'.toLowerCase(),
		name: capitalCadena('ABDIEL DAVIS'),
		lastName: capitalCadena('MAVARES OLLARVES'),
		type: 'regular',
		email: 'amavarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13431,
		nationality: 'V'.toUpperCase(),
		cedula: 14234302,
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
		userName: 'lvalera'.toLowerCase(),
		name: capitalCadena('LANDY ALEXANDER'),
		lastName: capitalCadena('VALERA LEON'),
		type: 'regular',
		email: 'lvalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13446,
		nationality: 'V'.toUpperCase(),
		cedula: 12440848,
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
		userName: 'otorres'.toLowerCase(),
		name: capitalCadena('OSMAN DARIO'),
		lastName: capitalCadena('TORRES MUÑOZ'),
		type: 'regular',
		email: 'otorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13453,
		nationality: 'V'.toUpperCase(),
		cedula: 7639256,
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
		userName: 'amarin'.toLowerCase(),
		name: capitalCadena('ADRIAN ANTONIO'),
		lastName: capitalCadena('MARIN GONZALEZ'),
		type: 'regular',
		email: 'amarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13455,
		nationality: 'V'.toUpperCase(),
		cedula: 10879106,
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
		userName: 'echiquinquira'.toLowerCase(),
		name: capitalCadena('ELISABETH CHIQUINQUIRA'),
		lastName: capitalCadena('GONZALEZ '),
		type: 'regular',
		email: 'echiquinquira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13456,
		nationality: 'V'.toUpperCase(),
		cedula: 9727712,
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
		userName: 'rantunez'.toLowerCase(),
		name: capitalCadena('ROSELIN DEL VALLE'),
		lastName: capitalCadena('ANTUNEZ ANDARA'),
		type: 'regular',
		email: 'rantunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13461,
		nationality: 'V'.toUpperCase(),
		cedula: 14415412,
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
		userName: 'bmerchan'.toLowerCase(),
		name: capitalCadena('BEISY COROMOTO'),
		lastName: capitalCadena('MERCHAN VARGAS'),
		type: 'regular',
		email: 'bmerchan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13487,
		nationality: 'V'.toUpperCase(),
		cedula: 9332008,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maestrada'.toLowerCase(),
		name: capitalCadena('MARJORIE CHIQUINQUIR'),
		lastName: capitalCadena('ESTRADA BASALO'),
		type: 'regular',
		email: 'maestrada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13491,
		nationality: 'V'.toUpperCase(),
		cedula: 16302024,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cportillo'.toLowerCase(),
		name: capitalCadena('CLARET ANTONIA'),
		lastName: capitalCadena('PORTILLO RUIZ'),
		type: 'regular',
		email: 'cportillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13492,
		nationality: 'V'.toUpperCase(),
		cedula: 8699519,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rurodriguez'.toLowerCase(),
		name: capitalCadena('RUBEN JOSE'),
		lastName: capitalCadena('RODRIGUEZ ANTELIS'),
		type: 'regular',
		email: 'rurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13494,
		nationality: 'V'.toUpperCase(),
		cedula: 11049126,
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
		userName: 'maricastillo'.toLowerCase(),
		name: capitalCadena('MARIA EUGENIA'),
		lastName: capitalCadena('CASTILLO ZERPA'),
		type: 'regular',
		email: 'maricastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13508,
		nationality: 'V'.toUpperCase(),
		cedula: 11458186,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nomedina'.toLowerCase(),
		name: capitalCadena('NORMA MARGARITA'),
		lastName: capitalCadena('MEDINA MARQUEZ'),
		type: 'regular',
		email: 'nomedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13513,
		nationality: 'V'.toUpperCase(),
		cedula: 8700226,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angtorres'.toLowerCase(),
		name: capitalCadena('ANGELICA MARIANA'),
		lastName: capitalCadena('TORRES REALZA'),
		type: 'regular',
		email: 'angtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13515,
		nationality: 'V'.toUpperCase(),
		cedula: 14578488,
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
		userName: 'equintero'.toLowerCase(),
		name: capitalCadena('ELIAZAR ENRIQUE'),
		lastName: capitalCadena('QUINTERO HERRERA'),
		type: 'regular',
		email: 'equintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13467,
		nationality: 'V'.toUpperCase(),
		cedula: 6803354,
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
		userName: 'ycadenas'.toLowerCase(),
		name: capitalCadena('YUSMERY ANGELICA'),
		lastName: capitalCadena('CADENAS ANGULO'),
		type: 'regular',
		email: 'ycadenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13469,
		nationality: 'V'.toUpperCase(),
		cedula: 9953293,
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
		userName: 'jcastellanos'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('CASTELLANOS LINARES'),
		type: 'regular',
		email: 'jcastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13523,
		nationality: 'V'.toUpperCase(),
		cedula: 12905039,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaperozo'.toLowerCase(),
		name: capitalCadena('YANIRETH ANTONIA'),
		lastName: capitalCadena('PEROZO GONZALEZ'),
		type: 'regular',
		email: 'yaperozo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13528,
		nationality: 'V'.toUpperCase(),
		cedula: 6885670,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fromero'.toLowerCase(),
		name: capitalCadena('FRANCISCO JAVIER'),
		lastName: capitalCadena('ROMERO TREJO'),
		type: 'regular',
		email: 'fromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13472,
		nationality: 'V'.toUpperCase(),
		cedula: 9517115,
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
		userName: 'lvillamizar'.toLowerCase(),
		name: capitalCadena('LILIBETH ANDREINA'),
		lastName: capitalCadena('VILLAMIZAR RAMIREZ'),
		type: 'regular',
		email: 'lvillamizar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13538,
		nationality: 'V'.toUpperCase(),
		cedula: 15163192,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmoya'.toLowerCase(),
		name: capitalCadena('RAMERCY MARIA'),
		lastName: capitalCadena('MOYA CASTRO'),
		type: 'regular',
		email: 'rmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13564,
		nationality: 'V'.toUpperCase(),
		cedula: 12842073,
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
		userName: 'mjimenez'.toLowerCase(),
		name: capitalCadena('MARISOL DEL VALLE'),
		lastName: capitalCadena('JIMENEZ LEON'),
		type: 'regular',
		email: 'mjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13522,
		nationality: 'V'.toUpperCase(),
		cedula: 9849630,
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
		userName: 'caromartinez'.toLowerCase(),
		name: capitalCadena('CAROLINA BEATRIZ'),
		lastName: capitalCadena('MARTINEZ COLINA'),
		type: 'regular',
		email: 'caromartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13537,
		nationality: 'V'.toUpperCase(),
		cedula: 7825530,
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
		userName: 'anfernandez'.toLowerCase(),
		name: capitalCadena('ANILA JOSEFINA'),
		lastName: capitalCadena('FERNANDEZ DE HERNANDEZ'),
		type: 'regular',
		email: 'anfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13545,
		nationality: 'V'.toUpperCase(),
		cedula: 17416614,
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
		userName: 'makhras'.toLowerCase(),
		name: capitalCadena('MAHIRNA JOSEFINA'),
		lastName: capitalCadena('AKHRAS GOMEZ'),
		type: 'regular',
		email: 'makhras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13553,
		nationality: 'V'.toUpperCase(),
		cedula: 13163753,
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
		userName: 'danigonzalez'.toLowerCase(),
		name: capitalCadena('DANIEL ALFREDO'),
		lastName: capitalCadena('GONZALEZ ATENCIO'),
		type: 'regular',
		email: 'danigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13597,
		nationality: 'V'.toUpperCase(),
		cedula: 6472889,
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
		userName: 'htoro'.toLowerCase(),
		name: capitalCadena('HENRY ANTONIO'),
		lastName: capitalCadena('TORO MOLINA'),
		type: 'regular',
		email: 'htoro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13572,
		nationality: 'V'.toUpperCase(),
		cedula: 9753234,
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
		userName: 'zarteaga'.toLowerCase(),
		name: capitalCadena('ZOREGLYS JOSEFINA'),
		lastName: capitalCadena('ARTEAGA CARPERO'),
		type: 'regular',
		email: 'zarteaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13582,
		nationality: 'V'.toUpperCase(),
		cedula: 10935200,
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
		userName: 'oaray'.toLowerCase(),
		name: capitalCadena('OSMERY JOSEFINA'),
		lastName: capitalCadena('ARAY BADUEL'),
		type: 'regular',
		email: 'oaray@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13609,
		nationality: 'V'.toUpperCase(),
		cedula: 8293060,
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
		userName: 'alrodriguez'.toLowerCase(),
		name: capitalCadena('ALIZBETH DEL VALLE'),
		lastName: capitalCadena('RODRIGUEZ DAVIS'),
		type: 'regular',
		email: 'alrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13588,
		nationality: 'V'.toUpperCase(),
		cedula: 15282838,
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
		userName: 'kafernandez'.toLowerCase(),
		name: capitalCadena('KATTY JOSEFINA'),
		lastName: capitalCadena('FERNANDEZ CALDERA'),
		type: 'regular',
		email: 'kafernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13612,
		nationality: 'V'.toUpperCase(),
		cedula: 16276652,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ddiaz'.toLowerCase(),
		name: capitalCadena('DANIELA CAROLINA'),
		lastName: capitalCadena('DIAZ ALVARADO'),
		type: 'regular',
		email: 'ddiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13615,
		nationality: 'V'.toUpperCase(),
		cedula: 17416889,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joramirez'.toLowerCase(),
		name: capitalCadena('JOSE RAFAEL'),
		lastName: capitalCadena('RAMIREZ CANO'),
		type: 'regular',
		email: 'joramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13616,
		nationality: 'V'.toUpperCase(),
		cedula: 6245397,
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
		userName: 'adegarcia'.toLowerCase(),
		name: capitalCadena('ADELMO ALFONSO'),
		lastName: capitalCadena('GARCIA '),
		type: 'regular',
		email: 'adegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13620,
		nationality: 'V'.toUpperCase(),
		cedula: 5308387,
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
		userName: 'clira'.toLowerCase(),
		name: capitalCadena('CARLOS CELEDONIO'),
		lastName: capitalCadena('LIRA RIVAS'),
		type: 'regular',
		email: 'clira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13621,
		nationality: 'V'.toUpperCase(),
		cedula: 6173322,
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
		userName: 'jalana'.toLowerCase(),
		name: capitalCadena('JOVANNA COROMOTO'),
		lastName: capitalCadena('ALAÑA MORILLO'),
		type: 'regular',
		email: 'jalana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13599,
		nationality: 'V'.toUpperCase(),
		cedula: 12843925,
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
		userName: 'aochoa'.toLowerCase(),
		name: capitalCadena('ANN MARY'),
		lastName: capitalCadena('OCHOA OCHOA'),
		type: 'regular',
		email: 'aochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13626,
		nationality: 'V'.toUpperCase(),
		cedula: 15260790,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aqgarcia'.toLowerCase(),
		name: capitalCadena('AQUILES RAFAEL'),
		lastName: capitalCadena('GARCIA BERROTERAN'),
		type: 'regular',
		email: 'aqgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13627,
		nationality: 'V'.toUpperCase(),
		cedula: 6826479,
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
		userName: 'dvillalobos'.toLowerCase(),
		name: capitalCadena('DAMARYS ROSA'),
		lastName: capitalCadena('VILLALOBOS FIGUEREDO'),
		type: 'regular',
		email: 'dvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13631,
		nationality: 'V'.toUpperCase(),
		cedula: 16118791,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kecarrillo'.toLowerCase(),
		name: capitalCadena('KEYLA DEL CARMEN'),
		lastName: capitalCadena('CARRILLO DE MORALES'),
		type: 'regular',
		email: 'kecarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13600,
		nationality: 'V'.toUpperCase(),
		cedula: 13372558,
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
		userName: 'mmejias'.toLowerCase(),
		name: capitalCadena('MARIA PETRA'),
		lastName: capitalCadena('MEJIAS DE BASTIDAS'),
		type: 'regular',
		email: 'mmejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13636,
		nationality: 'V'.toUpperCase(),
		cedula: 14834899,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aoropeza'.toLowerCase(),
		name: capitalCadena('ANIXA ROSARIO'),
		lastName: capitalCadena('OROPEZA PORTE'),
		type: 'regular',
		email: 'aoropeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13637,
		nationality: 'V'.toUpperCase(),
		cedula: 15480646,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alabarca'.toLowerCase(),
		name: capitalCadena('ALEIDA COROMOTO'),
		lastName: capitalCadena('LABARCA ACUÑA'),
		type: 'regular',
		email: 'alabarca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13640,
		nationality: 'V'.toUpperCase(),
		cedula: 9751098,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adviazzo'.toLowerCase(),
		name: capitalCadena('ALICIA MARGARITA'),
		lastName: capitalCadena('D VIAZZO FERNÁNDEZ'),
		type: 'regular',
		email: 'adviazzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13646,
		nationality: 'V'.toUpperCase(),
		cedula: 8637842,
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
		userName: 'aestanga'.toLowerCase(),
		name: capitalCadena('ANA DE JESUS'),
		lastName: capitalCadena('ESTANGA '),
		type: 'regular',
		email: 'aestanga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13647,
		nationality: 'V'.toUpperCase(),
		cedula: 10839460,
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
		userName: 'yudiaz'.toLowerCase(),
		name: capitalCadena('YUMAIRA YULIMAR'),
		lastName: capitalCadena('DIAZ BRACHO'),
		type: 'regular',
		email: 'yudiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13622,
		nationality: 'V'.toUpperCase(),
		cedula: 13297962,
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
		userName: 'momana'.toLowerCase(),
		name: capitalCadena('MONAMY ALEJANDRA'),
		lastName: capitalCadena('OMAÑA SIMANCAS'),
		type: 'regular',
		email: 'momana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13633,
		nationality: 'V'.toUpperCase(),
		cedula: 14356855,
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
		userName: 'kasanchez'.toLowerCase(),
		name: capitalCadena('KARELYS ANDREINA'),
		lastName: capitalCadena('SANCHEZ ROMAN'),
		type: 'regular',
		email: 'kasanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13664,
		nationality: 'V'.toUpperCase(),
		cedula: 14646833,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ogarcia'.toLowerCase(),
		name: capitalCadena('OSIRIS COROMOTO'),
		lastName: capitalCadena('GARCIA MEDINA'),
		type: 'regular',
		email: 'ogarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13641,
		nationality: 'V'.toUpperCase(),
		cedula: 11768265,
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
		userName: 'sosanchez'.toLowerCase(),
		name: capitalCadena('SORLEY PATRICIA'),
		lastName: capitalCadena('SANCHEZ BERMUDEZ'),
		type: 'regular',
		email: 'sosanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13680,
		nationality: 'V'.toUpperCase(),
		cedula: 13705821,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maigonzalez'.toLowerCase(),
		name: capitalCadena('MAIRITH DEL CARMEN'),
		lastName: capitalCadena('GONZALEZ GARCIA'),
		type: 'regular',
		email: 'maigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13681,
		nationality: 'V'.toUpperCase(),
		cedula: 12406790,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmartinez'.toLowerCase(),
		name: capitalCadena('ROSANGELA '),
		lastName: capitalCadena('MARTINEZ AGUILAR'),
		type: 'regular',
		email: 'rmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13684,
		nationality: 'V'.toUpperCase(),
		cedula: 13934744,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hvalladares'.toLowerCase(),
		name: capitalCadena('HILXIS ALEXANDRA'),
		lastName: capitalCadena('VALLADARES TORRES'),
		type: 'regular',
		email: 'hvalladares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13643,
		nationality: 'V'.toUpperCase(),
		cedula: 17829033,
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
		userName: 'lrubio'.toLowerCase(),
		name: capitalCadena('LORENA JOSEFINA'),
		lastName: capitalCadena('RUBIO SOTO'),
		type: 'regular',
		email: 'lrubio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13694,
		nationality: 'V'.toUpperCase(),
		cedula: 9782087,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ltirado'.toLowerCase(),
		name: capitalCadena('LEANDRO AUGUSTO'),
		lastName: capitalCadena('TIRADO VARGAS'),
		type: 'regular',
		email: 'ltirado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13706,
		nationality: 'V'.toUpperCase(),
		cedula: 17281770,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgarcia'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('GARCIA RUIZ'),
		type: 'regular',
		email: 'cgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13661,
		nationality: 'V'.toUpperCase(),
		cedula: 12905026,
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
		userName: 'yvillasmil'.toLowerCase(),
		name: capitalCadena('YOLEYDA MARGARITA'),
		lastName: capitalCadena('VILLASMIL SANCHEZ'),
		type: 'regular',
		email: 'yvillasmil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13711,
		nationality: 'V'.toUpperCase(),
		cedula: 17437028,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'candarcia'.toLowerCase(),
		name: capitalCadena('CARMEN ASUNCION'),
		lastName: capitalCadena('ANDARCIA DE BRAZON'),
		type: 'regular',
		email: 'candarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13713,
		nationality: 'V'.toUpperCase(),
		cedula: 8462577,
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
		userName: 'jpoleo'.toLowerCase(),
		name: capitalCadena('JESUS ENRIQUE'),
		lastName: capitalCadena('POLEO PEÑA'),
		type: 'regular',
		email: 'jpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13716,
		nationality: 'V'.toUpperCase(),
		cedula: 14140923,
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
		userName: 'apuente'.toLowerCase(),
		name: capitalCadena('ALVI JAVIER'),
		lastName: capitalCadena('PUENTE AULAR'),
		type: 'regular',
		email: 'apuente@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13717,
		nationality: 'V'.toUpperCase(),
		cedula: 13662299,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ilozano'.toLowerCase(),
		name: capitalCadena('ISAEL '),
		lastName: capitalCadena('LOZANO MENDOZA'),
		type: 'regular',
		email: 'ilozano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13720,
		nationality: 'V'.toUpperCase(),
		cedula: 10538683,
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
		userName: 'mescalante'.toLowerCase(),
		name: capitalCadena('MAIRLIM ESPERANZA'),
		lastName: capitalCadena('ESCALANTE RUIZ'),
		type: 'regular',
		email: 'mescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13724,
		nationality: 'V'.toUpperCase(),
		cedula: 16281209,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaguilar'.toLowerCase(),
		name: capitalCadena('YOSMARY JACKELINE'),
		lastName: capitalCadena('AGUILAR VILORIA'),
		type: 'regular',
		email: 'yaguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13726,
		nationality: 'V'.toUpperCase(),
		cedula: 12540809,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anpuente'.toLowerCase(),
		name: capitalCadena('ANGIEE COROMOTO'),
		lastName: capitalCadena('PUENTE MEDINA'),
		type: 'regular',
		email: 'anpuente@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13668,
		nationality: 'V'.toUpperCase(),
		cedula: 15017097,
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
		userName: 'galbarran'.toLowerCase(),
		name: capitalCadena('GIORGINA MARGARITA'),
		lastName: capitalCadena('ALBARRAN ROJO'),
		type: 'regular',
		email: 'galbarran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13740,
		nationality: 'V'.toUpperCase(),
		cedula: 13897525,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsanchez'.toLowerCase(),
		name: capitalCadena('DAVID ALEJANDRO'),
		lastName: capitalCadena('SANCHEZ '),
		type: 'regular',
		email: 'dsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13691,
		nationality: 'V'.toUpperCase(),
		cedula: 15386835,
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
		userName: 'hguignan'.toLowerCase(),
		name: capitalCadena('HERNAN JOSE'),
		lastName: capitalCadena('GUIGÑAN AULAR'),
		type: 'regular',
		email: 'hguignan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13702,
		nationality: 'V'.toUpperCase(),
		cedula: 9507296,
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
		userName: 'framos'.toLowerCase(),
		name: capitalCadena('FELIPE ANTONIO'),
		lastName: capitalCadena('RAMOS LAGUNA'),
		type: 'regular',
		email: 'framos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13710,
		nationality: 'V'.toUpperCase(),
		cedula: 16327129,
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
		userName: 'rcontreras'.toLowerCase(),
		name: capitalCadena('ROSALVA MARIA'),
		lastName: capitalCadena('CONTRERAS ALVAREZ'),
		type: 'regular',
		email: 'rcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13730,
		nationality: 'V'.toUpperCase(),
		cedula: 6832683,
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
		userName: 'oarredondo'.toLowerCase(),
		name: capitalCadena('ORLANDO JAVIER'),
		lastName: capitalCadena('ARREDONDO VELAZCO'),
		type: 'regular',
		email: 'oarredondo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13752,
		nationality: 'V'.toUpperCase(),
		cedula: 11363516,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lportillo'.toLowerCase(),
		name: capitalCadena('LIZBELY YOAMA'),
		lastName: capitalCadena('PORTILLO LUZARDO'),
		type: 'regular',
		email: 'lportillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13745,
		nationality: 'V'.toUpperCase(),
		cedula: 14117881,
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
		userName: 'jsaez'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('SAEZ SAEZ'),
		type: 'regular',
		email: 'jsaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13767,
		nationality: 'V'.toUpperCase(),
		cedula: 5973322,
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
		userName: 'jloaiza'.toLowerCase(),
		name: capitalCadena('JOSE LOS SANTOS'),
		lastName: capitalCadena('LOAIZA '),
		type: 'regular',
		email: 'jloaiza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13747,
		nationality: 'V'.toUpperCase(),
		cedula: 7900567,
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
		userName: 'mruiz'.toLowerCase(),
		name: capitalCadena('MARIA ISABEL'),
		lastName: capitalCadena('RUIZ VILLEGAS'),
		type: 'regular',
		email: 'mruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13774,
		nationality: 'V'.toUpperCase(),
		cedula: 12043329,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmendoza'.toLowerCase(),
		name: capitalCadena('JEAN MANUEL'),
		lastName: capitalCadena('MENDOZA VILLAREAL'),
		type: 'regular',
		email: 'jmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13782,
		nationality: 'V'.toUpperCase(),
		cedula: 14983725,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jecaraballo'.toLowerCase(),
		name: capitalCadena('JENNIFER LISETH'),
		lastName: capitalCadena('CARABALLO VILLEGAS'),
		type: 'regular',
		email: 'jecaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13783,
		nationality: 'V'.toUpperCase(),
		cedula: 12383216,
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
		userName: 'dpalmar'.toLowerCase(),
		name: capitalCadena('DEYANIRA DEL VALLE'),
		lastName: capitalCadena('PALMAR CHACIN'),
		type: 'regular',
		email: 'dpalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13749,
		nationality: 'V'.toUpperCase(),
		cedula: 14005705,
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
		userName: 'xreyes'.toLowerCase(),
		name: capitalCadena('XIOGIS YUBILLY'),
		lastName: capitalCadena('REYES SANCHEZ'),
		type: 'regular',
		email: 'xreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13750,
		nationality: 'V'.toUpperCase(),
		cedula: 14458233,
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
		userName: 'jbazan'.toLowerCase(),
		name: capitalCadena('JOHANNA MILAGROS'),
		lastName: capitalCadena('BAZAN LUGO'),
		type: 'regular',
		email: 'jbazan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13753,
		nationality: 'V'.toUpperCase(),
		cedula: 14647362,
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
		userName: 'yrsanchez'.toLowerCase(),
		name: capitalCadena('YRVIS ATERINA'),
		lastName: capitalCadena('SANCHEZ BRAVO'),
		type: 'regular',
		email: 'yrsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13772,
		nationality: 'V'.toUpperCase(),
		cedula: 7963523,
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
		userName: 'avielma'.toLowerCase(),
		name: capitalCadena('ARLENIS YOSELIN'),
		lastName: capitalCadena('VIELMA FRANCO'),
		type: 'regular',
		email: 'avielma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13800,
		nationality: 'V'.toUpperCase(),
		cedula: 17605017,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daromero'.toLowerCase(),
		name: capitalCadena('DALIMAR DEL VALLE'),
		lastName: capitalCadena('ROMERO AGUILAR'),
		type: 'regular',
		email: 'daromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13804,
		nationality: 'V'.toUpperCase(),
		cedula: 16186664,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmadriz'.toLowerCase(),
		name: capitalCadena('MARIALBY CAROLINA'),
		lastName: capitalCadena('MADRIZ SEMECO'),
		type: 'regular',
		email: 'mmadriz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13785,
		nationality: 'V'.toUpperCase(),
		cedula: 15017765,
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
		userName: 'yobando'.toLowerCase(),
		name: capitalCadena('YOLIANNYS MARIA'),
		lastName: capitalCadena('OBANDO MORENO'),
		type: 'regular',
		email: 'yobando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13788,
		nationality: 'V'.toUpperCase(),
		cedula: 16064223,
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
		userName: 'ezea'.toLowerCase(),
		name: capitalCadena('ESTHER JOSEFINA'),
		lastName: capitalCadena('ZEA ZEA'),
		type: 'regular',
		email: 'ezea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13790,
		nationality: 'V'.toUpperCase(),
		cedula: 10973465,
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
		userName: 'nreyes'.toLowerCase(),
		name: capitalCadena('NAILY COROMOTO'),
		lastName: capitalCadena('REYES LEAL'),
		type: 'regular',
		email: 'nreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13845,
		nationality: 'V'.toUpperCase(),
		cedula: 14397077,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mparra'.toLowerCase(),
		name: capitalCadena('MILENNIS KARLEY'),
		lastName: capitalCadena('PARRA MARTINEZ'),
		type: 'regular',
		email: 'mparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13862,
		nationality: 'V'.toUpperCase(),
		cedula: 13661322,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymarcano'.toLowerCase(),
		name: capitalCadena('YAIPED CAROLINA'),
		lastName: capitalCadena('MARCANO GONZALEZ'),
		type: 'regular',
		email: 'ymarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13792,
		nationality: 'V'.toUpperCase(),
		cedula: 18831230,
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
		userName: 'ncaridad'.toLowerCase(),
		name: capitalCadena('NELSY MARCELINA'),
		lastName: capitalCadena('CARIDAD CARDENAS'),
		type: 'regular',
		email: 'ncaridad@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13864,
		nationality: 'V'.toUpperCase(),
		cedula: 11886250,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcarrizo'.toLowerCase(),
		name: capitalCadena('DOUGLAS ALBERTO'),
		lastName: capitalCadena('CARRIZO LOAIZA'),
		type: 'regular',
		email: 'dcarrizo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13866,
		nationality: 'V'.toUpperCase(),
		cedula: 18217283,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avillasmil'.toLowerCase(),
		name: capitalCadena('ANA MARIA'),
		lastName: capitalCadena('VILLASMIL OBERTO'),
		type: 'regular',
		email: 'avillasmil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13867,
		nationality: 'V'.toUpperCase(),
		cedula: 18574600,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gbaena'.toLowerCase(),
		name: capitalCadena('GENIS MARIA'),
		lastName: capitalCadena('BAENA CASTRO'),
		type: 'regular',
		email: 'gbaena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13806,
		nationality: 'V'.toUpperCase(),
		cedula: 14718266,
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
		userName: 'chcarrillo'.toLowerCase(),
		name: capitalCadena('CHRISTIAN JOSE'),
		lastName: capitalCadena('CARRILLO SOJO'),
		type: 'regular',
		email: 'chcarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13834,
		nationality: 'V'.toUpperCase(),
		cedula: 17701567,
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
		userName: 'jovalles'.toLowerCase(),
		name: capitalCadena('JORIANNY JOSEFINA'),
		lastName: capitalCadena('VALLES PARRA'),
		type: 'regular',
		email: 'jovalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13844,
		nationality: 'V'.toUpperCase(),
		cedula: 12862402,
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
		userName: 'gvillalobo'.toLowerCase(),
		name: capitalCadena('GLENDYS YASMELI'),
		lastName: capitalCadena('VILLALOBOS FERNANDEZ'),
		type: 'regular',
		email: 'gvillalobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13863,
		nationality: 'V'.toUpperCase(),
		cedula: 12445815,
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
		userName: 'rcorrea'.toLowerCase(),
		name: capitalCadena('RICARDO JOSE'),
		lastName: capitalCadena('CORREA ATENCIA'),
		type: 'regular',
		email: 'rcorrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13893,
		nationality: 'V'.toUpperCase(),
		cedula: 18522858,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesvivas'.toLowerCase(),
		name: capitalCadena('JESUS ALIPIO'),
		lastName: capitalCadena('VIVAS QUINTERO'),
		type: 'regular',
		email: 'jesvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13900,
		nationality: 'V'.toUpperCase(),
		cedula: 6968522,
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
		userName: 'tmarquez'.toLowerCase(),
		name: capitalCadena('TEGLIS JOSEFINA'),
		lastName: capitalCadena('MARQUEZ DUQUE'),
		type: 'regular',
		email: 'tmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13902,
		nationality: 'V'.toUpperCase(),
		cedula: 9977639,
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
		userName: 'gumendez'.toLowerCase(),
		name: capitalCadena('GUSTAVO JOSE'),
		lastName: capitalCadena('MENDEZ REVEROL'),
		type: 'regular',
		email: 'gumendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13874,
		nationality: 'V'.toUpperCase(),
		cedula: 11694062,
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
		userName: 'lduran'.toLowerCase(),
		name: capitalCadena('LUIS MANUEL'),
		lastName: capitalCadena('DURAN SOTO'),
		type: 'regular',
		email: 'lduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13920,
		nationality: 'V'.toUpperCase(),
		cedula: 11614418,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dconde'.toLowerCase(),
		name: capitalCadena('DAYANA JOSEFINA'),
		lastName: capitalCadena('CONDE RAMIREZ'),
		type: 'regular',
		email: 'dconde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13878,
		nationality: 'V'.toUpperCase(),
		cedula: 13402549,
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
		userName: 'errojas'.toLowerCase(),
		name: capitalCadena('ERWIN IVAN'),
		lastName: capitalCadena('ROJAS ALBARRACIN'),
		type: 'regular',
		email: 'errojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13926,
		nationality: 'V'.toUpperCase(),
		cedula: 17395654,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gperez'.toLowerCase(),
		name: capitalCadena('GENESIS MARIAN'),
		lastName: capitalCadena('DE JESUS PEREZ'),
		type: 'regular',
		email: 'gperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13927,
		nationality: 'V'.toUpperCase(),
		cedula: 19156860,
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
		userName: 'yrincon'.toLowerCase(),
		name: capitalCadena('YONATHAN JESUS'),
		lastName: capitalCadena('RINCON CONTRERAS'),
		type: 'regular',
		email: 'yrincon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13881,
		nationality: 'V'.toUpperCase(),
		cedula: 16458301,
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
		userName: 'ygomez'.toLowerCase(),
		name: capitalCadena('YUREIDYS YUSMYS'),
		lastName: capitalCadena('GOMEZ '),
		type: 'regular',
		email: 'ygomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13930,
		nationality: 'V'.toUpperCase(),
		cedula: 18153491,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malvarado'.toLowerCase(),
		name: capitalCadena('MAYERLIN HASGLENDYS'),
		lastName: capitalCadena('ALVARADO CHACIN'),
		type: 'regular',
		email: 'malvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13883,
		nationality: 'V'.toUpperCase(),
		cedula: 17996863,
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
		userName: 'rcaldera'.toLowerCase(),
		name: capitalCadena('ROSANGELA '),
		lastName: capitalCadena('CALDERA ARGUELLO'),
		type: 'regular',
		email: 'rcaldera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13944,
		nationality: 'V'.toUpperCase(),
		cedula: 14954574,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kford'.toLowerCase(),
		name: capitalCadena('KARINA ALEXANDRA'),
		lastName: capitalCadena('FORD DIAZ'),
		type: 'regular',
		email: 'kford@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13907,
		nationality: 'V'.toUpperCase(),
		cedula: 14828943,
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
		userName: 'mpuche'.toLowerCase(),
		name: capitalCadena('MIGUEL ALBERTO'),
		lastName: capitalCadena('PUCHE MOLERO'),
		type: 'regular',
		email: 'mpuche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13955,
		nationality: 'V'.toUpperCase(),
		cedula: 23457065,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yeperez'.toLowerCase(),
		name: capitalCadena('YENNY JOSEFINA'),
		lastName: capitalCadena('PEREZ TERAN'),
		type: 'regular',
		email: 'yeperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13219,
		nationality: 'V'.toUpperCase(),
		cedula: 6300663,
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
		userName: 'gegarcia'.toLowerCase(),
		name: capitalCadena('GENESIS CARIDAD'),
		lastName: capitalCadena('GARCIA MEZA'),
		type: 'regular',
		email: 'gegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13957,
		nationality: 'V'.toUpperCase(),
		cedula: 22798734,
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
		userName: 'aotero'.toLowerCase(),
		name: capitalCadena('ARTURO RAFAEL'),
		lastName: capitalCadena('OTERO CAYUMA'),
		type: 'regular',
		email: 'aotero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13924,
		nationality: 'V'.toUpperCase(),
		cedula: 8265206,
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
		userName: 'dcastellano'.toLowerCase(),
		name: capitalCadena('DAILIN DEL ROSARIO'),
		lastName: capitalCadena('CASTELLANO NIÑO'),
		type: 'regular',
		email: 'dcastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13967,
		nationality: 'V'.toUpperCase(),
		cedula: 19099235,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'naparicio'.toLowerCase(),
		name: capitalCadena('NANCY YULIMAR'),
		lastName: capitalCadena('APARICIO '),
		type: 'regular',
		email: 'naparicio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13969,
		nationality: 'V'.toUpperCase(),
		cedula: 15480701,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ajusto'.toLowerCase(),
		name: capitalCadena('AGNER RENE'),
		lastName: capitalCadena('JUSTO AZUAJE'),
		type: 'regular',
		email: 'ajusto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13928,
		nationality: 'V'.toUpperCase(),
		cedula: 20151522,
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
		userName: 'mesis'.toLowerCase(),
		name: capitalCadena('MANUEL DE JESUS'),
		lastName: capitalCadena('ESIS OCHOA'),
		type: 'regular',
		email: 'mesis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13988,
		nationality: 'V'.toUpperCase(),
		cedula: 19747889,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbarrios'.toLowerCase(),
		name: capitalCadena('JACKELINE COROMOTO'),
		lastName: capitalCadena('BARRIOS PEREZ'),
		type: 'regular',
		email: 'jbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13991,
		nationality: 'V'.toUpperCase(),
		cedula: 19609934,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eguillen'.toLowerCase(),
		name: capitalCadena('EYLIN GRACIELA'),
		lastName: capitalCadena('GUILLEN DE SULBARAN'),
		type: 'regular',
		email: 'eguillen@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13992,
		nationality: 'V'.toUpperCase(),
		cedula: 13967982,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rhaimacana'.toLowerCase(),
		name: capitalCadena('RUBEN ISAIAS'),
		lastName: capitalCadena('HAIMACAÑA LOPEZ'),
		type: 'regular',
		email: 'rhaimacana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13939,
		nationality: 'V'.toUpperCase(),
		cedula: 14744596,
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
		userName: 'jtorres'.toLowerCase(),
		name: capitalCadena('JENNIFER ANDREINA'),
		lastName: capitalCadena('TORRES REY'),
		type: 'regular',
		email: 'jtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13946,
		nationality: 'V'.toUpperCase(),
		cedula: 23271256,
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
		userName: 'rfernandez'.toLowerCase(),
		name: capitalCadena('ROSYMARELVIA DE LOS ANGELES'),
		lastName: capitalCadena('FERNANDEZ QUIVERA'),
		type: 'regular',
		email: 'rfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14001,
		nationality: 'V'.toUpperCase(),
		cedula: 23453587,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'macastillo'.toLowerCase(),
		name: capitalCadena('MARIA CAROLINA'),
		lastName: capitalCadena('CASTILLO CHAPARRO'),
		type: 'regular',
		email: 'macastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14008,
		nationality: 'V'.toUpperCase(),
		cedula: 9796160,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlara'.toLowerCase(),
		name: capitalCadena('JEAN CARLO'),
		lastName: capitalCadena('LARA BRACHO'),
		type: 'regular',
		email: 'jlara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13961,
		nationality: 'V'.toUpperCase(),
		cedula: 15974880,
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
		userName: 'kmorillo'.toLowerCase(),
		name: capitalCadena('KATIUSCA RAMONA'),
		lastName: capitalCadena('MORILLO BENAVIDES'),
		type: 'regular',
		email: 'kmorillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14014,
		nationality: 'V'.toUpperCase(),
		cedula: 11288173,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lquintero'.toLowerCase(),
		name: capitalCadena('LISSETH GUADALUPE'),
		lastName: capitalCadena('QUINTERO PEREIRA'),
		type: 'regular',
		email: 'lquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14032,
		nationality: 'V'.toUpperCase(),
		cedula: 17151252,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adgarcia'.toLowerCase(),
		name: capitalCadena('ADAIN ANTONIA'),
		lastName: capitalCadena('GARCIA RIVERO'),
		type: 'regular',
		email: 'adgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14034,
		nationality: 'V'.toUpperCase(),
		cedula: 14895153,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epulgar'.toLowerCase(),
		name: capitalCadena('ELEINIS CAROLINA'),
		lastName: capitalCadena('PULGAR ALDANA'),
		type: 'regular',
		email: 'epulgar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14036,
		nationality: 'V'.toUpperCase(),
		cedula: 19968615,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igonzalez'.toLowerCase(),
		name: capitalCadena('INGRID GERALDINE'),
		lastName: capitalCadena('GONZALEZ CARRERA'),
		type: 'regular',
		email: 'igonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14037,
		nationality: 'V'.toUpperCase(),
		cedula: 17089762,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarias'.toLowerCase(),
		name: capitalCadena('YVICT SARAI'),
		lastName: capitalCadena('ARIAS ANDERSON'),
		type: 'regular',
		email: 'yarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14051,
		nationality: 'V'.toUpperCase(),
		cedula: 16172793,
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
		userName: 'aprado'.toLowerCase(),
		name: capitalCadena('ANA GABRIELA'),
		lastName: capitalCadena('PRADO SERRANO'),
		type: 'regular',
		email: 'aprado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13970,
		nationality: 'V'.toUpperCase(),
		cedula: 16063933,
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
		userName: 'ysuarez'.toLowerCase(),
		name: capitalCadena('YINETHSI DEL VALLE'),
		lastName: capitalCadena('SUAREZ BERMUDEZ'),
		type: 'regular',
		email: 'ysuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13993,
		nationality: 'V'.toUpperCase(),
		cedula: 17786899,
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
		userName: 'eprimera'.toLowerCase(),
		name: capitalCadena('ELISA INES'),
		lastName: capitalCadena('PRIMERA MAGGIOLO'),
		type: 'regular',
		email: 'eprimera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14072,
		nationality: 'V'.toUpperCase(),
		cedula: 12099411,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccolon'.toLowerCase(),
		name: capitalCadena('CRISMAR CAROLINA'),
		lastName: capitalCadena('COLON DELGADO'),
		type: 'regular',
		email: 'ccolon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14077,
		nationality: 'V'.toUpperCase(),
		cedula: 18205583,
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
		userName: 'yaromero'.toLowerCase(),
		name: capitalCadena('YANMILETH DEL VALLE'),
		lastName: capitalCadena('ROMERO CARRUYO'),
		type: 'regular',
		email: 'yaromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14093,
		nationality: 'V'.toUpperCase(),
		cedula: 14356920,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jeviloria'.toLowerCase(),
		name: capitalCadena('JESUS RAMON'),
		lastName: capitalCadena('VILORIA TORRES'),
		type: 'regular',
		email: 'jeviloria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14070,
		nationality: 'V'.toUpperCase(),
		cedula: 19898874,
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
		userName: 'ssoler'.toLowerCase(),
		name: capitalCadena('SAIDA MARGARITA'),
		lastName: capitalCadena('SOLER GUANIPA'),
		type: 'regular',
		email: 'ssoler@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14084,
		nationality: 'V'.toUpperCase(),
		cedula: 9733659,
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
		userName: 'frmartinez'.toLowerCase(),
		name: capitalCadena('FRANCIS GABRIELA'),
		lastName: capitalCadena('MARTINEZ GONZALEZ'),
		type: 'regular',
		email: 'frmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14110,
		nationality: 'V'.toUpperCase(),
		cedula: 19774250,
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
		userName: 'jvargas'.toLowerCase(),
		name: capitalCadena('JUAN JOSE'),
		lastName: capitalCadena('VARGAS CARDONA'),
		type: 'regular',
		email: 'jvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14085,
		nationality: 'V'.toUpperCase(),
		cedula: 19576364,
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
		userName: 'yamarquez'.toLowerCase(),
		name: capitalCadena('YASINET NINOSCA'),
		lastName: capitalCadena('MARQUEZ RAMIREZ'),
		type: 'regular',
		email: 'yamarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14152,
		nationality: 'V'.toUpperCase(),
		cedula: 18680283,
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
		userName: 'mroa'.toLowerCase(),
		name: capitalCadena('MARIAN ANGELICA'),
		lastName: capitalCadena('ROA RAMIREZ'),
		type: 'regular',
		email: 'mroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14092,
		nationality: 'V'.toUpperCase(),
		cedula: 18742936,
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
		userName: 'rimartinez'.toLowerCase(),
		name: capitalCadena('RICHARD ENRIQUE'),
		lastName: capitalCadena('MARTINEZ RAMIREZ'),
		type: 'regular',
		email: 'rimartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14179,
		nationality: 'V'.toUpperCase(),
		cedula: 20844497,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marhernandez'.toLowerCase(),
		name: capitalCadena('MARIAN DE LOS ANGELES'),
		lastName: capitalCadena('HERNANDEZ DURAN'),
		type: 'regular',
		email: 'marhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14180,
		nationality: 'V'.toUpperCase(),
		cedula: 18516529,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eescalona'.toLowerCase(),
		name: capitalCadena('ESTEFANI CAROLINA'),
		lastName: capitalCadena('ESCALONA MENDEZ'),
		type: 'regular',
		email: 'eescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14192,
		nationality: 'V'.toUpperCase(),
		cedula: 26763491,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymaterano'.toLowerCase(),
		name: capitalCadena('YOCELIN DEL VALLE'),
		lastName: capitalCadena('MATERANO MATERANO'),
		type: 'regular',
		email: 'ymaterano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14197,
		nationality: 'V'.toUpperCase(),
		cedula: 23717678,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oparaco'.toLowerCase(),
		name: capitalCadena('OMAR ARGENIS'),
		lastName: capitalCadena('PARACO BUITRAGO'),
		type: 'regular',
		email: 'oparaco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14105,
		nationality: 'V'.toUpperCase(),
		cedula: 14035037,
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
		userName: 'lusanchez'.toLowerCase(),
		name: capitalCadena('LUIS JOSE'),
		lastName: capitalCadena('SANCHEZ INCIARTE'),
		type: 'regular',
		email: 'lusanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14108,
		nationality: 'V'.toUpperCase(),
		cedula: 20816587,
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
		userName: 'lurojas'.toLowerCase(),
		name: capitalCadena('LUIS ENRIQUE'),
		lastName: capitalCadena('ROJAS CASTRO'),
		type: 'regular',
		email: 'lurojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14242,
		nationality: 'V'.toUpperCase(),
		cedula: 14518576,
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
		userName: 'msalazar'.toLowerCase(),
		name: capitalCadena('MADERLYN MARIA'),
		lastName: capitalCadena('SALAZAR PALMA'),
		type: 'regular',
		email: 'msalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14148,
		nationality: 'V'.toUpperCase(),
		cedula: 19221738,
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
		userName: 'mmaneiro'.toLowerCase(),
		name: capitalCadena('MONICA PATRICIA'),
		lastName: capitalCadena('MANEIRO ACOSTA'),
		type: 'regular',
		email: 'mmaneiro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14167,
		nationality: 'V'.toUpperCase(),
		cedula: 22574547,
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
		userName: 'ccastellanos'.toLowerCase(),
		name: capitalCadena('CARMEN JULIA'),
		lastName: capitalCadena('CASTELLANOS ROMERO'),
		type: 'regular',
		email: 'ccastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14255,
		nationality: 'V'.toUpperCase(),
		cedula: 18334440,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hsalom'.toLowerCase(),
		name: capitalCadena('HENRY ANTONIO'),
		lastName: capitalCadena('SALOM PEÑA'),
		type: 'regular',
		email: 'hsalom@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14198,
		nationality: 'V'.toUpperCase(),
		cedula: 19767372,
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
		userName: 'mariasanchez'.toLowerCase(),
		name: capitalCadena('MARIA TERESA'),
		lastName: capitalCadena('SANCHEZ PEÑA'),
		type: 'regular',
		email: 'mariasanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14199,
		nationality: 'V'.toUpperCase(),
		cedula: 16833544,
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
		userName: 'apazpirela'.toLowerCase(),
		name: capitalCadena('ANTONIA ELENA'),
		lastName: capitalCadena('PAZ PIRELA'),
		type: 'regular',
		email: 'apazpirela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14247,
		nationality: 'V'.toUpperCase(),
		cedula: 18572144,
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
		userName: 'irrivas'.toLowerCase(),
		name: capitalCadena('IRVIN JOSE'),
		lastName: capitalCadena('RIVAS QUINTERO'),
		type: 'regular',
		email: 'irrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14264,
		nationality: 'V'.toUpperCase(),
		cedula: 25593377,
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
		userName: 'nlaya'.toLowerCase(),
		name: capitalCadena('NINO RAFAEL'),
		lastName: capitalCadena('LAYA RIOS'),
		type: 'regular',
		email: 'nlaya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13342,
		nationality: 'V'.toUpperCase(),
		cedula: 6858541,
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
		userName: 'mtoledo'.toLowerCase(),
		name: capitalCadena('MARIELA '),
		lastName: capitalCadena('TOLEDO DE CAÑIZALEZ'),
		type: 'regular',
		email: 'mtoledo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14273,
		nationality: 'V'.toUpperCase(),
		cedula: 8727845,
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
		userName: 'irodriguez'.toLowerCase(),
		name: capitalCadena('ISMENIA MAGDALENA'),
		lastName: capitalCadena('RODRIGUEZ MARTINEZ'),
		type: 'regular',
		email: 'irodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14323,
		nationality: 'V'.toUpperCase(),
		cedula: 15301744,
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
		userName: 'ppartidas'.toLowerCase(),
		name: capitalCadena('PEDRO MANUEL'),
		lastName: capitalCadena('PARTIDAS '),
		type: 'regular',
		email: 'ppartidas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14327,
		nationality: 'V'.toUpperCase(),
		cedula: 10477839,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fblanco'.toLowerCase(),
		name: capitalCadena('FRANCISCO JAVIER'),
		lastName: capitalCadena('BLANCO IRIARTE'),
		type: 'regular',
		email: 'fblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14328,
		nationality: 'V'.toUpperCase(),
		cedula: 19796937,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmoyega'.toLowerCase(),
		name: capitalCadena('MARIANNY VICTORIA'),
		lastName: capitalCadena('MOYEGA ZAPATA'),
		type: 'regular',
		email: 'mmoyega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14332,
		nationality: 'V'.toUpperCase(),
		cedula: 19237458,
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
		userName: 'nleon'.toLowerCase(),
		name: capitalCadena('NARKIS JOSELIN'),
		lastName: capitalCadena('LEON QUERALES'),
		type: 'regular',
		email: 'nleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14336,
		nationality: 'V'.toUpperCase(),
		cedula: 25556771,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oromero'.toLowerCase(),
		name: capitalCadena('ORLANDO JOSE'),
		lastName: capitalCadena('ROMERO PALENCIA'),
		type: 'regular',
		email: 'oromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14295,
		nationality: 'V'.toUpperCase(),
		cedula: 6865667,
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
		userName: 'angonzalez'.toLowerCase(),
		name: capitalCadena('ANA BETZAIDA'),
		lastName: capitalCadena('GONZALEZ PULVIAC'),
		type: 'regular',
		email: 'angonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14345,
		nationality: 'V'.toUpperCase(),
		cedula: 10625210,
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
		userName: 'yarteaga'.toLowerCase(),
		name: capitalCadena('YOFRAN JOSE'),
		lastName: capitalCadena('ARTEAGA GARCIA'),
		type: 'regular',
		email: 'yarteaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14349,
		nationality: 'V'.toUpperCase(),
		cedula: 11932961,
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
		userName: 'ychinchilla'.toLowerCase(),
		name: capitalCadena('YEIDIMAR DEL VALLE'),
		lastName: capitalCadena('CHINCHILLA MATERANO'),
		type: 'regular',
		email: 'ychinchilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14297,
		nationality: 'V'.toUpperCase(),
		cedula: 26877513,
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
		userName: 'rleon'.toLowerCase(),
		name: capitalCadena('ROBERTO ANTONIO'),
		lastName: capitalCadena('LEON MENDEZ'),
		type: 'regular',
		email: 'rleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14361,
		nationality: 'V'.toUpperCase(),
		cedula: 6452059,
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
		userName: 'aavilan'.toLowerCase(),
		name: capitalCadena('ASUGEIS ALENY'),
		lastName: capitalCadena('AVILAN OROPEZA'),
		type: 'regular',
		email: 'aavilan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14375,
		nationality: 'V'.toUpperCase(),
		cedula: 15912851,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmarin'.toLowerCase(),
		name: capitalCadena('JONATHAN ENRIQUE'),
		lastName: capitalCadena('MARIN CASTILLO'),
		type: 'regular',
		email: 'jmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14331,
		nationality: 'V'.toUpperCase(),
		cedula: 25876931,
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
		userName: 'mpalmar'.toLowerCase(),
		name: capitalCadena('MARIA EMILIA'),
		lastName: capitalCadena('PALMAR SILVA'),
		type: 'regular',
		email: 'mpalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14340,
		nationality: 'V'.toUpperCase(),
		cedula: 27180792,
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
		userName: 'elitorres'.toLowerCase(),
		name: capitalCadena('ELIZABETH COROMOTO'),
		lastName: capitalCadena('TORRES BRICEÑO'),
		type: 'regular',
		email: 'elitorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14388,
		nationality: 'V'.toUpperCase(),
		cedula: 14755827,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lybanez'.toLowerCase(),
		name: capitalCadena('LUIS ANGEL'),
		lastName: capitalCadena('YBAÑEZ MANARE'),
		type: 'regular',
		email: 'lybanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14354,
		nationality: 'V'.toUpperCase(),
		cedula: 15945899,
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
		userName: 'lguanipa'.toLowerCase(),
		name: capitalCadena('LILIANA DEL CARMEN'),
		lastName: capitalCadena('GUANIPA MIRANDA'),
		type: 'regular',
		email: 'lguanipa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14395,
		nationality: 'V'.toUpperCase(),
		cedula: 11473456,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mlozano'.toLowerCase(),
		name: capitalCadena('MARIA ELENA'),
		lastName: capitalCadena('LOZANO BRAVO'),
		type: 'regular',
		email: 'mlozano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14368,
		nationality: 'V'.toUpperCase(),
		cedula: 13119035,
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
		userName: 'everde'.toLowerCase(),
		name: capitalCadena('ELOYMAR '),
		lastName: capitalCadena('VERDE ARRATIA'),
		type: 'regular',
		email: 'everde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14413,
		nationality: 'V'.toUpperCase(),
		cedula: 17312591,
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
		userName: 'enegron'.toLowerCase(),
		name: capitalCadena('ENYEILY MARIA'),
		lastName: capitalCadena('NEGRON SUAREZ'),
		type: 'regular',
		email: 'enegron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14427,
		nationality: 'V'.toUpperCase(),
		cedula: 17099421,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yeperozo'.toLowerCase(),
		name: capitalCadena('YESELYN COROMOTO'),
		lastName: capitalCadena('PEROZO QUINTERO'),
		type: 'regular',
		email: 'yeperozo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14380,
		nationality: 'V'.toUpperCase(),
		cedula: 18742997,
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
		userName: 'aarellano'.toLowerCase(),
		name: capitalCadena('ANNY MAGRET'),
		lastName: capitalCadena('ARELLANO QUINTERO'),
		type: 'regular',
		email: 'aarellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14465,
		nationality: 'V'.toUpperCase(),
		cedula: 13099106,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'falbornoz'.toLowerCase(),
		name: capitalCadena('FRANK JOSE'),
		lastName: capitalCadena('ALBORNOZ PIÑA'),
		type: 'regular',
		email: 'falbornoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14469,
		nationality: 'V'.toUpperCase(),
		cedula: 20742663,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'micolina'.toLowerCase(),
		name: capitalCadena('MICHELLE ANDREINA'),
		lastName: capitalCadena('COLINA GRANADILLO'),
		type: 'regular',
		email: 'micolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14381,
		nationality: 'V'.toUpperCase(),
		cedula: 20442080,
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
		userName: 'damendoza'.toLowerCase(),
		name: capitalCadena('DALIANA DEL CARMEN'),
		lastName: capitalCadena('MENDOZA PEÑA'),
		type: 'regular',
		email: 'damendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14505,
		nationality: 'V'.toUpperCase(),
		cedula: 23563945,
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
		userName: 'aggomez'.toLowerCase(),
		name: capitalCadena('AGUSTIN JESUS'),
		lastName: capitalCadena('GOMEZ GOMEZ'),
		type: 'regular',
		email: 'aggomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14389,
		nationality: 'V'.toUpperCase(),
		cedula: 26548716,
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
		userName: 'rjimenez'.toLowerCase(),
		name: capitalCadena('ROMULO SEGUNDO'),
		lastName: capitalCadena('JIMENEZ ANDUJAR'),
		type: 'regular',
		email: 'rjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14404,
		nationality: 'V'.toUpperCase(),
		cedula: 12489489,
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
		userName: 'klopez'.toLowerCase(),
		name: capitalCadena('KATHERINE NADIUSKA'),
		lastName: capitalCadena('LOPEZ CAMPOS'),
		type: 'regular',
		email: 'klopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14553,
		nationality: 'V'.toUpperCase(),
		cedula: 12617397,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asemprun'.toLowerCase(),
		name: capitalCadena('ALEXANDER JOSE'),
		lastName: capitalCadena('SEMPRUN NAVEA'),
		type: 'regular',
		email: 'asemprun@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14448,
		nationality: 'V'.toUpperCase(),
		cedula: 14522188,
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
		userName: 'rcastillo'.toLowerCase(),
		name: capitalCadena('ROXELIS CATHERIN'),
		lastName: capitalCadena('CASTILLO LUGO'),
		type: 'regular',
		email: 'rcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14494,
		nationality: 'V'.toUpperCase(),
		cedula: 19749925,
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
		userName: 'luramos'.toLowerCase(),
		name: capitalCadena('LUIS ALBERTO'),
		lastName: capitalCadena('RAMOS URDANETA'),
		type: 'regular',
		email: 'luramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14522,
		nationality: 'V'.toUpperCase(),
		cedula: 15974567,
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
		userName: 'ecarreno'.toLowerCase(),
		name: capitalCadena('EDUARDO JOSE'),
		lastName: capitalCadena('CARREÑO UBAN'),
		type: 'regular',
		email: 'ecarreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14669,
		nationality: 'V'.toUpperCase(),
		cedula: 17682290,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carivas'.toLowerCase(),
		name: capitalCadena('CARMEN MARIA'),
		lastName: capitalCadena('RIVAS GALLARDO'),
		type: 'regular',
		email: 'carivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14675,
		nationality: 'V'.toUpperCase(),
		cedula: 6957550,
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
		userName: 'mariagonzalez'.toLowerCase(),
		name: capitalCadena('MARIALEJANDRA '),
		lastName: capitalCadena('GONZALEZ NUÑEZ'),
		type: 'regular',
		email: 'mariagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14726,
		nationality: 'V'.toUpperCase(),
		cedula: 17532441,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malopez'.toLowerCase(),
		name: capitalCadena('MARIA DOLORES'),
		lastName: capitalCadena('LOPEZ ROMERO'),
		type: 'regular',
		email: 'malopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14764,
		nationality: 'V'.toUpperCase(),
		cedula: 10581780,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfermin'.toLowerCase(),
		name: capitalCadena('MARIANA ISABEL'),
		lastName: capitalCadena('FERMIN ROJAS'),
		type: 'regular',
		email: 'mfermin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14547,
		nationality: 'V'.toUpperCase(),
		cedula: 15973399,
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
		userName: 'judrodriguez'.toLowerCase(),
		name: capitalCadena('JUDITH CELESTE'),
		lastName: capitalCadena('RODRIGUEZ CASTILLO'),
		type: 'regular',
		email: 'judrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14774,
		nationality: 'V'.toUpperCase(),
		cedula: 15254904,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmolina'.toLowerCase(),
		name: capitalCadena('MAIRA DEL VALLE'),
		lastName: capitalCadena('MOLINA ROSALES'),
		type: 'regular',
		email: 'mmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14779,
		nationality: 'V'.toUpperCase(),
		cedula: 14962763,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angomez'.toLowerCase(),
		name: capitalCadena('ANA DEL VALLE'),
		lastName: capitalCadena('GOMEZ SMITH'),
		type: 'regular',
		email: 'angomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14788,
		nationality: 'V'.toUpperCase(),
		cedula: 7871001,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfaria'.toLowerCase(),
		name: capitalCadena('LEIDYS MARIANA'),
		lastName: capitalCadena('FARIA MOLERO'),
		type: 'regular',
		email: 'lfaria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14792,
		nationality: 'V'.toUpperCase(),
		cedula: 18426982,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llopez'.toLowerCase(),
		name: capitalCadena('LEIDIS ELVIRA'),
		lastName: capitalCadena('LOPEZ DE MOYA'),
		type: 'regular',
		email: 'llopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14793,
		nationality: 'V'.toUpperCase(),
		cedula: 13974444,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yumarquez'.toLowerCase(),
		name: capitalCadena('YULEXIS DEL VALLE'),
		lastName: capitalCadena('MARQUEZ MUDARRA'),
		type: 'regular',
		email: 'yumarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14828,
		nationality: 'V'.toUpperCase(),
		cedula: 25621925,
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
		userName: 'hparedes'.toLowerCase(),
		name: capitalCadena('HAZEL EVELIN'),
		lastName: capitalCadena('PAREDES '),
		type: 'regular',
		email: 'hparedes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14859,
		nationality: 'V'.toUpperCase(),
		cedula: 12625367,
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
		userName: 'mdelgado'.toLowerCase(),
		name: capitalCadena('MARIANNY JOSE'),
		lastName: capitalCadena('DELGADO COLINA'),
		type: 'regular',
		email: 'mdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14861,
		nationality: 'V'.toUpperCase(),
		cedula: 27530400,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apena'.toLowerCase(),
		name: capitalCadena('ADRIANA DEL VALLE'),
		lastName: capitalCadena('PEÑA AZUAJE'),
		type: 'regular',
		email: 'apena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14566,
		nationality: 'V'.toUpperCase(),
		cedula: 20400946,
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
		userName: 'esortiz'.toLowerCase(),
		name: capitalCadena('ESTHER CAROLINA'),
		lastName: capitalCadena('ORTIZ LOPEZ'),
		type: 'regular',
		email: 'esortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14866,
		nationality: 'V'.toUpperCase(),
		cedula: 23284148,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llaguado'.toLowerCase(),
		name: capitalCadena('LUISANA ISABEL'),
		lastName: capitalCadena('LAGUADO SANDREA'),
		type: 'regular',
		email: 'llaguado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14875,
		nationality: 'V'.toUpperCase(),
		cedula: 28470031,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrivera'.toLowerCase(),
		name: capitalCadena('RANDY JOSE'),
		lastName: capitalCadena('RIVERA VILLALOBOS'),
		type: 'regular',
		email: 'rrivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14597,
		nationality: 'V'.toUpperCase(),
		cedula: 29749080,
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
		userName: 'jfernandez'.toLowerCase(),
		name: capitalCadena('JHON ANDRES'),
		lastName: capitalCadena('FERNANDEZ YGUARAN'),
		type: 'regular',
		email: 'jfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14599,
		nationality: 'V'.toUpperCase(),
		cedula: 29951345,
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
		userName: 'migutierrez'.toLowerCase(),
		name: capitalCadena('MILEXIS DEL CARMEN'),
		lastName: capitalCadena('GUTIERREZ PARADA'),
		type: 'regular',
		email: 'migutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14772,
		nationality: 'V'.toUpperCase(),
		cedula: 13957615,
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
		userName: 'cbracamonte'.toLowerCase(),
		name: capitalCadena('CARLOS ALBERTO'),
		lastName: capitalCadena('BRACAMONTE MELENDEZ'),
		type: 'regular',
		email: 'cbracamonte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14907,
		nationality: 'V'.toUpperCase(),
		cedula: 25579230,
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
		userName: 'gpalencia'.toLowerCase(),
		name: capitalCadena('GENESIS CHIQUINQUIRA'),
		lastName: capitalCadena('PALENCIA VALERO'),
		type: 'regular',
		email: 'gpalencia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14920,
		nationality: 'V'.toUpperCase(),
		cedula: 27071801,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rgil'.toLowerCase(),
		name: capitalCadena('REINALDO ANTONIO'),
		lastName: capitalCadena('GIL PIMENTEL'),
		type: 'regular',
		email: 'rgil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14862,
		nationality: 'V'.toUpperCase(),
		cedula: 19813346,
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
		userName: 'dequintero'.toLowerCase(),
		name: capitalCadena('DERLIZ MARGARITA'),
		lastName: capitalCadena('QUINTERO BERICOTO'),
		type: 'regular',
		email: 'dequintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14878,
		nationality: 'V'.toUpperCase(),
		cedula: 14615685,
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
		userName: 'anromero'.toLowerCase(),
		name: capitalCadena('ANA GABRIELA'),
		lastName: capitalCadena('ROMERO VARGAS'),
		type: 'regular',
		email: 'anromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14879,
		nationality: 'V'.toUpperCase(),
		cedula: 19716732,
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
		userName: 'lublanco'.toLowerCase(),
		name: capitalCadena('LUZ ELENA'),
		lastName: capitalCadena('BLANCO NIÑO'),
		type: 'regular',
		email: 'lublanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14900,
		nationality: 'V'.toUpperCase(),
		cedula: 27886853,
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
		userName: 'gebarrios'.toLowerCase(),
		name: capitalCadena('GENESIS DAYANA'),
		lastName: capitalCadena('BARRIOS VANEGAS'),
		type: 'regular',
		email: 'gebarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14959,
		nationality: 'V'.toUpperCase(),
		cedula: 28458361,
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
		userName: 'hbriceno'.toLowerCase(),
		name: capitalCadena('HEBERTO JOSE'),
		lastName: capitalCadena('BRICEÑO ALBORNOZ'),
		type: 'regular',
		email: 'hbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14928,
		nationality: 'V'.toUpperCase(),
		cedula: 18397803,
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
		userName: 'emaita'.toLowerCase(),
		name: capitalCadena('EDNA MARIAN'),
		lastName: capitalCadena('MAITA VILORIA'),
		type: 'regular',
		email: 'emaita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14930,
		nationality: 'V'.toUpperCase(),
		cedula: 20855010,
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
		userName: 'luirodriguez'.toLowerCase(),
		name: capitalCadena('LUIS ALEJANDRO'),
		lastName: capitalCadena('RODRIGUEZ CHANCHAMIRE'),
		type: 'regular',
		email: 'luirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14956,
		nationality: 'V'.toUpperCase(),
		cedula: 20106340,
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
		userName: 'brodriguez'.toLowerCase(),
		name: capitalCadena('BRAYAN KEVIN'),
		lastName: capitalCadena('RODRIGUEZ LA CRUZ'),
		type: 'regular',
		email: 'brodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14966,
		nationality: 'V'.toUpperCase(),
		cedula: 27804751,
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
		userName: 'yyamal'.toLowerCase(),
		name: capitalCadena('YESIRETH DEL VALLE'),
		lastName: capitalCadena('YAMAL GOMEZ'),
		type: 'regular',
		email: 'yyamal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14968,
		nationality: 'V'.toUpperCase(),
		cedula: 18126695,
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
		userName: 'ljimenez'.toLowerCase(),
		name: capitalCadena('LUIS EDUARDO'),
		lastName: capitalCadena('JIMENEZ CASANOVA'),
		type: 'regular',
		email: 'ljimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14977,
		nationality: 'V'.toUpperCase(),
		cedula: 13766349,
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
		userName: 'ipuche'.toLowerCase(),
		name: capitalCadena('INGRID JOSEFINA'),
		lastName: capitalCadena('PUCHE FUENMAYOR'),
		type: 'regular',
		email: 'ipuche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14983,
		nationality: 'V'.toUpperCase(),
		cedula: 15193750,
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
		userName: 'ilopez'.toLowerCase(),
		name: capitalCadena('IDANIA SOLEIDA'),
		lastName: capitalCadena('LOPEZ BARRIOS'),
		type: 'regular',
		email: 'ilopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15062,
		nationality: 'V'.toUpperCase(),
		cedula: 15713306,
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
		userName: 'grojas'.toLowerCase(),
		name: capitalCadena('GREICY MARIANNIS'),
		lastName: capitalCadena('ROJAS PUERTA'),
		type: 'regular',
		email: 'grojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15017,
		nationality: 'V'.toUpperCase(),
		cedula: 24948334,
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
		userName: 'leoliveros'.toLowerCase(),
		name: capitalCadena('LEIDY PAOLA'),
		lastName: capitalCadena('OLIVEROS DAVILA'),
		type: 'regular',
		email: 'leoliveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15044,
		nationality: 'V'.toUpperCase(),
		cedula: 24551895,
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
		userName: 'rugonzalez'.toLowerCase(),
		name: capitalCadena('RUSBER DARIO'),
		lastName: capitalCadena('GONZALEZ CIFUENTES'),
		type: 'regular',
		email: 'rugonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15054,
		nationality: 'V'.toUpperCase(),
		cedula: 25604448,
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
		userName: 'lcabrera'.toLowerCase(),
		name: capitalCadena('LOREIDRYCK DEL VALLE'),
		lastName: capitalCadena('CABRERA RODRIGUEZ'),
		type: 'regular',
		email: 'lcabrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15107,
		nationality: 'V'.toUpperCase(),
		cedula: 27343743,
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
		userName: 'ctunon'.toLowerCase(),
		name: capitalCadena('CAROLINA DEL CARMEN'),
		lastName: capitalCadena('TUÑON GONZALEZ'),
		type: 'regular',
		email: 'ctunon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15079,
		nationality: 'V'.toUpperCase(),
		cedula: 18382063,
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
		userName: 'getovar'.toLowerCase(),
		name: capitalCadena('GEONELA NAHOMY'),
		lastName: capitalCadena('TOVAR CASTILLO'),
		type: 'regular',
		email: 'getovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15082,
		nationality: 'V'.toUpperCase(),
		cedula: 26714345,
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
		userName: 'dmendoza'.toLowerCase(),
		name: capitalCadena('DILLY YUSEL'),
		lastName: capitalCadena('MENDOZA SALCEDO'),
		type: 'regular',
		email: 'dmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15091,
		nationality: 'V'.toUpperCase(),
		cedula: 29636573,
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
		userName: 'nduran'.toLowerCase(),
		name: capitalCadena('NIEVES SONSIRE'),
		lastName: capitalCadena('DURAN MENDOZA'),
		type: 'regular',
		email: 'nduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15212,
		nationality: 'V'.toUpperCase(),
		cedula: 24744230,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lisgonzalez'.toLowerCase(),
		name: capitalCadena('LISNEYDA BEATRIZ'),
		lastName: capitalCadena('GONZALEZ NAVA'),
		type: 'regular',
		email: 'lisgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15112,
		nationality: 'V'.toUpperCase(),
		cedula: 15479659,
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
		userName: 'mifarias'.toLowerCase(),
		name: capitalCadena('MIGUEL ARCANGEL'),
		lastName: capitalCadena('FARIAS LISBOA'),
		type: 'regular',
		email: 'mifarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15117,
		nationality: 'V'.toUpperCase(),
		cedula: 26208890,
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
		userName: 'gcaraballo'.toLowerCase(),
		name: capitalCadena('GABRIEL ALEJANDRO'),
		lastName: capitalCadena('CARABALLO GONZALEZ'),
		type: 'regular',
		email: 'gcaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15252,
		nationality: 'V'.toUpperCase(),
		cedula: 24740211,
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
		userName: 'arueda'.toLowerCase(),
		name: capitalCadena('ANDREINA ISABEL'),
		lastName: capitalCadena('RUEDA SIBADA'),
		type: 'regular',
		email: 'arueda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15319,
		nationality: 'V'.toUpperCase(),
		cedula: 17005312,
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
		userName: 'eolivar'.toLowerCase(),
		name: capitalCadena('EDGAR ALEXANDER'),
		lastName: capitalCadena('OLIVAR MORILLO'),
		type: 'regular',
		email: 'eolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15320,
		nationality: 'V'.toUpperCase(),
		cedula: 12307923,
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
		userName: 'yucolina'.toLowerCase(),
		name: capitalCadena('YUSMARY DEL VALLE'),
		lastName: capitalCadena('COLINA GARCIA'),
		type: 'regular',
		email: 'yucolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15322,
		nationality: 'V'.toUpperCase(),
		cedula: 13371268,
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
		userName: 'lumarquez'.toLowerCase(),
		name: capitalCadena('LUISA ELENA'),
		lastName: capitalCadena('MARQUEZ DE RAMIREZ'),
		type: 'regular',
		email: 'lumarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15367,
		nationality: 'V'.toUpperCase(),
		cedula: 16599544,
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
		userName: 'mamedina'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('MEDINA FLETE'),
		type: 'regular',
		email: 'mamedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15323,
		nationality: 'V'.toUpperCase(),
		cedula: 24306100,
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
		userName: 'jlobo'.toLowerCase(),
		name: capitalCadena('JOSE ALEJANDRO'),
		lastName: capitalCadena('LOBO ARTETA'),
		type: 'regular',
		email: 'jlobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15364,
		nationality: 'V'.toUpperCase(),
		cedula: 30604627,
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
		userName: 'yicontreras'.toLowerCase(),
		name: capitalCadena('YICELY SORLEY'),
		lastName: capitalCadena('CONTRERAS HERNANDEZ'),
		type: 'regular',
		email: 'yicontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15368,
		nationality: 'V'.toUpperCase(),
		cedula: 19776115,
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
		userName: 'rscharbay'.toLowerCase(),
		name: capitalCadena('ROMINA COROMOTO'),
		lastName: capitalCadena('SCHARBAY RODRIGUEZ'),
		type: 'regular',
		email: 'rscharbay@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15382,
		nationality: 'V'.toUpperCase(),
		cedula: 15191936,
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
		userName: 'llabrador'.toLowerCase(),
		name: capitalCadena('LUZ ANDREINA'),
		lastName: capitalCadena('LABRADOR DOMADOR'),
		type: 'regular',
		email: 'llabrador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15369,
		nationality: 'V'.toUpperCase(),
		cedula: 16655000,
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
		userName: 'ivalera'.toLowerCase(),
		name: capitalCadena('ISABEL DE LOS ANGELES'),
		lastName: capitalCadena('VALERA CHONA'),
		type: 'regular',
		email: 'ivalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15390,
		nationality: 'V'.toUpperCase(),
		cedula: 12113929,
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
		userName: 'atavio'.toLowerCase(),
		name: capitalCadena('ALIBER NADIUSKA'),
		lastName: capitalCadena('TAVIO PALMERO'),
		type: 'regular',
		email: 'atavio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15393,
		nationality: 'V'.toUpperCase(),
		cedula: 13224303,
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
		userName: 'kbecerra'.toLowerCase(),
		name: capitalCadena('KARLEIDYS ALEXANDRA'),
		lastName: capitalCadena('BECERRA CARRERA'),
		type: 'regular',
		email: 'kbecerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15396,
		nationality: 'V'.toUpperCase(),
		cedula: 30541591,
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
		userName: 'jinfante'.toLowerCase(),
		name: capitalCadena('JUSTIN SCOTTH'),
		lastName: capitalCadena('INFANTE VIEIRA'),
		type: 'regular',
		email: 'jinfante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15398,
		nationality: 'V'.toUpperCase(),
		cedula: 30444943,
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
		userName: 'mcivira'.toLowerCase(),
		name: capitalCadena('MIGUEL ALEJANDRO'),
		lastName: capitalCadena('CIVIRA VELASQUEZ'),
		type: 'regular',
		email: 'mcivira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15402,
		nationality: 'V'.toUpperCase(),
		cedula: 29992820,
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
		userName: 'acatanho'.toLowerCase(),
		name: capitalCadena('ADRIANA ALI'),
		lastName: capitalCadena('CATANHO YAGUARAN'),
		type: 'regular',
		email: 'acatanho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15373,
		nationality: 'V'.toUpperCase(),
		cedula: 15247032,
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
		userName: 'rmarin'.toLowerCase(),
		name: capitalCadena('RENE RAFAEL'),
		lastName: capitalCadena('MARIN ARCILA'),
		type: 'regular',
		email: 'rmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15381,
		nationality: 'V'.toUpperCase(),
		cedula: 26266339,
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
		userName: 'yuguzman'.toLowerCase(),
		name: capitalCadena('YULEYS ELENA'),
		lastName: capitalCadena('GUZMAN CAMPOS'),
		type: 'regular',
		email: 'yuguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15383,
		nationality: 'V'.toUpperCase(),
		cedula: 8288968,
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
		userName: 'jsalazar'.toLowerCase(),
		name: capitalCadena('JEANNET CAROLINA'),
		lastName: capitalCadena('SALAZAR SALAZAR'),
		type: 'regular',
		email: 'jsalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15415,
		nationality: 'V'.toUpperCase(),
		cedula: 17487142,
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
		userName: 'yferrer'.toLowerCase(),
		name: capitalCadena('YOLIMAR DEL CARMEN'),
		lastName: capitalCadena('FERRER OLIVERO'),
		type: 'regular',
		email: 'yferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15452,
		nationality: 'V'.toUpperCase(),
		cedula: 24509518,
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
		userName: 'maespinoza'.toLowerCase(),
		name: capitalCadena('MARIANELA DE LOS ANGELES'),
		lastName: capitalCadena('ESPINOZA ARISTIGUETA'),
		type: 'regular',
		email: 'maespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15468,
		nationality: 'V'.toUpperCase(),
		cedula: 12162386,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fgonzalez'.toLowerCase(),
		name: capitalCadena('FREINYS LOREANA'),
		lastName: capitalCadena('GONZALEZ LOPEZ'),
		type: 'regular',
		email: 'fgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15474,
		nationality: 'V'.toUpperCase(),
		cedula: 30225895,
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
		userName: 'gcaigua'.toLowerCase(),
		name: capitalCadena('GARDIMAR CAROLINA'),
		lastName: capitalCadena('CAIGUA FLORES'),
		type: 'regular',
		email: 'gcaigua@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15475,
		nationality: 'V'.toUpperCase(),
		cedula: 27007274,
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
		userName: 'lerivero'.toLowerCase(),
		name: capitalCadena('LEONARDO DAVID'),
		lastName: capitalCadena('RIVERO SORONDO'),
		type: 'regular',
		email: 'lerivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15485,
		nationality: 'V'.toUpperCase(),
		cedula: 27788883,
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
		userName: 'adelgado'.toLowerCase(),
		name: capitalCadena('ANGGI LUISIANA'),
		lastName: capitalCadena('DELGADO ZAPATA'),
		type: 'regular',
		email: 'adelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15456,
		nationality: 'V'.toUpperCase(),
		cedula: 29597885,
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
		userName: 'aquesada'.toLowerCase(),
		name: capitalCadena('ALBANY GABRIELA'),
		lastName: capitalCadena('QUESADA MORALES'),
		type: 'regular',
		email: 'aquesada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15462,
		nationality: 'V'.toUpperCase(),
		cedula: 28039409,
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
		userName: 'midiaz'.toLowerCase(),
		name: capitalCadena('MIRIAM '),
		lastName: capitalCadena('DIAZ CARMONA'),
		type: 'regular',
		email: 'midiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15543,
		nationality: 'V'.toUpperCase(),
		cedula: 12784356,
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
		userName: 'asierra'.toLowerCase(),
		name: capitalCadena('ANDREA CAROLINA'),
		lastName: capitalCadena('SIERRA DI PAOLA'),
		type: 'regular',
		email: 'asierra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15552,
		nationality: 'V'.toUpperCase(),
		cedula: 20690039,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymontoya'.toLowerCase(),
		name: capitalCadena('YOSMARVY ANDREINA'),
		lastName: capitalCadena('MONTOYA GANDICA'),
		type: 'regular',
		email: 'ymontoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15554,
		nationality: 'V'.toUpperCase(),
		cedula: 20880089,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ambarrios'.toLowerCase(),
		name: capitalCadena('AMADO ANDRES'),
		lastName: capitalCadena('BARRIOS DIAZ'),
		type: 'regular',
		email: 'ambarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15503,
		nationality: 'V'.toUpperCase(),
		cedula: 29717553,
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
		userName: 'kvelasquez'.toLowerCase(),
		name: capitalCadena('KERVIN RAFAEL'),
		lastName: capitalCadena('VELASQUEZ OJEDA'),
		type: 'regular',
		email: 'kvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15520,
		nationality: 'V'.toUpperCase(),
		cedula: 14748809,
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
		userName: 'mcarmona'.toLowerCase(),
		name: capitalCadena('MARIA GABRIELA'),
		lastName: capitalCadena('CARMONA PIMENTEL'),
		type: 'regular',
		email: 'mcarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15555,
		nationality: 'V'.toUpperCase(),
		cedula: 24409790,
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
		userName: 'adominguez'.toLowerCase(),
		name: capitalCadena('ANA GABRIELA'),
		lastName: capitalCadena('DOMINGUEZ LINARES'),
		type: 'regular',
		email: 'adominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15589,
		nationality: 'V'.toUpperCase(),
		cedula: 28136232,
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
		userName: 'dagonzalez'.toLowerCase(),
		name: capitalCadena('DANIELA ALEJANDRA'),
		lastName: capitalCadena('GONZALEZ GARCIA'),
		type: 'regular',
		email: 'dagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15590,
		nationality: 'V'.toUpperCase(),
		cedula: 30925954,
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
		userName: 'eramos'.toLowerCase(),
		name: capitalCadena('ELIA GHERISBELL'),
		lastName: capitalCadena('RAMOS MILLAN'),
		type: 'regular',
		email: 'eramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15593,
		nationality: 'V'.toUpperCase(),
		cedula: 20559980,
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
		userName: 'jossanchez'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('SANCHEZ AMADO'),
		type: 'regular',
		email: 'jossanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15557,
		nationality: 'V'.toUpperCase(),
		cedula: 12992808,
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
		userName: 'kmoncada'.toLowerCase(),
		name: capitalCadena('KARINA DEL CARMEN'),
		lastName: capitalCadena('MONCADA DE OTALORA'),
		type: 'regular',
		email: 'kmoncada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15622,
		nationality: 'V'.toUpperCase(),
		cedula: 14502827,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aalizo'.toLowerCase(),
		name: capitalCadena('AYMARA ALEXANDRA'),
		lastName: capitalCadena('ALIZO AGUILERA'),
		type: 'regular',
		email: 'aalizo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15633,
		nationality: 'V'.toUpperCase(),
		cedula: 28052760,
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
		userName: 'risuarez'.toLowerCase(),
		name: capitalCadena('RICARDO DEYEIBERTH'),
		lastName: capitalCadena('SUAREZ JARAMILLO'),
		type: 'regular',
		email: 'risuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15634,
		nationality: 'V'.toUpperCase(),
		cedula: 30926191,
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
		userName: 'jmillan'.toLowerCase(),
		name: capitalCadena('JEANNA KARIM'),
		lastName: capitalCadena('MILLAN VARELA'),
		type: 'regular',
		email: 'jmillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15636,
		nationality: 'V'.toUpperCase(),
		cedula: 30519943,
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
		userName: 'jfonseca'.toLowerCase(),
		name: capitalCadena('JENIFER PAOLA'),
		lastName: capitalCadena('FONSECA FONSECA'),
		type: 'regular',
		email: 'jfonseca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15637,
		nationality: 'V'.toUpperCase(),
		cedula: 29577911,
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
		userName: 'esandia'.toLowerCase(),
		name: capitalCadena('EZEQUIEL ANTONIO'),
		lastName: capitalCadena('SANDIA OQUENDO'),
		type: 'regular',
		email: 'esandia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15641,
		nationality: 'V'.toUpperCase(),
		cedula: 30719066,
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
		userName: 'damorales'.toLowerCase(),
		name: capitalCadena('DAVID ISAAC'),
		lastName: capitalCadena('MORALES CHIRINOS'),
		type: 'regular',
		email: 'damorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15643,
		nationality: 'V'.toUpperCase(),
		cedula: 30507719,
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
		userName: 'krosales'.toLowerCase(),
		name: capitalCadena('KENDRY GABRIEL'),
		lastName: capitalCadena('ROSALES MORALES'),
		type: 'regular',
		email: 'krosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15644,
		nationality: 'V'.toUpperCase(),
		cedula: 30142054,
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
		userName: 'yudelgado'.toLowerCase(),
		name: capitalCadena('YUREILYS CAROLINA'),
		lastName: capitalCadena('DELGADO CHACON'),
		type: 'regular',
		email: 'yudelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15645,
		nationality: 'V'.toUpperCase(),
		cedula: 27037183,
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
		userName: 'anmoya'.toLowerCase(),
		name: capitalCadena('ANGELICA GABRIELA'),
		lastName: capitalCadena('MOYA ALVINS'),
		type: 'regular',
		email: 'anmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15649,
		nationality: 'V'.toUpperCase(),
		cedula: 30507735,
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
		userName: 'frhernandez'.toLowerCase(),
		name: capitalCadena('FRANYELIS VIRGINIA'),
		lastName: capitalCadena('HERNANDEZ SOLORZANO'),
		type: 'regular',
		email: 'frhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15650,
		nationality: 'V'.toUpperCase(),
		cedula: 24182631,
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
		userName: 'lcontreras'.toLowerCase(),
		name: capitalCadena('LEONIDAS '),
		lastName: capitalCadena('CONTRERAS CONTRERAS'),
		type: 'regular',
		email: 'lcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15661,
		nationality: 'V'.toUpperCase(),
		cedula: 7927969,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcordova'.toLowerCase(),
		name: capitalCadena('JULENNY OMERYS'),
		lastName: capitalCadena('CORDOVA GIL'),
		type: 'regular',
		email: 'jcordova@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15685,
		nationality: 'V'.toUpperCase(),
		cedula: 14769307,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kquintana'.toLowerCase(),
		name: capitalCadena('KATHERINE YEIS'),
		lastName: capitalCadena('QUINTANA MEZA'),
		type: 'regular',
		email: 'kquintana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15687,
		nationality: 'V'.toUpperCase(),
		cedula: 27798635,
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
		userName: 'regonzalez'.toLowerCase(),
		name: capitalCadena('REINALDO ANTONIO'),
		lastName: capitalCadena('GONZALEZ RIVERO'),
		type: 'regular',
		email: 'regonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15691,
		nationality: 'V'.toUpperCase(),
		cedula: 17402312,
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
		userName: 'glorodriguez'.toLowerCase(),
		name: capitalCadena('GLORIA JOHANA'),
		lastName: capitalCadena('RODRIGUEZ MARTINEZ'),
		type: 'regular',
		email: 'glorodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6263,
		nationality: 'V'.toUpperCase(),
		cedula: 19200003,
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
		userName: 'edaguilera'.toLowerCase(),
		name: capitalCadena('EDWIN JESUS'),
		lastName: capitalCadena('AGUILERA NAVA'),
		type: 'regular',
		email: 'edaguilera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15620,
		nationality: 'V'.toUpperCase(),
		cedula: 22482205,
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
		userName: 'mayflores'.toLowerCase(),
		name: capitalCadena('MAYLIN JEANNETTE'),
		lastName: capitalCadena('FLORES DE ROA'),
		type: 'regular',
		email: 'mayflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15623,
		nationality: 'V'.toUpperCase(),
		cedula: 13139811,
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
		userName: 'falana'.toLowerCase(),
		name: capitalCadena('FABIOLA ALTAGRACIA'),
		lastName: capitalCadena('ALAÑA OLIVARES'),
		type: 'regular',
		email: 'falana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15669,
		nationality: 'V'.toUpperCase(),
		cedula: 19099090,
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
		userName: 'mpalma'.toLowerCase(),
		name: capitalCadena('MARY CRISTINA'),
		lastName: capitalCadena('PALMA VILLALOBOS'),
		type: 'regular',
		email: 'mpalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15705,
		nationality: 'V'.toUpperCase(),
		cedula: 30940372,
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
		userName: 'varodriguez'.toLowerCase(),
		name: capitalCadena('VALERIA ESTEFANY'),
		lastName: capitalCadena('RODRIGUEZ FERNANDEZ'),
		type: 'regular',
		email: 'varodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15706,
		nationality: 'V'.toUpperCase(),
		cedula: 30740029,
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
		userName: 'yalmaza'.toLowerCase(),
		name: capitalCadena('YOHELIS ALEJANDRA'),
		lastName: capitalCadena('ALMAZA CORNEJO'),
		type: 'regular',
		email: 'yalmaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15708,
		nationality: 'V'.toUpperCase(),
		cedula: 28488261,
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
		userName: 'ngarcia'.toLowerCase(),
		name: capitalCadena('NELISETH DEL CARMEN'),
		lastName: capitalCadena('GARCIA MEDINA'),
		type: 'regular',
		email: 'ngarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15710,
		nationality: 'V'.toUpperCase(),
		cedula: 23757476,
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
		userName: 'jchirinos'.toLowerCase(),
		name: capitalCadena('JAHIZEEL CHIQUINQUIRA'),
		lastName: capitalCadena('CHIRINOS ORTEGA'),
		type: 'regular',
		email: 'jchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15712,
		nationality: 'V'.toUpperCase(),
		cedula: 30412479,
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
		userName: 'glmedina'.toLowerCase(),
		name: capitalCadena('GLEIMYS ISMARY'),
		lastName: capitalCadena('MEDINA CHOURIO'),
		type: 'regular',
		email: 'glmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15725,
		nationality: 'V'.toUpperCase(),
		cedula: 27339567,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarraga'.toLowerCase(),
		name: capitalCadena('YOJANY DEL CARMEN'),
		lastName: capitalCadena('ARRAGA BARRETO'),
		type: 'regular',
		email: 'yarraga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15714,
		nationality: 'V'.toUpperCase(),
		cedula: 31048662,
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
		userName: 'anramirez'.toLowerCase(),
		name: capitalCadena('ANA KARIN'),
		lastName: capitalCadena('RAMIREZ CARRERO'),
		type: 'regular',
		email: 'anramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15730,
		nationality: 'V'.toUpperCase(),
		cedula: 23140683,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmorillo'.toLowerCase(),
		name: capitalCadena('MARIA DE LOS ANGELES'),
		lastName: capitalCadena('MORILLO MORILLO'),
		type: 'regular',
		email: 'mmorillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15717,
		nationality: 'V'.toUpperCase(),
		cedula: 28428360,
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
		userName: 'ntravieso'.toLowerCase(),
		name: capitalCadena('NADESKA YUNIRAY'),
		lastName: capitalCadena('TRAVIESO COLMENARES'),
		type: 'regular',
		email: 'ntravieso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8703,
		nationality: 'V'.toUpperCase(),
		cedula: 26219421,
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
		userName: 'entorres'.toLowerCase(),
		name: capitalCadena('ENEIDA PAOLA'),
		lastName: capitalCadena('TORRES RIVERO'),
		type: 'regular',
		email: 'entorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15722,
		nationality: 'V'.toUpperCase(),
		cedula: 25343798,
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
		userName: 'alugo'.toLowerCase(),
		name: capitalCadena('ANGELICA MARIA'),
		lastName: capitalCadena('LUGO CHIRINOS'),
		type: 'regular',
		email: 'alugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15729,
		nationality: 'V'.toUpperCase(),
		cedula: 17841035,
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
		userName: 'galopez'.toLowerCase(),
		name: capitalCadena('GABRIEL ARMANDO'),
		lastName: capitalCadena('LOPEZ NUÑEZ'),
		type: 'regular',
		email: 'galopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15731,
		nationality: 'V'.toUpperCase(),
		cedula: 26658515,
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
		userName: 'mesanchez'.toLowerCase(),
		name: capitalCadena('MELANY YAILYN'),
		lastName: capitalCadena('SANCHEZ RAMIREZ'),
		type: 'regular',
		email: 'mesanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15773,
		nationality: 'V'.toUpperCase(),
		cedula: 17907823,
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
		userName: 'ypaez'.toLowerCase(),
		name: capitalCadena('EZEQUIEL JOSE'),
		lastName: capitalCadena('RIVAS MUDARRA'),
		type: 'regular',
		email: 'ypaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15762,
		nationality: 'V'.toUpperCase(),
		cedula: 20063893,
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
		userName: 'dmillan'.toLowerCase(),
		name: capitalCadena('YANITZA JOSE'),
		lastName: capitalCadena('RONDON RODRIGUEZ'),
		type: 'regular',
		email: 'dmillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15764,
		nationality: 'V'.toUpperCase(),
		cedula: 16485261,
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
		userName: 'jecordero'.toLowerCase(),
		name: capitalCadena('JENNIFER JACKELINE'),
		lastName: capitalCadena('CORDERO GUTIERREZ'),
		type: 'regular',
		email: 'jecordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15791,
		nationality: 'V'.toUpperCase(),
		cedula: 24728629,
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
		userName: 'arzambrano'.toLowerCase(),
		name: capitalCadena('ARELIS JOSEFINA'),
		lastName: capitalCadena('ZAMBRANO RIVERO'),
		type: 'regular',
		email: 'arzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15794,
		nationality: 'V'.toUpperCase(),
		cedula: 15043395,
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
		userName: 'avelandria'.toLowerCase(),
		name: capitalCadena('ANDERSON GABRIEL'),
		lastName: capitalCadena('VELANDRIA MORALES'),
		type: 'regular',
		email: 'avelandria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15818,
		nationality: 'V'.toUpperCase(),
		cedula: 28338435,
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
		userName: 'mjaramillo'.toLowerCase(),
		name: capitalCadena('MARY CARMEN'),
		lastName: capitalCadena('JARAMILLO NEGRETE'),
		type: 'regular',
		email: 'mjaramillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15823,
		nationality: 'V'.toUpperCase(),
		cedula: 26895423,
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
		userName: 'pbravo'.toLowerCase(),
		name: capitalCadena('PAOLA MARINA'),
		lastName: capitalCadena('BRAVO JASPE'),
		type: 'regular',
		email: 'pbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15842,
		nationality: 'V'.toUpperCase(),
		cedula: 27796493,
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
		userName: 'encastellanos'.toLowerCase(),
		name: capitalCadena('ENYERLYN LUYMAR'),
		lastName: capitalCadena('CASTELLANOS RAMIREZ'),
		type: 'regular',
		email: 'encastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15795,
		nationality: 'V'.toUpperCase(),
		cedula: 30890796,
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
		userName: 'slejarazo'.toLowerCase(),
		name: capitalCadena('SUJEHY AUGUSMAR'),
		lastName: capitalCadena('LEJARAZO ALVAREZ'),
		type: 'regular',
		email: 'slejarazo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15805,
		nationality: 'V'.toUpperCase(),
		cedula: 21335530,
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
		userName: 'frramirez'.toLowerCase(),
		name: capitalCadena('FRANGELY CAROLINA'),
		lastName: capitalCadena('RAMIREZ ALARCON'),
		type: 'regular',
		email: 'frramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15849,
		nationality: 'V'.toUpperCase(),
		cedula: 21064289,
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
		userName: 'mariadiaz'.toLowerCase(),
		name: capitalCadena('MARIA MILAGROS'),
		lastName: capitalCadena('DIAZ SALAS'),
		type: 'regular',
		email: 'mariadiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15877,
		nationality: 'V'.toUpperCase(),
		cedula: 24224151,
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
		userName: 'adacosta'.toLowerCase(),
		name: capitalCadena('ALEXANDER '),
		lastName: capitalCadena('DA COSTA VIERAS'),
		type: 'regular',
		email: 'adacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15863,
		nationality: 'V'.toUpperCase(),
		cedula: 15188040,
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
		userName: 'lusifontes'.toLowerCase(),
		name: capitalCadena('LUISANA IRAIZY'),
		lastName: capitalCadena('SIFONTES PACHECO'),
		type: 'regular',
		email: 'lusifontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15893,
		nationality: 'V'.toUpperCase(),
		cedula: 29501817,
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
		userName: 'ycamacho'.toLowerCase(),
		name: capitalCadena('YUVICENT YULISMAR'),
		lastName: capitalCadena('CAMACHO MARCANO'),
		type: 'regular',
		email: 'ycamacho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15904,
		nationality: 'V'.toUpperCase(),
		cedula: 24177899,
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
		userName: 'yvieira'.toLowerCase(),
		name: capitalCadena('YSABEL '),
		lastName: capitalCadena('VIEIRA DE SOUSA'),
		type: 'regular',
		email: 'yvieira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15906,
		nationality: 'V'.toUpperCase(),
		cedula: 10457745,
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
		userName: 'jyendi'.toLowerCase(),
		name: capitalCadena('JETZIKA CAROLINA'),
		lastName: capitalCadena('YENDI GOMEZ'),
		type: 'regular',
		email: 'jyendi@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15880,
		nationality: 'V'.toUpperCase(),
		cedula: 19316101,
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
		userName: 'calara'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('LARA ARMAS'),
		type: 'regular',
		email: 'calara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15923,
		nationality: 'V'.toUpperCase(),
		cedula: 14935791,
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
		userName: 'romartinez'.toLowerCase(),
		name: capitalCadena('ROSIMAR DEL VALLE'),
		lastName: capitalCadena('MARTINEZ TABEROA'),
		type: 'regular',
		email: 'romartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15932,
		nationality: 'V'.toUpperCase(),
		cedula: 25387048,
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
		userName: 'ergarcia'.toLowerCase(),
		name: capitalCadena('ERIKA PAOLA'),
		lastName: capitalCadena('GARCIA BALMACEDA'),
		type: 'regular',
		email: 'ergarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15962,
		nationality: 'V'.toUpperCase(),
		cedula: 25489217,
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
		userName: 'yamador'.toLowerCase(),
		name: capitalCadena('YELITZA JOSEFINA'),
		lastName: capitalCadena('AMADOR CARRILLO'),
		type: 'regular',
		email: 'yamador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16027,
		nationality: 'V'.toUpperCase(),
		cedula: 12382662,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmontiel'.toLowerCase(),
		name: capitalCadena('LUZNEY '),
		lastName: capitalCadena('MONTIEL AVENDAÑO'),
		type: 'regular',
		email: 'lmontiel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16049,
		nationality: 'V'.toUpperCase(),
		cedula: 14833671,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'orojas'.toLowerCase(),
		name: capitalCadena('OSMAR JOSUE'),
		lastName: capitalCadena('ROJAS VENEGAS'),
		type: 'regular',
		email: 'orojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16024,
		nationality: 'V'.toUpperCase(),
		cedula: 30975379,
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
		userName: 'hmatute'.toLowerCase(),
		name: capitalCadena('HAROLD SEGUNDO'),
		lastName: capitalCadena('MATUTE MORALES'),
		type: 'regular',
		email: 'hmatute@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16048,
		nationality: 'V'.toUpperCase(),
		cedula: 25883035,
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
		userName: 'mihernandez'.toLowerCase(),
		name: capitalCadena('MIGCHAEL ALEJANDRO'),
		lastName: capitalCadena('HERNANDEZ ARRIETA'),
		type: 'regular',
		email: 'mihernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16070,
		nationality: 'V'.toUpperCase(),
		cedula: 21357106,
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
		userName: 'yrincones'.toLowerCase(),
		name: capitalCadena('YAMILET DEL VALLE'),
		lastName: capitalCadena('RINCONES GUZMAN'),
		type: 'regular',
		email: 'yrincones@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16071,
		nationality: 'V'.toUpperCase(),
		cedula: 11421692,
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
		userName: 'jhenriquez'.toLowerCase(),
		name: capitalCadena('JEINNY MILAGRO'),
		lastName: capitalCadena('HENRIQUEZ APONTE'),
		type: 'regular',
		email: 'jhenriquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16072,
		nationality: 'V'.toUpperCase(),
		cedula: 24909543,
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
		userName: 'asaldeno'.toLowerCase(),
		name: capitalCadena('ALANIS LOURDES'),
		lastName: capitalCadena('SALDEÑO YSAYA'),
		type: 'regular',
		email: 'asaldeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16073,
		nationality: 'V'.toUpperCase(),
		cedula: 27863821,
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
		userName: 'walcala'.toLowerCase(),
		name: capitalCadena('WILLIAM MIGUEL'),
		lastName: capitalCadena('ALCALA PRATO'),
		type: 'regular',
		email: 'walcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16178,
		nationality: 'V'.toUpperCase(),
		cedula: 19084387,
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
		userName: 'angyrodriguez'.toLowerCase(),
		name: capitalCadena('ANGYBELL MAILITH'),
		lastName: capitalCadena('RODRIGUEZ ORTEGA'),
		type: 'regular',
		email: 'angyrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16187,
		nationality: 'V'.toUpperCase(),
		cedula: 14395577,
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
		userName: 'gloreto'.toLowerCase(),
		name: capitalCadena('GENESIS NAZARETH'),
		lastName: capitalCadena('LORETO ARMAS'),
		type: 'regular',
		email: 'gloreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16117,
		nationality: 'V'.toUpperCase(),
		cedula: 26299430,
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
		userName: 'corozco'.toLowerCase(),
		name: capitalCadena('CAROL VIVIANA'),
		lastName: capitalCadena('OROZCO GONZALEZ'),
		type: 'regular',
		email: 'corozco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16150,
		nationality: 'V'.toUpperCase(),
		cedula: 25168359,
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
		userName: 'irestrepo'.toLowerCase(),
		name: capitalCadena('ISCHELL MAUREN'),
		lastName: capitalCadena('RESTREPO PEÑALOZA'),
		type: 'regular',
		email: 'irestrepo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16195,
		nationality: 'V'.toUpperCase(),
		cedula: 26747178,
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
		userName: 'djoa'.toLowerCase(),
		name: capitalCadena('DANIEL ALEXANDER'),
		lastName: capitalCadena('JOA JIMENEZ'),
		type: 'regular',
		email: 'djoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16151,
		nationality: 'V'.toUpperCase(),
		cedula: 23567139,
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
		userName: 'kigutierrez'.toLowerCase(),
		name: capitalCadena('KILSKENNY LISBETH'),
		lastName: capitalCadena('GUTIERREZ SALCEDO'),
		type: 'regular',
		email: 'kigutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16208,
		nationality: 'V'.toUpperCase(),
		cedula: 12785456,
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
		userName: 'rarodriguez'.toLowerCase(),
		name: capitalCadena('RAFAEL ENRIQUE'),
		lastName: capitalCadena('RODRIGUEZ GODOY'),
		type: 'regular',
		email: 'rarodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16189,
		nationality: 'V'.toUpperCase(),
		cedula: 14473260,
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
		userName: 'motero'.toLowerCase(),
		name: capitalCadena('MADA DEL LOURDES'),
		lastName: capitalCadena('OTERO ESPINOZA'),
		type: 'regular',
		email: 'motero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16217,
		nationality: 'V'.toUpperCase(),
		cedula: 11058101,
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
		userName: 'lfuenmayor'.toLowerCase(),
		name: capitalCadena('LIMAR DEL CARMEN'),
		lastName: capitalCadena('FUENMAYOR '),
		type: 'regular',
		email: 'lfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16193,
		nationality: 'V'.toUpperCase(),
		cedula: 11421881,
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
		userName: 'joseruiz'.toLowerCase(),
		name: capitalCadena('JOSE ANGEL'),
		lastName: capitalCadena('RUIZ MAITA'),
		type: 'regular',
		email: 'joseruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16204,
		nationality: 'V'.toUpperCase(),
		cedula: 17871488,
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
		userName: 'gtorrealba'.toLowerCase(),
		name: capitalCadena('GERYMAR AYARITH'),
		lastName: capitalCadena('TORREALBA PINTO'),
		type: 'regular',
		email: 'gtorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14049,
		nationality: 'V'.toUpperCase(),
		cedula: 22347270,
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
		userName: 'aalvarado'.toLowerCase(),
		name: capitalCadena('ALEXANDRA CAROLINA'),
		lastName: capitalCadena('ALVARADO SOSA'),
		type: 'regular',
		email: 'aalvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16242,
		nationality: 'V'.toUpperCase(),
		cedula: 19733388,
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
		userName: 'mariadsanchez'.toLowerCase(),
		name: capitalCadena('MARIA DANIELA'),
		lastName: capitalCadena('SANCHEZ DURAN'),
		type: 'regular',
		email: 'mariadsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16216,
		nationality: 'V'.toUpperCase(),
		cedula: 19600197,
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
		userName: 'palmeida'.toLowerCase(),
		name: capitalCadena('PAOLA FRANCHESCA'),
		lastName: capitalCadena('ALMEIDA CARMONA'),
		type: 'regular',
		email: 'palmeida@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16219,
		nationality: 'V'.toUpperCase(),
		cedula: 20651128,
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
		userName: 'jubarrios'.toLowerCase(),
		name: capitalCadena('JUAN JOSE'),
		lastName: capitalCadena('BARRIOS BRICEÑO'),
		type: 'regular',
		email: 'jubarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16222,
		nationality: 'V'.toUpperCase(),
		cedula: 20790328,
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
		userName: 'brmendoza'.toLowerCase(),
		name: capitalCadena('BREYDA ISABEL'),
		lastName: capitalCadena('MENDOZA RONDON'),
		type: 'regular',
		email: 'brmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16252,
		nationality: 'V'.toUpperCase(),
		cedula: 18315070,
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
		userName: 'aduque'.toLowerCase(),
		name: capitalCadena('ALVARO GIOVANNY'),
		lastName: capitalCadena('DUQUE DELGADO'),
		type: 'regular',
		email: 'aduque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16257,
		nationality: 'V'.toUpperCase(),
		cedula: 18815001,
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
		userName: 'yoblanco'.toLowerCase(),
		name: capitalCadena('YOLEIDA JOSEFINA'),
		lastName: capitalCadena('BLANCO GONZALEZ'),
		type: 'regular',
		email: 'yoblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16246,
		nationality: 'V'.toUpperCase(),
		cedula: 7873501,
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
		userName: 'marlopez'.toLowerCase(),
		name: capitalCadena('MARYURY NAZARET'),
		lastName: capitalCadena('LOPEZ CHANAGA'),
		type: 'regular',
		email: 'marlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15882,
		nationality: 'V'.toUpperCase(),
		cedula: 17442231,
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
		userName: 'zmejias'.toLowerCase(),
		name: capitalCadena('ZULAY DEYANIRA'),
		lastName: capitalCadena('MEJIAS RIOS'),
		type: 'regular',
		email: 'zmejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16260,
		nationality: 'V'.toUpperCase(),
		cedula: 7923004,
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
		userName: 'efuenmayor'.toLowerCase(),
		name: capitalCadena('ELIZABETH RAMONA'),
		lastName: capitalCadena('FUENMAYOR GARCIA'),
		type: 'regular',
		email: 'efuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16271,
		nationality: 'V'.toUpperCase(),
		cedula: 10446924,
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
		userName: 'gagreda'.toLowerCase(),
		name: capitalCadena('GABRIEL JOSUE'),
		lastName: capitalCadena('AGREDA BRACHO'),
		type: 'regular',
		email: 'gagreda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16272,
		nationality: 'V'.toUpperCase(),
		cedula: 33539813,
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
		userName: 'dcaridad'.toLowerCase(),
		name: capitalCadena('DIAMELYS SIRAMAD'),
		lastName: capitalCadena('CARIDAD PEÑA'),
		type: 'regular',
		email: 'dcaridad@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16289,
		nationality: 'V'.toUpperCase(),
		cedula: 13298265,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'esandoval'.toLowerCase(),
		name: capitalCadena('EGDDA KRISMAR'),
		lastName: capitalCadena('SANDOVAL PEREIRA'),
		type: 'regular',
		email: 'esandoval@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16274,
		nationality: 'V'.toUpperCase(),
		cedula: 19160753,
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
		userName: 'yrios'.toLowerCase(),
		name: capitalCadena('YUMAIRI COROMOTO'),
		lastName: capitalCadena('RIOS CEGARRA'),
		type: 'regular',
		email: 'yrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16286,
		nationality: 'V'.toUpperCase(),
		cedula: 16730576,
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
		userName: 'ldiaz'.toLowerCase(),
		name: capitalCadena('LUIS OMAR'),
		lastName: capitalCadena('DIAZ LINARES'),
		type: 'regular',
		email: 'ldiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16287,
		nationality: 'V'.toUpperCase(),
		cedula: 18005268,
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
		userName: 'maracosta'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('ACOSTA '),
		type: 'regular',
		email: 'maracosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16295,
		nationality: 'V'.toUpperCase(),
		cedula: 25684089,
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
		userName: 'spaz'.toLowerCase(),
		name: capitalCadena('SERGIO JOSE'),
		lastName: capitalCadena('PAZ MARTINEZ'),
		type: 'regular',
		email: 'spaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16298,
		nationality: 'V'.toUpperCase(),
		cedula: 15286520,
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
		userName: 'amestre'.toLowerCase(),
		name: capitalCadena('ALBERTO JOSE'),
		lastName: capitalCadena('MESTRE GARCIA'),
		type: 'regular',
		email: 'amestre@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16302,
		nationality: 'V'.toUpperCase(),
		cedula: 16987101,
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
		userName: 'mirivas'.toLowerCase(),
		name: capitalCadena('MIREYA DEL CARMEN'),
		lastName: capitalCadena('RIVAS BRIZUELA'),
		type: 'regular',
		email: 'mirivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16307,
		nationality: 'V'.toUpperCase(),
		cedula: 10583294,
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
		userName: 'aurgonzalez'.toLowerCase(),
		name: capitalCadena('AURELINA JOSEFINA'),
		lastName: capitalCadena('GONZALEZ DOMINGUEZ'),
		type: 'regular',
		email: 'aurgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16309,
		nationality: 'V'.toUpperCase(),
		cedula: 11904672,
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
		userName: 'mpolanco'.toLowerCase(),
		name: capitalCadena('MARIA GABRIELA'),
		lastName: capitalCadena('POLANCO INSIGNARE'),
		type: 'regular',
		email: 'mpolanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16303,
		nationality: 'V'.toUpperCase(),
		cedula: 29842574,
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
		userName: 'josmedina'.toLowerCase(),
		name: capitalCadena('JOSE CARLOS'),
		lastName: capitalCadena('MEDINA PEREIRA'),
		type: 'regular',
		email: 'josmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16305,
		nationality: 'V'.toUpperCase(),
		cedula: 18371090,
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
		userName: 'dlaguna'.toLowerCase(),
		name: capitalCadena('DANN LEIFF'),
		lastName: capitalCadena('LAGUNA MARTINEZ'),
		type: 'regular',
		email: 'dlaguna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16334,
		nationality: 'V'.toUpperCase(),
		cedula: 14832554,
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
		userName: 'gcubici'.toLowerCase(),
		name: capitalCadena('GHEORGHINA YAMILETH'),
		lastName: capitalCadena('CUBICI HERNANDEZ'),
		type: 'regular',
		email: 'gcubici@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16346,
		nationality: 'V'.toUpperCase(),
		cedula: 20449194,
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
		userName: 'jsilva'.toLowerCase(),
		name: capitalCadena('JOEGLIS JOSEFINA'),
		lastName: capitalCadena('SILVA ACOSTA'),
		type: 'regular',
		email: 'jsilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16364,
		nationality: 'V'.toUpperCase(),
		cedula: 18482154,
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
		userName: 'aarias'.toLowerCase(),
		name: capitalCadena('AMIRCAR JOSE'),
		lastName: capitalCadena('ARIAS EIZAGA'),
		type: 'regular',
		email: 'aarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16385,
		nationality: 'V'.toUpperCase(),
		cedula: 16828279,
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
		userName: 'nbastidas'.toLowerCase(),
		name: capitalCadena('NURY YANETH'),
		lastName: capitalCadena('BASTIDAS DELGADO'),
		type: 'regular',
		email: 'nbastidas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16386,
		nationality: 'V'.toUpperCase(),
		cedula: 12960183,
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
		userName: 'kramirez'.toLowerCase(),
		name: capitalCadena('KAILET CIRIMAR'),
		lastName: capitalCadena('RAMIREZ MONTAÑEZ'),
		type: 'regular',
		email: 'kramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16387,
		nationality: 'V'.toUpperCase(),
		cedula: 18804424,
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
		userName: 'ossanchez'.toLowerCase(),
		name: capitalCadena('OSWALDO ELIAS'),
		lastName: capitalCadena('SANCHEZ DELGADO'),
		type: 'regular',
		email: 'ossanchez@bnc.com,ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16401,
		nationality: 'V'.toUpperCase(),
		cedula: 27257040,
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
		userName: 'czambrano'.toLowerCase(),
		name: capitalCadena('CAROLINA ANAIZ'),
		lastName: capitalCadena('ZAMBRANO CAMACHO '),
		type: 'regular',
		email: 'czambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16429,
		nationality: 'V'.toUpperCase(),
		cedula: 10669047,
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
		userName: 'anunez'.toLowerCase(),
		name: capitalCadena('ALEXANDER JOSE'),
		lastName: capitalCadena('NUÑEZ DELGADO'),
		type: 'regular',
		email: 'anunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16441,
		nationality: 'V'.toUpperCase(),
		cedula: 12041677,
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
		userName: 'mardiaz'.toLowerCase(),
		name: capitalCadena('MARCO ANTONIO'),
		lastName: capitalCadena('DIAZ SOTELDO'),
		type: 'regular',
		email: 'mardiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13755,
		nationality: 'V'.toUpperCase(),
		cedula: 7996536,
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
		userName: 'juseche'.toLowerCase(),
		name: capitalCadena('JOSE RAMON'),
		lastName: capitalCadena('USECHE '),
		type: 'regular',
		email: 'juseche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14232,
		nationality: 'V'.toUpperCase(),
		cedula: 9335244,
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
		userName: 'frrodriguez'.toLowerCase(),
		name: capitalCadena('FRANCISCO ALBERTO'),
		lastName: capitalCadena('RODRIGUEZ REQUENA'),
		type: 'regular',
		email: 'frrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14856,
		nationality: 'V'.toUpperCase(),
		cedula: 8556100,
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
		userName: 'yescalante'.toLowerCase(),
		name: capitalCadena('YVAN ANTONIO'),
		lastName: capitalCadena('ESCALANTE GARCIA'),
		type: 'regular',
		email: 'yescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15911,
		nationality: 'V'.toUpperCase(),
		cedula: 8098770,
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
		userName: 'ysuescuns'.toLowerCase(),
		name: capitalCadena('YOHAN ALBERTO'),
		lastName: capitalCadena('SUESCUNS RIVAS'),
		type: 'regular',
		email: 'ysuescuns@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16420,
		nationality: 'V'.toUpperCase(),
		cedula: 15671215,
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
	}
]
module.exports = { restoSegundaParte }
