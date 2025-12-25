import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { CityId } from '../valueObject/CityId'
import { CityName } from '../valueObject/CityName'
import { StateId } from '../../../State/domain/valueObject/StateId'
import { CityUpdatedDomainEvent } from '../event/CityUpdatedDomainEvent'
import { CityRenamedDomainEvent } from '../event/CityRenamedDomainEvent'
import { CityCreatedDomainEvent } from '../event/CityCreatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityParams, type CityDto, type CityPrimitives } from './City.dto'

/**
 * Represents a City domain entity.
 */
export class City extends AggregateRoot {
	/**
	 * Constructs a City instance.
	 * @param {CityId} id - The unique identifier of the city.
	 * @param {StateId} stateId - The state ID to which the city belongs.
	 * @param {CityName} name - The name of the city.
	 */
	constructor(
		private readonly id: CityId,
		private stateId: StateId,
		private name: CityName
	) {
		super()
	}

	/**
	 * Creates a new City instance with a randomly generated ID.
	 * @param {CityParams} params - The parameters for creating the city (name, stateId).
	 * @returns {City} A new City instance.
	 */
	static create(params: CityParams): City {
		const id = CityId.random()
		const stateId = new StateId(params.stateId)
		const name = new CityName(params.name)
		const city = new City(id, stateId, name)
		city.record(
			new CityCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value,
				stateId: stateId.value
			})
		)

		return city
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new CityUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * Updates the name of the city.
	 * @param {CityName['value']} name - The new name for the city.
	 */
	updateName(name: CityName['value']): void {
		const oldName = this.name.value
		this.name = new CityName(name)
		this.record(
			new CityRenamedDomainEvent({
				aggregateId: this.idValue,
				oldName,
				newName: this.name.value
			})
		)
	}

	/**
	 * Updates the state of the city.
	 * @param {StateId['value']} newState - The new state ID for the city.
	 */
	updateState(newState: StateId['value']): void {
		this.stateId = new StateId(newState)
	}

	/**
	 * Creates a City instance from primitive data.
	 * @param {CityDto} primitives - The primitive data for the city.
	 * @returns {City} A new City instance.
	 */
	static fromPrimitives(primitives: CityDto): City {
		return new City(new CityId(primitives.id), new StateId(primitives.stateId), new CityName(primitives.name))
	}

	/**
	 * Converts the City instance to its primitive representation.
	 * @returns {CityPrimitives} The primitive representation of the city.
	 */
	toPrimitives(): CityPrimitives {
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
	 * @returns {Primitives<StateId>} The state ID value.
	 */
	get stateValue(): Primitives<StateId> {
		return this.stateId.value
	}
}
