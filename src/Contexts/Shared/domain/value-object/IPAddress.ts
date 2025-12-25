import { InvalidArgumentError } from '../errors/ApiError'
import { StringValueObject } from './StringValueObject'

/**
 * Represents a generic IP Address Value Object.
 * Ensures the value is a valid IP format.
 */
export class IPAddress extends StringValueObject {
	private static readonly IP_REGEX =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	constructor(value: string) {
		super(value)
		this.ensureIsValidIp(value)
	}

	private ensureIsValidIp(value: string): void {
		if (!IPAddress.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es una dirección IP válida`)
		}
	}

	/**
	 * Static method to validate IP format.
	 * Can be reused by nullable value objects.
	 */
	static isValid(value: string): boolean {
		return this.IP_REGEX.test(value)
	}
}
