const { GERENCIA_OVERRIDES } = require('./KeyName')
const { stopWords } = require('./stopWords')

/**
 * Extrae automáticamente una sigla de longitud fija de un nombre de gerencia.
 *
 * @param {string} nombreGerencia - Nombre completo de la gerencia.
 * @param {number} targetLength - Longitud de la sigla (3 o 4).
 * @returns {string} - Código de la gerencia en mayúsculas (ej: "SOP").
 */
function extractGerenciaCode(nombreGerencia, targetLength = 3) {
	if (!nombreGerencia) return 'GEN'

	const cleanName = nombreGerencia.toLowerCase().trim().replace(/\./g, '')

	// 1. Prioridad máxima: Diccionario de excepciones
	if (GERENCIA_OVERRIDES[cleanName]) {
		return GERENCIA_OVERRIDES[cleanName].toUpperCase().padEnd(targetLength, 'X').slice(0, targetLength)
	}
	// 2. Limpieza estándar
	const normalized = cleanName
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Elimina acentos/tildes
		.replace(/[^a-z0-9\s]/g, ' ') // Deja solo caracteres alfanuméricos y espacios

	const words = normalized.split(/\s+/).filter(word => word.length > 0 && !stopWords.has(word))

	// 3. Construcción inteligente
	let code = ''
	if (words.length === 0) return 'GEN'
	// Si tenemos varias palabras, tomamos iniciales (hasta alcanzar targetLength)
	code = words
		.map(w => w[0])
		.join('')
		.toUpperCase()

	// 4. Ajuste final (evitamos truncar si es muy corto, pero cortamos si es muy largo)

	return code.slice(0, targetLength)
}

module.exports = { extractGerenciaCode }
