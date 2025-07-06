import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { LocationStatusId } from '../../LocationStatus/domain/LocationStatusId'
import { LocationStatusName } from '../../LocationStatus/domain/LocationStatusName'
import { type LocationStatusDto, type LocationStatusPrimitives } from '../../LocationStatus/domain/LocationStatus.dto'
export class LocationStatus {
	constructor(
		private readonly id: LocationStatusId,
		private readonly name: LocationStatusName
	) {}

	static fromPrimitives(primitives: LocationStatusDto): LocationStatus {
		return new LocationStatus(new LocationStatusId(primitives.id), new LocationStatusName(primitives.name))
	}

	toPrimitive(): LocationStatusPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<LocationStatusId> {
		return this.id.value
	}

	get nameValue(): Primitives<LocationStatusName> {
		return this.name.value
	}
}
