import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RegionDto, type RegionPrimitives } from './Region.dto'
import { RegionId } from './RegionId'
import { RegionName } from './RegionName'
import { AdmRegionRegion } from './AdministrativeRegion'
export class Region {
	constructor(
		private readonly id: RegionId,
		private readonly name: RegionName,
		private administrativeRegionId: AdmRegionRegion
	) {}

	static fromPrimitives(primitives: RegionDto): Region {
		return new Region(
			new RegionId(primitives.id),
			new RegionName(primitives.name),
			new AdmRegionRegion(primitives.administrativeRegionId)
		)
	}

	toPrimitive(): RegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			administrativeRegionId: this.administrativeRegionValue
		}
	}

	updateAdmRegion(newAdmRegion: Primitives<AdmRegionRegion>): void {
		this.administrativeRegionId = new AdmRegionRegion(newAdmRegion)
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
