import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionDto, type AdministrativeRegionPrimitives } from './AdministrativeRegion.dto'
import { AdministrativeRegionId } from './AdministrativeRegionId'
import { AdministrativeRegionName } from './AdministrativeRegionName'
export class AdministrativeRegion {
	constructor(
		private readonly id: AdministrativeRegionId,
		private readonly name: AdministrativeRegionName
	) {}

	static fromPrimitives(primitives: AdministrativeRegionDto): AdministrativeRegion {
		return new AdministrativeRegion(
			new AdministrativeRegionId(primitives.id),
			new AdministrativeRegionName(primitives.name)
		)
	}

	toPrimitive(): AdministrativeRegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<AdministrativeRegionId> {
		return this.id.value
	}

	get nameValue(): Primitives<AdministrativeRegionName> {
		return this.name.value
	}
}
