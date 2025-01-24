import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RegionDto } from '../../Region/domain/Region.dto'
import { type RegionId } from '../../Region/domain/RegionId'
import { type StateId } from './StateId'
import { type StateName } from './StateName'

export interface State {
	id: Primitives<StateId>
	name: Primitives<StateName>
	regionId: Primitives<RegionId>
}
export type StatePrimitives = State

export type StateDto = State & {
	region: RegionDto
}
