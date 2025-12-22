import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionDto } from '../../../Region/domain/Region.dto'
import { type RegionId } from '../../../Region/domain/RegionId'
import { type StateId } from '../valueObject/StateId'
import { type StateName } from '../valueObject/StateName'

/**
 * Represents the core properties of a State.
 */
export interface State {
	id: Primitives<StateId>
	name: Primitives<StateName>
	regionId: Primitives<RegionId>
}

/**
 * Represents the primitive type of a State, suitable for data transfer.
 */
export type StatePrimitives = State

/**
 * Represents the Data Transfer Object (DTO) for a State, including its associated Region.
 */
export type StateDto = State & {
	region: RegionDto
}
