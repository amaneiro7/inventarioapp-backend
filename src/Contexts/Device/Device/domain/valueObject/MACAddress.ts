import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @description Represents a MAC address, which can be null.
 */
export class MACAddress extends AcceptedNullStringValueObject {
	private readonly MAC_ADDRESS_REGEX = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

	constructor(readonly value: string | null) {
		super(value)
		this.ensureMatchesPattern(this.MAC_ADDRESS_REGEX, `<${this.value}> no es una dirección MAC válida.`)
	}
}
