const { cargosData, cargoOnlyNames } = require('../cargo/cargos')
const { VPOnlyNames, VPData } = require('./vicepresidencia')



const cargoVPEata = [
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MESONERO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHEF'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. APOYO A LA PRESIDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GCIA DE ÁREA PROYECTOS DE DESARROLLO SOSTENIBLE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE GOBIERNO CORPORATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA RIESGO OPERACIONAL FRONT OFFICE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA RIESGO OPERACIONAL FRONT OFFICE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['TESORERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TESORERO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BEI I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BEI II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. EMPRENDIMIENTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BEI III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. BEI III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. CALIDAD DE SERVICIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. PMO PLANES ESTRATÉGICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA TRANSFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaId: VPData.filter(dep => dep.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
]

module.exports = { cargoVPEata }
