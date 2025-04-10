const { cargosData, cargoOnlyNames } = require('../cargo/cargos')
const { VPEData, VPEOnlyNames } = require('./vicepresidenciaEjecutiva')


const cargoVPEData = [
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR INTERNO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['DEFENSORIA DEL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['DEFENSORIA DEL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DEFENSOR DEL CLIENTE'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['DEFENSORIA DEL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['DEFENSORIA DEL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['PRESIDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['SECRETARIA JUNTA DIRECTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE DE DIRECCION'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICIAL DE CUMPLIMIENTO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO DE NEGOCIOS'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO EXTERNO'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
    },
    {
        vicepresidenciaEjecutivaId: VPEData.filter(dep => dep.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE EJECUTIVO'])[0].id
    },

]

module.exports = { cargoVPEData }
