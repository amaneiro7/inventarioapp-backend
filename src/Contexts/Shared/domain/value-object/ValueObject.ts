import { InvalidArgumentError } from '../errors/ApiError'

type Primitives = string | number | boolean | Date
export type ValueObjectType = Primitives | Primitives[] | Record<string, unknown>

type Optional<T> = T | undefined | null

export abstract class ValueObject<T extends ValueObjectType> {
	readonly value: T

	constructor(value: T) {
		this.value = value
		this.ensureValueIsDefined(value, this.constructor.name)
	}

	// Nota: El método equals necesita ser más sofisticado para manejar arrays y objetos.
	// Para simplificar, lo mantendremos enfocado en tipos primitivos o se deberá implementar
	// la comparación profunda (deep equality) en cada subclase si es necesario.
	equals(other: ValueObject<T>): boolean {
		// Esta comparación funciona bien para primitivos (string, number, date, boolean)
		if (other.constructor.name !== this.constructor.name) {
			return false
		}

		// Si no es un array o un objeto, usamos la comparación estricta de valor
		if (typeof this.value !== 'object' || this.value === null) {
			return other.value === this.value
		}

		// Para arrays/objetos, idealmente deberías usar una librería de deep-equal
		// Aquí retornamos una advertencia simple. Lo mejor es sobrescribir esto en las subclases
		// que manejan objetos o arrays.
		return JSON.stringify(other.value) === JSON.stringify(this.value)
	}

	toString(): string {
		// Se asegura que si es un objeto o array, retorne el JSON string.
		if (typeof this.value === 'object' && this.value !== null) {
			return JSON.stringify(this.value)
		}
		return this.value.toString()
	}

	private ensureValueIsDefined(value: Optional<T>, voName: string): void {
		if (value === null || value === undefined) {
			throw new InvalidArgumentError(
				`Value for ValueObject <${voName}> must be defined (received null or undefined)`
			)
		}
	}
}
