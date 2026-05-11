const { randomUUID } = require('node:crypto')
const { updateNivel5 } = require('./unindadActualNivel5')
const { capitalCadena } = require('./capitalCadena')
const now = new Date()

const level6Actual = [
	{
		id: '1113368c-b140-4d5a-8754-5dbc58112fdf',
		name: capitalCadena('COORDINACIÓN CUMPLIMIENTO TRIBUTARIO MUNICIPAL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300101001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '22636b78-6a41-45bc-ac81-687a3afbf713',
		name: capitalCadena('COORDINACIÓN CUMPLIMIENTO TRIBUTARIO ESTADAL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300101003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e897a1de-1ded-44fe-927c-fb9f81cd69e8',
		name: capitalCadena('COORDINACIÓN CONTABILIDAD'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300301002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300301)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '92274922-fdfb-4fea-a3bc-8cea18dd219a',
		name: capitalCadena('COORDINACIÓN INFORMACIÓN FINANCIERA'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300402001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300402)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e94f82df-aab3-4a18-95ca-dc809205b740',
		name: capitalCadena('COORDINACIÓN CONTABILIDAD CANALES ELECTRÓNICOS'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300501001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bd62e885-40fe-47d6-9fb0-0d153c01c2bf',
		name: capitalCadena('COORDINACIÓN COMPENSACIÓN Y PROCESOS CONTABLES'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300501002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '164f506b-d3c3-45ab-bedd-a8e1d51e9ba1',
		name: capitalCadena('COORDINACIÓN TARJETAS Y MEDIOS DE PAGO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2051300501003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2051300501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f5a28efc-1677-4dbe-a303-61aa1def40cf',
		name: capitalCadena('COORDINACIÓN ZONA ARAGUA'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800101001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6d715ad9-75de-4af5-a241-7b2b6c18c28f',
		name: capitalCadena('COORDINACIÓN ZONA LOS LLANOS'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800101002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'da3718cd-2870-455b-afab-4cffe6c148ec',
		name: capitalCadena('COORDINACIÓN ZONA OCCIDENTE I'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800106001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cb403b29-2bef-4e3a-8e3a-30e6d1cbc2a0',
		name: capitalCadena('COORDINACIÓN OCCIDENTE II'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800106002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a2b36813-521d-4513-9065-040028cf9f90',
		name: capitalCadena('COORDINACIÓN ZONA INSULAR'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800107001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800107)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ade72115-dee7-4033-b9b6-f718d7327271',
		name: capitalCadena('COORDINACIÓN UNIDAD MÓVIL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800110001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800110)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e8d8edd9-7132-4320-8389-39bdf8256fe2',
		name: capitalCadena('COORDINACIÓN AGENCIA MÓVIL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800110002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800110)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '85208856-b7a4-4c83-95bc-2237a40380f0',
		name: capitalCadena('COORDINACIÓN ZONA CAPITAL I'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800201002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800201)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e68997c0-4b51-40d7-a8a2-d0e75ba10c51',
		name: capitalCadena('COORDINACIÓN ZONA CAPITAL II'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800201003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800201)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1736e890-167a-4176-ac41-760685835eae',
		name: capitalCadena('COORDINACIÓN ZONA CAPITAL III'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800201004,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800201)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a1a3bed6-a90d-4087-a340-59a05817026a',
		name: capitalCadena('COORDINACIÓN ZONA CARABOBO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2091800204001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2091800204)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e444cd6f-ec19-4f9f-99f7-1b96c13890ba',
		name: capitalCadena('COORDINACIÓN SOPORTE POS CENTRO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2100700601001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2100700601)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '714bc410-8522-4f60-958b-78817841f8d8',
		name: capitalCadena('COORDINACIÓN SOPORTE POS CAPITAL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2100700601002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2100700601)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c992c289-0458-429e-9ac8-0ec411f64817',
		name: capitalCadena('COORDINACIÓN SOPORTE POS-OCCIDENTE'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2100700602002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2100700602)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7e1f1a08-7a37-404c-acb2-31edf6b14ff6',
		name: capitalCadena('COORDINACIÓN REDES Y COMUNICACIONES CARACAS'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2101000501002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2101000501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c7d7209a-24cb-4fa1-922c-313a62201065',
		name: capitalCadena('COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2101000501003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2101000501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '51753fb2-d331-4074-98b5-6dc9e1e54d68',
		name: capitalCadena('COORDINACIÓN CENTRO ALTERNO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2101000701001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2101000701)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dd323c4d-d692-4fc6-883b-a6a342081586',
		name: capitalCadena('COORDINACIÓN PRODUCCIÓN CARACAS'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2101000701003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2101000701)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a05fcf07-fb0a-40df-9d89-417091a8a05a',
		name: capitalCadena('COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161100102001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161100102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '63b1bc13-c031-42d5-9445-1c90fa25d5a5',
		name: capitalCadena('COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161100102003,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161100102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3f96c336-230b-4a4f-9617-4004cb6cad22',
		name: capitalCadena('COORDINACIÓN COMPENSACIÓN SUICHE 7B'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161800101001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161800101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c8d250b0-1e18-4364-ba45-37712c8a3406',
		name: capitalCadena('COORDINACIÓN INTERBANCARIO NACIONAL'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161800101002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161800101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '30621615-3f36-402b-9835-47ce68752584',
		name: capitalCadena('COORDINACIÓN MONEDA EXTRANJERA'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161800102001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161800102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2b0f459f-8144-4b5e-b008-a41ea605f1e8',
		name: capitalCadena('COORDINACIÓN CONTROL Y SEGUIMIENTO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2161800102002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2161800102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '74a21694-44aa-4bc9-a750-1155324cdd5e',
		name: capitalCadena('COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162000101001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162000101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a9f3715c-1a29-45d1-9352-c99e605cac4d',
		name: capitalCadena('COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162000101002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162000101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f2f866c3-3e2a-4bdf-9c3e-4bddfba6062b',
		name: capitalCadena('COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162000102001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162000102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '015a211a-eb70-4d83-9dda-c2d85e28c544',
		name: capitalCadena('COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162000102002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162000102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '86b402d1-878b-4418-b09b-1f71e2ddb9f5',
		name: capitalCadena('COORDINACIÓN GESTIÓN Y TRASLADO DE ACTIVOS'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162300302001,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162300302)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b5d6e710-d91a-4d1e-b88a-25bb0e5d7029',
		name: capitalCadena('COORDINACIÓN CONTROL DE INVENTARIO'),
		level: 6,
		centro_de_costo: null,
		codigoInterno: 2162300302002,
		isUnitActive: true,
		parent_id: updateNivel5.find(d => d.codigoInterno === 2162300302)?.id,
		created_at: now,
		updated_at: now
	}
]

// 1. Actualizamos los elementos existentes en unionCoord que coinciden con vpActual
const updatedFromUnion = updateNivel5.map(unis => {
	const found = level6Actual.find(d => d.name.toLowerCase() === unis.name.toLowerCase())
	if (found) {
		return {
			...unis,
			level: found.level,
			codigoInterno: found.codigoInterno,
			isUnitActive: found.isUnitActive,
			parent_id: found.parent_id,
			updated_at: found.updated_at
		}
	}
	return unis
})

// 2. Identificamos los elementos en vpActual que NO están en unionCoord para agregarlos
const missingInUnion = level6Actual
	.filter(vp => !updateNivel5.some(u => u.name.toLowerCase() === vp.name.toLowerCase()))
	.map(vp => ({
		id: vp.id || randomUUID(),
		name: vp.name,
		level: vp.level,
		codigoInterno: vp.codigoInterno,
		isUnitActive: vp.isUnitActive,
		parent_id: vp.parent_id,
		created_at: now,
		updated_at: now
	}))

// 3. Combinamos ambos resultados para obtener la lista final
const updateNivel6 = [...updatedFromUnion, ...missingInUnion].sort((a, b) => {
	if (a.level !== b.level) {
		return a.level - b.level
	}
	return a.codigoInterno - b.codigoInterno
})

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
	checkOrphanUnits(level6Actual)
}

module.exports = { updateNivel6, level6Actual, checkOrphanUnits }
