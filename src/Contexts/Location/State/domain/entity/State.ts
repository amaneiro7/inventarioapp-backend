import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateDto, type StatePrimitives } from '../entity/State.dto'
import { RegionId } from '../../../Region/domain/RegionId'
import { StateId } from '../valueObject/StateId'
import { StateName } from '../valueObject/StateName'

/**
 * Represents a State domain entity.
 */
export class State {
	/**
	 * Constructs a State instance.
	 * @param {StateId} id - The unique identifier of the state.
	 * @param {RegionId} regionId - The region ID to which the state belongs.
	 * @param {StateName} name - The name of the state.
	 */
	constructor(
		private readonly id: StateId,
		private readonly regionId: RegionId,
		private readonly name: StateName
	) {}

	/**
	 * Creates a State instance from primitive data.
	 * @param {StateDto} primitives - The primitive data for the state.
	 * @returns {State} A new State instance.
	 */
	static fromPrimitives(primitives: StateDto): State {
		return new State(new StateId(primitives.id), new RegionId(primitives.regionId), new StateName(primitives.name))
	}

	/**
	 * Converts the State instance to its primitive representation.
	 * @returns {StatePrimitives} The primitive representation of the state.
	 */
	toPrimitive(): StatePrimitives {
		return {
			id: this.idValue,
			regionId: this.regionIdValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the state's ID.
	 * @returns {Primitives<StateId>} The ID value.
	 */
	get idValue(): Primitives<StateId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the state's region ID.
	 * @returns {Primitives<RegionId>} The region ID value.
	 */
	get regionIdValue(): Primitives<RegionId> {
		return this.regionId.value
	}

	/**
	 * Gets the primitive value of the state's name.
	 * @returns {Primitives<StateName>} The name value.
	 */
	get nameValue(): Primitives<StateName> {
		return this.name.value
	}
}
