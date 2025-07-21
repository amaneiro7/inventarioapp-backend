import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type DeviceComputer } from './Computer'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents an IP address, which can be null.
 */
export class IPAddress extends AcceptedNullValueObject<string> {
	private readonly IPADRRESS_VALIDATION =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	/**
	 * Creates an instance of IPAddress.
	 * @param value - The IP address string, or null.
	 * @param status - The status of the device.
	 */
	constructor(readonly value: string | null, private readonly status: Primitives<DeviceStatus>) {
		super(value)
		this.ensureIsStatusIsInUseIPAddressIsRequired(this.status, this.value)
		this.ensureIsValid(value)
	}

	/**
	 * Converts the IP address to its primitive value.
	 * @returns The IP address string or null.
	 */
	toPrimitives(): string | null {
		return this.value
	}

	private ensureIsValid(value: string | null): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid IP Address`)
		}
	}

	private ensureIsStatusIsInUseIPAddressIsRequired(
		status: Primitives<DeviceStatus>,
		ipAddress: Primitives<IPAddress>
	): void {
		if (status === StatusOptions.INUSE && !ipAddress) {
			throw new InvalidArgumentError('IP Address is required when status is in use')
		}
		if (
			(status === StatusOptions.INALMACEN ||
				status === StatusOptions.DESINCORPORADO ||
				status === StatusOptions.PORDESINCORPORAR) &&
			!!ipAddress
		) {
			throw new InvalidArgumentError('IP Address is not required when status is not in use')
		}
	}

	private isValid(name: string | null): boolean {
		if (name === null) return true
		return this.IPADRRESS_VALIDATION.test(name)
	}

	static async updateIPAddressField({
		ipAddress,
		entity
	}: {
		ipAddress?: Primitives<IPAddress>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de dirección IP no realiza ninguna acción
		if (ipAddress === undefined) {
			return
		}
		// Verifica que si el valor del campo dirección IP actual y el nuevo valor dirección IP son iguales no realiza un cambio
		if (entity.ipAddressValue === ipAddress) {
			return
		}
		// Actualiza el campo dirección IP de la entidad {@link Device} con el nuevo dirección IP
		const status = entity.statusValue
		entity.updateIPAddress(ipAddress, status)
	}
}
