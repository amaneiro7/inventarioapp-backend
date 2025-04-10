const { cargosData, cargoOnlyNames } = require('../cargo/cargos')
const { departamentoData, departamentoOnlyNames } = require('./departamento')

const cargoDepartamentoData = [
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD AS-400'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MERCADO MONETARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE RENTA FIJA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO (BEI)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL (BEI) II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL (BEI) II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. REGIONAL DE NEGOCIOS SECTOR PÚBLICO CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. REGIONAL DE NEGOCIOS SECTOR PÚBLICO CENTRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE (BEI)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO (BEI)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE (BEI)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CARABOBO I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CARABOBO I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II (ADM)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE (ADM)'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF. DE MODELOS DE CALIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF. DE MODELOS DE CALIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORD. CREDITOS COMERCIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN SOPORTE VIP'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL CLIENTE'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
    },
    {
        departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS'])[0].id,
        cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
    },
]

module.exports = { cargoDepartamentoData }


