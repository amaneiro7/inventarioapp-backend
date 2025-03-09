import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RegionDto, type RegionPrimitives } from './Region.dto'
import { RegionId } from './RegionId'
import { RegionName } from './RegionName'
export class Region {
	constructor(
		private readonly id: RegionId,
		private readonly name: RegionName
	) {}

	static fromPrimitives(primitives: RegionDto): Region {
		return new Region(new RegionId(primitives.id), new RegionName(primitives.name))
	}

	toPrimitive(): RegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<RegionId> {
		return this.id.value
	}

	get nameValue(): Primitives<RegionName> {
		return this.name.value
	}
}
