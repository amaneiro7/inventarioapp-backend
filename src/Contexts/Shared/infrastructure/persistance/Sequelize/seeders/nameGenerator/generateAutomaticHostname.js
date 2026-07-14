const { extractGerenciaCode } = require('./generadorDeNombre')

/**
 * Genera el hostname completo concatenando el prefijo, la sede, la sigla y el correlativo.
 *
 * @param {string} nombreGerencia - Nombre completo de la gerencia.
 * @param {string} sede - Código de sede (ej: "MBO").
 * @param {number|string} secuencia - Número de secuencia del equipo (1, 2, etc.).
 * @param {number} lengthCode - Longitud del código de gerencia (3 o 4).
 * @returns {string} - Hostname completo (ej: "BNCMBOSOP01").
 */
function generateAutomaticHostname(nombreGerencia, sede, cantidadEquipos = 1) {
	const prefix = 'BNC'
	const cleanSede = String(sede).trim().toUpperCase()

	// Extraer sigla (usando la lógica que ya definimos)
	const sigla = extractGerenciaCode(nombreGerencia, 5)

	// Construcción: Correlativo solo si hay más de 1 equipo
	let suffix = ''
	if (cantidadEquipos > 1) {
		suffix = String(1).padStart(2, '0') // Empieza en 01
	}

	return `${prefix}${cleanSede}${sigla}${suffix}`
}

module.exports = { generateAutomaticHostname }
