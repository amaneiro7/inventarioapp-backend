import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { CityParams, type CityDto, type CityPrimitives } from './City.dto'
import { CityId } from './CityId'
import { CityName } from './CityName'
import { CityState } from './CityState'

/**
 * Represents a City domain entity.
 */
export class City {
	/**
	 * Constructs a City instance.
	 * @param {CityId} id - The unique identifier of the city.
	 * @param {CityState} stateId - The state ID to which the city belongs.
	 * @param {CityName} name - The name of the city.
	 */
	constructor(
		private readonly id: CityId,
		private stateId: CityState,
		private name: CityName
	) {}

	/**
	 * Creates a new City instance with a randomly generated ID.
	 * @param {CityParams} params - The parameters for creating the city (name, stateId).
	 * @returns {City} A new City instance.
	 */
	static create(params: CityParams): City {
		const id = CityId.random().value
		return new City(new CityId(id), new CityState(params.stateId), new CityName(params.name))
	}

	/**
	 * Updates the name of the city.
	 * @param {CityName['value']} name - The new name for the city.
	 */
	updateName(name: CityName['value']): void {
		this.name = new CityName(name)
	}

	/**
	 * Updates the state of the city.
	 * @param {CityState['value']} newState - The new state ID for the city.
	 */
	updateState(newState: CityState['value']): void {
		this.stateId = new CityState(newState)
	}

	/**
	 * Creates a City instance from primitive data.
	 * @param {CityDto} primitives - The primitive data for the city.
	 * @returns {City} A new City instance.
	 */
	static fromPrimitives(primitives: CityDto): City {
		return new City(new CityId(primitives.id), new CityState(primitives.stateId), new CityName(primitives.name))
	}

	/**
	 * Converts the City instance to its primitive representation.
	 * @returns {CityPrimitives} The primitive representation of the city.
	 */
	toPrimitive(): CityPrimitives {
		return {
			id: this.idValue,
			stateId: this.stateValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the city's ID.
	 * @returns {Primitives<CityId>} The ID value.
	 */
	get idValue(): Primitives<CityId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the city's name.
	 * @returns {Primitives<CityName>} The name value.
	 */
	get nameValue(): Primitives<CityName> {
		return this.name.value
	}

	/**
	 * Gets the primitive value of the city's state ID.
	 * @returns {Primitives<CityState>} The state ID value.
	 */
	get stateValue(): Primitives<CityState> {
		return this.stateId.value
	}
}
