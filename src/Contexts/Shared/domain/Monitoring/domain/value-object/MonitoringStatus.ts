import { EnumValueObject } from '../../../value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../value-object/InvalidArgumentError'

export enum MonitoringStatuses {
	ONLINE = 'online',
	OFFLINE = 'offline',
	NOTAVAILABLE = 'not available',
	HOSTNAME_MISMATCH = 'hostname mismatch'
}

export class MonitoringStatus extends EnumValueObject<MonitoringStatuses> {
	constructor(value: MonitoringStatuses) {
		super(value, Object.values(MonitoringStatuses))
	}

	protected throwErrorForInvalidValue(value: MonitoringStatuses): void {
		throw new InvalidArgumentError(`Invalid device monitoring status: ${value}`)
	}
}
