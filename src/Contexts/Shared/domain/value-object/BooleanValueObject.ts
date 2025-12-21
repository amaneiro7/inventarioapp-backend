import { InvalidArgumentError } from '../errors/ApiError'
import { ValueObject } from './ValueObject'

export class BooleanValueObject extends ValueObject<boolean> {
	constructor(value: boolean) {
		super(value)
		this.ensureIsBoolean(value)
	}

	private ensureIsBoolean(value: boolean): void {
		if (typeof value !== 'boolean') {
			throw new InvalidArgumentError(`El valor <${value}> para <${this.constructor.name}> debe ser un booleano.`)
		}
	}
}
