import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from './LocationStatusId'
import { type LocationStatusName } from './LocationStatusName'

export interface LocationStatus {
	id: Primitives<LocationStatusId>
	name: Primitives<LocationStatusName>
}
export type LocationStatusPrimitives = LocationStatus

export type LocationStatusDto = LocationStatus
