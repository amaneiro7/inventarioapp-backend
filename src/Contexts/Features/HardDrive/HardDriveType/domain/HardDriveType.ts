import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeDto, type HardDriveTypePrimitives } from './HardDriveType.dto'
import { HardDriveTypeId } from './HardDriveTypeId'
import { HardDriveTypeName } from './HardDriveTypeName'

/**
 * @description Represents the HardDriveType domain entity.
 */
export class HardDriveType {
	constructor(
		private readonly id: HardDriveTypeId,
		private readonly name: HardDriveTypeName
	) {}

	static fromPrimitives(primitives: HardDriveTypeDto): HardDriveType {
		return new HardDriveType(new HardDriveTypeId(primitives.id), new HardDriveTypeName(primitives.name))
	}

	toPrimitive(): HardDriveTypePrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): Primitives<HardDriveTypeId> {
		return this.id.value
	}

	get nameValue(): Primitives<HardDriveTypeName> {
		return this.name.value
	}
}
