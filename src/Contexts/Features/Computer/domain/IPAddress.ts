import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type DeviceComputer } from './Computer'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents an IP address, which can be null.
 */
export class IPAddress extends AcceptedNullValueObject<string> {
	private readonly IP_ADDRESS_REGEX =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	constructor(
		readonly value: string | null,
		private readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureIsStatusIsInUseIPAddressIsRequired(this.status, this.value)
		this.ensureIsValid(value)
	}

	private ensureIsValid(value: string | null): void {
		if (value !== null && !this.IP_ADDRESS_REGEX.test(value)) {
			throw new InvalidArgumentError(`<${value}> no es una dirección IP válida.`)
		}
	}

	private ensureIsStatusIsInUseIPAddressIsRequired(
		status: Primitives<DeviceStatus>,
		ipAddress: Primitives<IPAddress>
	): void {
		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		const isNotInUse =
			status === StatusOptions.INALMACEN ||
			status === StatusOptions.DESINCORPORADO ||
			status === StatusOptions.PORDESINCORPORAR

		if (isInUse && !ipAddress) {
			throw new InvalidArgumentError('Se requiere una dirección IP cuando el estado está en uso.')
		}
		if (isNotInUse && ipAddress) {
			throw new InvalidArgumentError('No se requiere una dirección IP cuando el estado no está en uso.')
		}
	}

	static updateIPAddressField({
		ipAddress,
		entity
	}: {
		ipAddress?: Primitives<IPAddress>
		entity: DeviceComputer
	}): void {
		if (ipAddress === undefined || entity.ipAddressValue === ipAddress) {
			return
		}
		entity.updateIPAddress(ipAddress, entity.statusValue)
	}
}
