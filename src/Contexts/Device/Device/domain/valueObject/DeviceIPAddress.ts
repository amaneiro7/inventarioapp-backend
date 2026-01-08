import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import { IPAddress } from '../../../../Shared/domain/value-object/IPAddress'

/**
 * @description Represents an IP address, which can be null.
 */
export class DeviceIPAddress extends AcceptedNullStringValueObject {
	constructor(value: string | null) {
		super(value)
		this.ensureIsValid()
	}

	private ensureIsValid(): void {
		if (this.value !== null && !IPAddress.isValid(this.value)) {
			throw new InvalidArgumentError(`<${this.value}> no es una dirección IP válida.`)
		}
	}
}
