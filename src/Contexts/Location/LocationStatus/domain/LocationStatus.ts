import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { LocationStatusId } from './LocationStatusId'
import { LocationStatusName } from './LocationStatusName'
import { type LocationStatusDto, type LocationStatusPrimitives } from './LocationStatus.dto'

/**
 * Represents a Location Status domain entity.
 */
export class LocationStatus {
	/**
	 * Constructs a LocationStatus instance.
	 * @param {LocationStatusId} id - The unique identifier of the location status.
	 * @param {LocationStatusName} name - The name of the location status.
	 */
	constructor(
		private readonly id: LocationStatusId,
		private readonly name: LocationStatusName
	) {}

	/**
	 * Creates a LocationStatus instance from primitive data.
	 * @param {LocationStatusDto} primitives - The primitive data for the location status.
	 * @returns {LocationStatus} A new LocationStatus instance.
	 */
	static fromPrimitives(primitives: LocationStatusDto): LocationStatus {
		return new LocationStatus(new LocationStatusId(primitives.id), new LocationStatusName(primitives.name))
	}

	/**
	 * Converts the LocationStatus instance to its primitive representation.
	 * @returns {LocationStatusPrimitives} The primitive representation of the location status.
	 */
	toPrimitive(): LocationStatusPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the location status's ID.
	 * @returns {Primitives<LocationStatusId>} The ID value.
	 */
	get idValue(): Primitives<LocationStatusId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the location status's name.
	 * @returns {Primitives<LocationStatusName>} The name value.
	 */
	get nameValue(): Primitives<LocationStatusName> {
		return this.name.value
	}
}
