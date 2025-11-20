import { InvalidArgumentError } from '../errors/ApiError'
import { ValueObject } from './ValueObject'

export abstract class StringValueObject extends ValueObject<string> {
	protected ensureLengthIsSmallerThan(maxLength: number, value: string): void {
		if (value.length > maxLength) {
			throw new InvalidArgumentError(
				`Value for <${this.constructor.name}> must be smaller than ${maxLength} characters`
			)
		}
	}
}
