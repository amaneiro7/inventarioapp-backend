import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from './OperatingSystemArqID'
import { type OperatingSystemArqName } from './OperatingSystemArqName'

export interface OperatingSystemArq {
	id: Primitives<OperatingSystemArqId>
	name: Primitives<OperatingSystemArqName>
}

export type OperatingSystemArqPrimitives = OperatingSystemArq

export type OperatingSystemArqDto = OperatingSystemArq
