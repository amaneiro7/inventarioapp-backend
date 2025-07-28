import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionDto, type AdministrativeRegionPrimitives } from './AdministrativeRegion.dto'
import { AdministrativeRegionId } from './AdministrativeRegionId'
import { AdministrativeRegionName } from './AdministrativeRegionName'

/**
 * Represents an Administrative Region domain entity.
 */
export class AdministrativeRegion {
	/**
	 * Constructs an AdministrativeRegion instance.
	 * @param {AdministrativeRegionId} id - The unique identifier of the administrative region.
	 * @param {AdministrativeRegionName} name - The name of the administrative region.
	 */
	constructor(
		private readonly id: AdministrativeRegionId,
		private readonly name: AdministrativeRegionName
	) {}

	/**
	 * Creates an AdministrativeRegion instance from primitive data.
	 * @param {AdministrativeRegionDto} primitives - The primitive data for the administrative region.
	 * @returns {AdministrativeRegion} A new AdministrativeRegion instance.
	 */
	static fromPrimitives(primitives: AdministrativeRegionDto): AdministrativeRegion {
		return new AdministrativeRegion(
			new AdministrativeRegionId(primitives.id),
			new AdministrativeRegionName(primitives.name)
		)
	}

	/**
	 * Converts the AdministrativeRegion instance to its primitive representation.
	 * @returns {AdministrativeRegionPrimitives} The primitive representation of the administrative region.
	 */
	toPrimitive(): AdministrativeRegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the administrative region's ID.
	 * @returns {Primitives<AdministrativeRegionId>} The ID value.
	 */
	get idValue(): Primitives<AdministrativeRegionId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the administrative region's name.
	 * @returns {Primitives<AdministrativeRegionName>} The name value.
	 */
	get nameValue(): Primitives<AdministrativeRegionName> {
		return this.name.value
	}
}
