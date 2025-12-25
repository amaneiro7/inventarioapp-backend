import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { RegionId } from '../valueObject/RegionId'
import { RegionName } from '../valueObject/RegionName'
import { AdministrativeRegionId } from '../../../AdministrativeRegion/domain/valueObject/AdministrativeRegionId'
import { RegionUpdatedDomainEvent } from '../events/RegionUpdatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionDto, type RegionPrimitives } from './Region.dto'

/**
 * Represents a Region domain entity.
 */
export class Region extends AggregateRoot {
	/**
	 * Constructs a Region instance.
	 * @param {RegionId} id - The unique identifier of the region.
	 * @param {RegionName} name - The name of the region.
	 * @param {AdministrativeRegionId} administrativeRegionId - The administrative region ID to which the region belongs.
	 */
	constructor(
		private readonly id: RegionId,
		private readonly name: RegionName,
		private administrativeRegionId: AdministrativeRegionId
	) {
		super()
	}

	/**
	 * Creates a Region instance from primitive data.
	 * @param {RegionDto} primitives - The primitive data for the region.
	 * @returns {Region} A new Region instance.
	 */
	static fromPrimitives(primitives: RegionDto): Region {
		return new Region(
			new RegionId(primitives.id),
			new RegionName(primitives.name),
			new AdministrativeRegionId(primitives.administrativeRegionId)
		)
	}

	/**
	 * Converts the Region instance to its primitive representation.
	 * @returns {RegionPrimitives} The primitive representation of the region.
	 */
	toPrimitives(): RegionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			administrativeRegionId: this.administrativeRegionValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new RegionUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * Updates the administrative region of the region.
	 * @param {Primitives<AdministrativeRegionId>} newAdmRegion - The new administrative region ID for the region.
	 */
	updateAdmRegion(newAdmRegion: Primitives<AdministrativeRegionId>): void {
		this.administrativeRegionId = new AdministrativeRegionId(newAdmRegion)
	}

	/**
	 * Gets the primitive value of the region's ID.
	 * @returns {Primitives<RegionId>} The ID value.
	 */
	get idValue(): Primitives<RegionId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the region's administrative region ID.
	 * @returns {Primitives<RegionId>} The administrative region ID value.
	 */
	get administrativeRegionValue(): Primitives<RegionId> {
		return this.administrativeRegionId.value
	}

	/**
	 * Gets the primitive value of the region's name.
	 * @returns {Primitives<RegionName>} The name value.
	 */
	get nameValue(): Primitives<RegionName> {
		return this.name.value
	}
}
