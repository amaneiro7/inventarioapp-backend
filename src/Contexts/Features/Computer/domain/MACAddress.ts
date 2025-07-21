import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DeviceComputer } from './Computer'

/**
 * Represents a MAC address, which can be null.
 */
export class MACAddress extends AcceptedNullValueObject<string> {
	private readonly macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

	/**
	 * Creates an instance of MACAddress.
	 * @param value - The MAC address string, or null.
	 */
	constructor(readonly value: string | null) {
		super(value)
		this.ensureIsValid(value)
	}

	/**
	 * Converts the MAC address to its primitive value.
	 * @returns The MAC address string or null.
	 */
	toPrimitives(): string | null {
		return this.value
	}

	private ensureIsValid(value: string | null): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid MAC Address`)
		}
	}

	private isValid(name: string | null): boolean {
		if (name === null) return true
		return this.macAddressRegex.test(name)
	}

	static async updateMACAddressField({
		macAddress,
		entity
	}: {
		macAddress?: Primitives<MACAddress>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de dirección MAC no realiza ninguna acción
		if (macAddress === undefined) {
			return
		}
		// Verifica que si el valor del campo dirección MAC actual y el nuevo valor dirección MAC son iguales no realiza un cambio
		if (entity.macAddressValue === macAddress) {
			return
		}
		// Actualiza el campo dirección MAC de la entidad {@link Device} con el nuevo dirección MAC
		entity.updateMACAddress(macAddress)
	}
}
