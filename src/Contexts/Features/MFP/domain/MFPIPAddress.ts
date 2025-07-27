import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MFP } from './MFP'

/**
 * @description Represents an IP address for an MFP device, which can be null.
 */
export class MFPIPAddress extends AcceptedNullValueObject<string> {
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
		ipAddress: Primitives<MFPIPAddress>
	): void {
		if (status === StatusOptions.INUSE && ipAddress === null) {
			throw new InvalidArgumentError('Se requiere una dirección IP cuando el estado es "En Uso".')
		}
	}

	static updateIPAddressField({ ipAddress, entity }: { ipAddress?: Primitives<MFPIPAddress>; entity: MFP }): void {
		if (ipAddress === undefined || entity.ipAddressValue === ipAddress) {
			return
		}
		entity.updateIPAddress(ipAddress, entity.statusValue)
	}
}
