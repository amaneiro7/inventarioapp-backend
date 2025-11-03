import { StringValueObject } from '../../../domain/value-object/StringValueObject'

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
}
