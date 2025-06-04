import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'

export enum LocationMonitoringStatuses {
	ONLINE = 'online',
	OFFLINE = 'offline',
	NOTAVAILABLE = 'not available'
}

export class LocationMonitoringStatus extends EnumValueObject<LocationMonitoringStatuses> {
	constructor(value: LocationMonitoringStatuses) {
		super(value, Object.values(LocationMonitoringStatuses))
	}

	protected throwErrorForInvalidValue(value: LocationMonitoringStatuses): void {
		throw new InvalidArgumentError(`Invalid location monitoring status: ${value}`)
	}
}
