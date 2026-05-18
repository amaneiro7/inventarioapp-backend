const { cargosData, cargoOnlyNames } = require('../employee/cargo/cargos')
const { unidadCompleteUpdate } = require('./unindadActualDuplicate')

const updateEmployeeUnidadContratado = [
	{
		cedula: 31045695,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 32132537,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20926)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 14007884,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26819912,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30370730,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id
	},
	{
		cedula: 19421434,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27606091,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 27913188,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30793139,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 29651961,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31408537,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 235)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 26111174,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 30678227,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30908181,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 20935776,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30067231,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31126679,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 26279243,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30261241,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 32767448,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31744022,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 27796618,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31004959,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30435651,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 27794081,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30124693,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	}
]

/**
 * Función para identificar qué empleados no lograron encontrar su unidad o cargo
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.unidad_id || !u.cargo_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} empleados con unidad o cargo faltante:`)
		units.forEach((o, index) => {
			if (!o.unidad_id || !o.cargo_id) {
				console.log(
					`  - Registro #${index + 1} (Cedula: ${o.cedula}): ${!o.unidad_id ? '[Unidad no encontrada]' : ''} ${!o.cargo_id ? '[Cargo no encontrado]' : ''}`
				)
			}
		})
	} else {
		console.log('\n✅ Todos los empleados tienen unidad_id y cargo_id asignados.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(updateEmployeeUnidadContratado)
}

module.exports = {
	updateEmployeeUnidadContratado
}
