import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import {
	type HardDriveCapacityDto,
	type HardDriveCapacityPrimitives
} from './HardDriveCapacity.dto'
import { HardDriveCapacityId } from './HardDriveCapacityId'
import { HardDriveCapacityValue } from './HardDriveCapacityValue'
export class HardDriveCapacity {
	constructor(
		private readonly id: HardDriveCapacityId,
		private readonly name: HardDriveCapacityValue
	) {}

	static fromPrimitives(primitives: HardDriveCapacityDto): HardDriveCapacity {
		return new HardDriveCapacity(
			new HardDriveCapacityId(primitives.id),
			new HardDriveCapacityValue(primitives.name)
		)
	}

	toPrimitive(): HardDriveCapacityPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): Primitives<HardDriveCapacityId> {
		return this.id.value
	}

	get valueValue(): Primitives<HardDriveCapacityValue> {
		return this.name.value
	}
}
