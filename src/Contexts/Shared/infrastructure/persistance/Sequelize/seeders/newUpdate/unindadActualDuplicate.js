const { randomUUID } = require('node:crypto')
const { updateNivel6 } = require('./unindadActualNivel6')
const { capitalCadena, cleanText } = require('./capitalCadena')
const now = new Date()

const finalCheck = [
	{
		id: 'f94cae19-e6d7-4490-a935-7b2492fd5cde',
		name: capitalCadena('GERENCIA DE NEGOCIOS CAPITAL I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 1010200301,
		isUnitActive: true,
		parent_id: updateNivel6.find(d => d.codigoInterno === 10102003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '36e68853-5529-4cb1-9033-d728b39afa0e',
		name: capitalCadena('GERENCIA DE NEGOCIOS ORIENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20927004,
		isUnitActive: true,
		parent_id: updateNivel6.find(d => d.codigoInterno === 20927)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1603aa12-a7e3-4fe7-9389-63f29d42ffd9',
		name: capitalCadena('GERENCIA DE NEGOCIOS OCCIDENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20927003,
		isUnitActive: true,
		parent_id: updateNivel6.find(d => d.codigoInterno === 20927)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '25aa6580-bc03-4adc-ac6f-d2b97a6e7f2e',
		name: capitalCadena('GERENCIA DE NEGOCIOS CAPITAL II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20927002,
		isUnitActive: true,
		parent_id: updateNivel6.find(d => d.codigoInterno === 20927)?.id,
		created_at: now,
		updated_at: now
	}
]

// 3. Combinamos ambos resultados para obtener la lista final
const unidadCompleteUpdate = [...updateNivel6, ...finalCheck].sort((a, b) => {
	if (a.level !== b.level) {
		return a.level - b.level
	}
	return a.codigoInterno - b.codigoInterno
})

// for (let index = 0; index < finalCheck.length; index++) {
// 	console.log(randomUUID())
// }
console.log('Level 6 Tiene:', finalCheck.length)
console.log('Level 6 Tiene:', 14 + 79 + 185 + 188 + 37)
console.log('Level 6 Actualizado:', updateNivel6.filter(d => d.isUnitActive === true).length)

/**
 * Función para identificar qué unidades no lograron encontrar a su padre
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.parent_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} unidades de Nivel 6 sin parent_id:`)
		orphans.forEach(o => {
			console.log(`  - Nombre: "${o.name}" | Código: ${o.codigoInterno}`)
		})
	} else {
		console.log('\n✅ Todas las unidades de Nivel 6 tienen un parent_id asignado.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(finalCheck)
}

module.exports = { unidadCompleteUpdate, finalCheck, checkOrphanUnits }
