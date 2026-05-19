const { capitalCadena } = require('./capitalCadena')
const { unionCoord } = require('./newCoordinacion')
const now = new Date()
const level2Actual = [
	{
		name: capitalCadena('PRESIDENCIA'),
		level: 2,
		codigoInterno: 101,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 1)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('AUDITORIA INTERNA'),
		level: 2,
		codigoInterno: 103,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 1)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('UNIDAD ADMON INTEGRAL DE RIESGOS'),
		level: 2,
		codigoInterno: 106,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 1)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('DEFENSORIA DEL CLIENTE'),
		level: 2,
		codigoInterno: 107,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 1)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. SERVICIOS JURÍDICOS'),
		level: 2,
		codigoInterno: 204,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. FINANZAS'),
		level: 2,
		codigoInterno: 205,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. BANCA CORPORATIVA NACIONAL'),
		level: 2,
		codigoInterno: 208,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. DE BANCA COMERCIAL'),
		level: 2,
		codigoInterno: 209,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. INGENIERIA TECNOLÓGICA'),
		level: 2,
		codigoInterno: 210,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. GESTIÓN DEL RIESGO'),
		level: 2,
		codigoInterno: 214,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. OPERACIONES Y ADMINISTRACIÓN'),
		level: 2,
		codigoInterno: 216,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'),
		level: 2,
		codigoInterno: 228,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. SEGURIDAD CORPORATIVA Y PREVENCIÓN DEL FRAU'),
		level: 2,
		codigoInterno: 231,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'),
		level: 2,
		codigoInterno: 234,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. BANCA CORPORATIVA MULTINACIONAL & ENERGÍA'),
		level: 2,
		codigoInterno: 235,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		name: capitalCadena('V.P.E. CUMPLIMIENTO'),
		level: 2,
		codigoInterno: 236,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 2)?.id,
		updated_at: now
	},
	{
		id: 'def60643-ab86-4318-b36a-2503669ad706',
		name: capitalCadena('SECRETARÍA DE LA JUNTA DIRECTIVA'),
		level: 2,
		codigoInterno: 108,
		is_unit_active: true,
		parent_id: unionCoord.find(d => d.codigoInterno === 1)?.id,
		updated_at: now
	}
]

// 1. Actualizamos los elementos existentes en unionCoord que coinciden con level2Actual
const updatedFromUnion = unionCoord.map(unis => {
	const found = level2Actual.find(d => d.name.toLowerCase() === unis.name.toLowerCase())
	if (found) {
		return {
			...unis,
			level: found.level,
			codigoInterno: found.codigoInterno,
			isUnitActive: found.is_unit_active,
			parent_id: found.parent_id,
			updated_at: found.updated_at
		}
	}
	return unis
})

// 2. Identificamos los elementos en level2Actual que NO están en unionCoord para agregarlos
const missingInUnion = level2Actual
	.filter(vp => !unionCoord.some(u => u.name.toLowerCase() === vp.name.toLowerCase()))
	.map(vp => ({
		id: vp.id || '',
		name: vp.name,
		level: vp.level,
		codigoInterno: vp.codigoInterno,
		isUnitActive: vp.is_unit_active,
		parent_id: vp.parent_id,
		created_at: now,
		updated_at: now
	}))

// 3. Combinamos ambos resultados para obtener la lista final
const updateNivel2 = [...updatedFromUnion, ...missingInUnion]

console.log('Level 2 Tiene:', level2Actual.length)

/**
 * Función para identificar qué unidades no lograron encontrar a su padre
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.parent_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} unidades de Nivel 2 sin parent_id:`)
		orphans.forEach(o => {
			console.log(`  - Nombre: "${o.name}" | Código: ${o.codigoInterno}`)
		})
	} else {
		console.log('\n✅ Todas las unidades de Nivel 2 tienen un parent_id asignado.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(level2Actual)
}

module.exports = { updateNivel2, level2Actual }
