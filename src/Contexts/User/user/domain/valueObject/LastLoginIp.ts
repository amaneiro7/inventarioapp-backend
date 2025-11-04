//import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'

export class LastLoginIp extends AcceptedNullValueObject<string> {
	private readonly IP_ADDRESS_REGEX =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	constructor(value: string | null) {
		super(value)
		this.ensureValidIp(value)
	}

	private ensureValidIp(value: string | null | undefined): void {
		if (value !== null && value !== undefined && !this.IP_ADDRESS_REGEX.test(value)) {
			// throw new InvalidArgumentError(`<${value}> no es una dirección IP válida.`)
			this.value = '127.0.0.1' // Default to localhost if invalid
		}
	}
}
