import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StatusDto, type StatusPrimitives } from './Status.dto'
import { StatusId } from './StatusId'
import { StatusName } from './StatusName'

/**
 * @class Status
 * @description Represents the Status domain entity. This class encapsulates the business logic
 * and ensures data integrity through the use of Value Objects.
 */
export class Status {
	constructor(
		private readonly id: StatusId,
		private readonly name: StatusName
	) {}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Status` instance from its primitive representation.
	 * @param {StatusDto} primitives The primitive data of the status.
	 * @returns {Status} A new `Status` instance.
	 */
	static fromPrimitives(primitives: StatusDto): Status {
		return new Status(new StatusId(primitives.id), new StatusName(primitives.name))
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Status` instance into its primitive, serializable representation.
	 * @returns {StatusPrimitives} The primitive representation of the status.
	 */
	toPrimitive(): StatusPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the status's ID.
	 * @returns {Primitives<StatusId>}
	 */
	get idValue(): Primitives<StatusId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the status's name.
	 * @returns {Primitives<StatusName>}
	 */
	get nameValue(): Primitives<StatusName> {
		return this.name.value
	}
}
