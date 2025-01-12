const { cargosData, cargoOnlyNames } = require("../cargo/cargos")
const { departamentoData, departamentoOnlyNames } = require("./departamento")

const cargoDepartamentoAgenciaData = [
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN BERNARDINO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN BERNARDINO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN BERNARDINO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN BERNARDINO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN BERNARDINO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIGIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIGIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIGIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIGIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIGIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA URBINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA URBINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA URBINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA URBINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA URBINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO I - FALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO I - FALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO I - FALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO I - FALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CORO I - FALCON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CLUB LA LAGUNITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CLUB LA LAGUNITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHORONI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHORONI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHORONI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MATURIN II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MATURIN II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MATURIN II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MATURIN II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MATURIN II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CLUB PUERTO AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CLUB PUERTO AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SOMBRERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SOMBRERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SOMBRERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SOMBRERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA MONICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA MONICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA MONICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA MONICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA MONICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN IGNACIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIÑEDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIÑEDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIÑEDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIÑEDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL VIÑEDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIPE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIPE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIPE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIPE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIPE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARINAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CARLOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CARLOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CARLOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CARLOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DABAJURO II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DABAJURO II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DABAJURO II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['DABAJURO II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA FE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA FE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA EUDIVIGIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA EUDIVIGIS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOLEITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOLEITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOLEITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOLEITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOLEITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO PIRITU'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO PIRITU'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO PIRITU'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO PIRITU'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TIGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TOCUYITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TOCUYITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TOCUYITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TOCUYITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TOCUYITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MONTALBAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MONTALBAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MONTALBAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ROSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ROSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ROSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ROSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ROSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TINAQUILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TINAQUILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TINAQUILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TINAQUILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL PARAISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL PARAISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL PARAISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL PARAISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL PARAISO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CITY MARKET'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CITY MARKET'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CITY MARKET'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CITY MARKET'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNIVERSIDAD CATOLICA ANDRES BELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNIVERSIDAD CATOLICA ANDRES BELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUINTA CRESPO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUINTA CRESPO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUINTA CRESPO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUINTA CRESPO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUINTA CRESPO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUIBOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUIBOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUIBOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUIBOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['QUIBOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARORA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARORA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARORA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARORA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MARQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MARQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MARQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MARQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACARACUAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACARACUAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACARACUAY'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['JUAN GRIEGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['JUAN GRIEGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['JUAN GRIEGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['JUAN GRIEGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['JUAN GRIEGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUANARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUANARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUANARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUANARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GUANARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUREN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUREN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUREN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUREN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUREN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CUMANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOCONO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOCONO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOCONO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOCONO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BOCONO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TUCUPIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRUJILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRUJILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRUJILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRUJILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PLATA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PLATA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PLATA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PLATA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA LA MAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA LA MAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA LA MAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA LA MAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CATIA LA MAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL JUNQUITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL JUNQUITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL JUNQUITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL JUNQUITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL JUNQUITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MENE GRANDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MENE GRANDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MENE GRANDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MENE GRANDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MENE GRANDE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CABIMAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA BARBARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA BARBARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA BARBARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA BARBARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CONCEPCION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CONCEPCION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CONCEPCION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA CONCEPCION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CASIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACHIQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACHIQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACHIQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACHIQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MACHIQUES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARRASQUERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARRASQUERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CARRASQUERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['INDIO MARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['INDIO MARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['INDIO MARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['INDIO MARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['INDIO MARA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANETA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANETA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANETA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANETA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SABANETA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALLE 72'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALLE 72'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALLE 72'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALLE 72'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALLE 72'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LAS MERCEDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TRANSITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TRANSITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TRANSITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TRANSITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL TRANSITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SAMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SAMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SAMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL SAMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA LIMPIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA LIMPIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA LIMPIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA LIMPIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA LIMPIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA RITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA RITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA RITA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAJA SECA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAJA SECA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAJA SECA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAJA SECA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAJA SECA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MOJAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MOJAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MOJAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MOJAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MENITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MENITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL MENITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL HATILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL HATILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL HATILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL HATILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL HATILLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIX'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIX'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIX'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN FELIX'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['UNARE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAVISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAVISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAVISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAVISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAVISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AEROPUERTO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AEROPUERTO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EUROBUILDING'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ALTAMIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ROMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ROMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ROMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ROMAN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAUCAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAUCAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAUCAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAUCAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAUCAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['RIO CHICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['RIO CHICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['RIO CHICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['RIO CHICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['RIO CHICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VELA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VELA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA VELA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ISABEL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ISABEL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ISABEL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SANTA ISABEL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['NAIGUATÁ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['NAIGUATÁ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['NAIGUATÁ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['NAIGUATÁ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['NAIGUATÁ'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA GUAIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA GUAIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA GUAIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA GUAIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV. VICTORIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ACARIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ACARIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ACARIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ACARIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['ACARIGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO CABELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO CABELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO CABELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO CABELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['PUERTO CABELLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA SUR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DE CURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DE CURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DE CURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DE CURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['VILLA DE CURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA QUIZANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA QUIZANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA QUIZANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA QUIZANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['LA QUIZANDA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['EL ROSAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
]

module.exports = { cargoDepartamentoAgenciaData } 