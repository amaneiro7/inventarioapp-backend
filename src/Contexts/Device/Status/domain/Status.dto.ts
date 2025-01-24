import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StatusId } from './StatusId'
import { type StatusName } from './StatusName'

export interface Status {
	id: Primitives<StatusId>
	name: Primitives<StatusName>
}

export type StatusPrimitives = Status

export type StatusDto = Status
