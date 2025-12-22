import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StateDto } from '../../State/domain/entity/State.dto'
import { type StateId } from '../../State/domain/valueObject/StateId'
import { type CityId } from './CityId'
import { type CityName } from './CityName'

/**
 * Represents the core properties of a City.
 */
export interface City {
	id: Primitives<CityId>
	name: Primitives<CityName>
	stateId: Primitives<StateId>
}

/**
 * Represents the parameters required to create a new City, excluding the ID.
 */
export type CityParams = Omit<City, 'id'>

/**
 * Represents the primitive type of a City, suitable for data transfer.
 */
export type CityPrimitives = City

/**
 * Represents the Data Transfer Object (DTO) for a City, including its associated State.
 */
export type CityDto = City & {
	state: StateDto
}
