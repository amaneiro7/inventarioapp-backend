import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from './OperatingSystemId'
import { type OperatingSystemVersion } from './OperatingSystemVersion'

export interface OperatingSystem {
	id: Primitives<OperatingSystemId>
	name: Primitives<OperatingSystemVersion>
}

export type OperatingSystemPrimitives = OperatingSystem

export type OperatingSystemDto = OperatingSystem
