import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

export class SettingsValue extends StringValueObject {
	public asNumber(): number {
		const num = Number(this.value)
		if (isNaN(num)) {
			throw new Error(`El valor '${this.value}' no es un número válido.`)
		}
		return num
	}
	public asBoolean(): boolean {
		const normalizedValue = this.value.toLowerCase()
		return normalizedValue === 'true' || normalizedValue === '1' || normalizedValue === 't'
	}
	public asJson<T>(): T {
		return JSON.parse(this.value)
	}

	public toStringArray(): string[] {
		const rawString: string = this.value

		// 1. Verificar si es una string y si tiene el formato [ ... ]
		if (typeof rawString !== 'string' || !rawString.startsWith('[') || !rawString.endsWith(']')) {
			console.warn('La string no parece tener el formato de array esperado.')
			// Opcional: Podrías intentar devolver JSON.parse(rawString) aquí si sospechas que
			// a veces es JSON válido, o simplemente un array vacío.
			return []
		}

		// 2. Quitar los corchetes iniciales y finales.
		const content = rawString.substring(1, rawString.length - 1)

		// 3. Dividir la cadena por la coma y limpiar cada elemento.
		const arrayItems: string[] = content
			.split(',')
			.map(item => item.trim()) // Quita espacios en blanco alrededor (importante)
			// Quita la comilla simple al inicio y al final de cada elemento
			.map(item => item.replace(/^'|'$/g, ''))

		return arrayItems
	}
}
