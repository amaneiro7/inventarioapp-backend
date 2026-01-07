import { AggregateRoot } from '../../../../../Shared/domain/AggregateRoot'
import { HardDriveCapacityId } from '../valueObject/HardDriveCapacityId'
import { HardDriveCapacityValue } from '../valueObject/HardDriveCapacityValue'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto, type HardDriveCapacityPrimitives } from './HardDriveCapacity.dto'

/**
 * @description Represents the HardDriveCapacity domain entity.
 */
export class HardDriveCapacity extends AggregateRoot {
	constructor(
		private readonly id: HardDriveCapacityId,
		private readonly name: HardDriveCapacityValue
	) {
		super()
	}

	static fromPrimitives(primitives: HardDriveCapacityDto): HardDriveCapacity {
		return new HardDriveCapacity(
			new HardDriveCapacityId(primitives.id),
			new HardDriveCapacityValue(primitives.name)
		)
	}

	toPrimitives(): HardDriveCapacityPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<HardDriveCapacityId> {
		return this.id.value
	}

	get nameValue(): Primitives<HardDriveCapacityValue> {
		return this.name.value
	}
}
