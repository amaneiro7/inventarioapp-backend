import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StateDto } from '../../State/domain/State.dto'
import { type StateId } from '../../State/domain/StateId'
import { type CityId } from './CityId'
import { type CityName } from './CityName'

export interface City {
	id: Primitives<CityId>
	name: Primitives<CityName>
	stateId: Primitives<StateId>
}

export type CityParams = Omit<City, 'id'>
export type CityPrimitives = City

export type CityDto = City & {
	state: StateDto
}
