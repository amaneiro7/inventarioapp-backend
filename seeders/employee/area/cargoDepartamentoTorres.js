const { cargosData, cargoOnlyNames } = require('../cargo/cargos')
const { departamentoData, departamentoOnlyNames } = require('./departamento')

const cargoDepartamentoTorreData = [
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL INSTITUCIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTABILIDAD TDC AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DEPARTAMENTO GESTIÓN DEL GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P.E FINANZAS'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AUDITORIA INTERNA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR INTERNO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE DE DIRECCION'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUMPLIMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COMPRAS I'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. GESTIÓN Y TRASLADO DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CARTERA DE INVERSIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTABILIDAD TDC AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION CONTRATOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS NACIONALES Y ESTADALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE COMPENSACION SALARIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE FORMACION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CREDITOS COMERCIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SOPORTE VIP']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE Y FACTURACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OPERACIONES DE CAMBIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN COMUNICACIONES EXTERNAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN COMUNICACIONES INTERNAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE EMPRENDEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA MÓVIL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA VIRTUAL BNC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN POS - MERCHANT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIO AL CLIENTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS DE AFILIACIÓN POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MARCA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHEF'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DEFENSOR DEL CLIENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA VIRTUAL BNC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIO AL CLIENTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. GESTIÓN Y TRASLADO DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE COMPENSACION SALARIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE FORMACION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE Y FACTURACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OPERACIONES DE CAMBIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN COMUNICACIONES INTERNAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA MÓVIL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EVENTOS E IMAGEN CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MARCA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA RIESGO OPERACIONAL FRONT OFFICE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUMPLIMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COMPRAS I'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CONTROL DE INVENTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CARTERA DE INVERSIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION CONTRATOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS NACIONALES Y ESTADALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INVESTIGACIÓN ECONOMICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DEPARTAMENTO GESTIÓN OPERATIVA ZONA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN COMUNICACIONES EXTERNAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DOMICILIACIÓN POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS DE AFILIACIÓN POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EVENTOS E IMAGEN CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESAS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE BANCA PRIVADA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS GAS Y PETRÓLEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MEDIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA SECTOR TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA EXPERIENCIA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS MULTINACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS SECTOR NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA SECTOR TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA RIESGO OPERACIONAL FRONT OFFICE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE GOBIERNO CORPORATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE COMPRAS'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DEPARTAMENTO GESTIÓN DEL GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INFORMACIÓN FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INVESTIGACIÓN ECONOMICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MERCADO MONETARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PAGOS'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE RENTA FIJA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE VIÁTICOS CONTROL Y REVISORÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA LEGAL'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DEPARTAMENTO GESTIÓN OPERATIVA ZONA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN OPERATIVA ZONA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE COMERCIO EXTERIOR Y ATENCIÓN AL EXPORT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CUSTODIA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SEGUIMIENTO Y CONTROL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS GAS Y PETRÓLEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MEDIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO EXTERNO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MESONERO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TESORERIA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TESORERO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CONTRATOS Y SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CONTROL DE INMUEBLES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. PMO PLANES ESTRATÉGICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ANÁLISIS DE CRÉDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ASEGURAMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SERVICIOS AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESAS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA INSTITUCIONAL PRIVADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE BANCA PRIVADA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA GRANDES EMPRESAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA SECTOR FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CORPORATIVA SECTOR TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL II'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL III'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA INSULAR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA INSULAR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ANDES I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ANDES II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ANDES I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ANDES II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN V']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS GUAYANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ORIENTE SUR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECAUDACIÓN SENIAT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SOLUCIONES INTEGRALES WHATSAPP']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECAUDACIÓN SENIAT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SOLUCIONES INTEGRALES WHATSAPP']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE OPEN BANKING']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS PASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DESARROLLO DE SISTEMAS DE INTEGRACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROYECTOS TÉCNICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD AS-400']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INVESTIGACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE OPEN BANKING']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS PASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DESARROLLO DE SISTEMAS DE INTEGRACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA INTEGRACIÓN DE PLATAFORMAS DISTRIBUIDAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REDES Y COMUNICACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA RECLAMO DE CANALES ELECTRONICOS ZONA 1']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DESARROLLO DE SOTWARE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. GESTIÓN DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CONTROL DE INVENTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN CENTRO ALTERNO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONSULTA, DE PRODUCTOS Y CONTRATOS ESPEC.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MANTENIMENTO FISICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. PLATAFORMA DISTRIBUIDA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CORRESPONDENCIA OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OCCIDENTE II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA OCCIDENTE I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CANALES DIGITALES Y DISTRIBUIDOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ARQUITECTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN BASES DE DATOS DISTRIBUIDA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROYECTOS TÉCNICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SISTEMAS POSTILLION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ADM DE ACCESO DE IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO Y GESTIÓN COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MANTENIMENTO FISICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ARQUITECTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA CENTRALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SISTEMAS POSTILLION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA RECLAMOS DE CANALES ELECTRONICOS ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONSULTA, DE PRODUCTOS Y CONTRATOS ESPEC.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN ADMINISTRATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN IV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CALIDAD DE SERVICIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. OPERACIONES DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ASUNTOS LEGALES'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGIÓN OCCIDENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA ARAGUA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPEC RG. ARAGUA-CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA CARABOBO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA CARABOBO II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACIÓN DE AGENCIAS CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	}
]

module.exports = { cargoDepartamentoTorreData }
