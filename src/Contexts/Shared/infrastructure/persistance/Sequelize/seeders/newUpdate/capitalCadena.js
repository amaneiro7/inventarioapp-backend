function capitalCadena(cadena) {
	// Lista de palabras que deben permanecer en minúscula (artículos, preposiciones, conjunciones)
	const excepciones = ['de', 'la', 'el', 'en', 'y', 'o', 'con', 'del', 'las', 'los', 'para', 'por']
	const excepcionesMayus = ['II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
	return cadena
		.split(' ')
		.map((palabra, index) => {
			// 1. Si la palabra contiene varios puntos (como V.P.E), la dejamos intacta
			if ((palabra.match(/\./g) || []).length > 1) {
				return palabra
			}

			// 1.1 Si la palabra es un número romano, la devolvemos en mayúsculas
			const palabraMayus = palabra.toUpperCase()
			if (excepcionesMayus.includes(palabraMayus)) {
				return palabraMayus
			}

			// 2. Limpiamos la palabra para comparar con las excepciones
			const palabraMinuscula = palabra.toLowerCase()

			// 3. Regla: Capitalizar si es la primera palabra o si no está en la lista de excepciones
			if (index === 0 || !excepciones.includes(palabraMinuscula)) {
				return palabraMinuscula.charAt(0).toUpperCase() + palabraMinuscula.slice(1)
			}

			// 4. De lo contrario, devolver en minúscula
			return palabraMinuscula
		})
		.join(' ')
}

module.exports = { capitalCadena }
