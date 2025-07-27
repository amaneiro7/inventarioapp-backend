import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceComputer } from './Computer'

/**
 * @description Represents a MAC address, which can be null.
 */
export class MACAddress extends AcceptedNullValueObject<string> {
	private readonly MAC_ADDRESS_REGEX = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

	constructor(readonly value: string | null) {
		super(value)
		this.ensureIsValid(value)
	}

	private ensureIsValid(value: string | null): void {
		if (value !== null && !this.MAC_ADDRESS_REGEX.test(value)) {
			throw new InvalidArgumentError(`<${value}> no es una dirección MAC válida.`)
		}
	}

	static updateMACAddressField({
		macAddress,
		entity
	}: {
		macAddress?: Primitives<MACAddress>
		entity: DeviceComputer
	}): void {
		if (macAddress === undefined || entity.macAddressValue === macAddress) {
			return
		}
		entity.updateMACAddress(macAddress)
	}
}
