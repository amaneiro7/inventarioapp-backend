import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'

export enum DeviceMonitoringStatuses {
	ONLINE = 'Online',
	OFFLINE = 'Offline',
	NOTAVAILABLE = 'Not available'
}

export class DeviceMonitoringStatus extends EnumValueObject<DeviceMonitoringStatuses> {
	constructor(value: DeviceMonitoringStatuses) {
		super(value, Object.values(DeviceMonitoringStatuses))
	}

	protected throwErrorForInvalidValue(value: DeviceMonitoringStatuses): void {
		throw new InvalidArgumentError(`Invalid device monitoring status: ${value}`)
	}
}
