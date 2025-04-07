import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RegionDto, type RegionPrimitives } from './Region.dto'
import { AdministrativeRegionId } from '../../AdministrativeRegion/domain/AdministrativeRegionId'
import { RegionId } from './RegionId'
import { RegionName } from './RegionName'
export class Region {
	constructor(
		private readonly id: RegionId,
		private readonly name: RegionName,
		private readonly administrativeRegionId: AdministrativeRegionId
	) {}

	static fromPrimitives(primitives: RegionDto): Region {
		return new Region(
			new RegionId(primitives.id),
			new RegionName(primitives.name),
			new AdministrativeRegionId(primitives.administrativeRegionId)
		)
	}

	toPrimitive(): RegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			administrativeRegionId: this.administrativeRegionValue
		}
	}

	get idValue(): Primitives<RegionId> {
		return this.id.value
	}
	get administrativeRegionValue(): Primitives<RegionId> {
		return this.administrativeRegionId.value
	}

	get nameValue(): Primitives<RegionName> {
		return this.name.value
	}
}
