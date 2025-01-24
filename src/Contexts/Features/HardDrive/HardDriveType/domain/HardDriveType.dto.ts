import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from './HardDriveTypeId'
import { type HardDriveTypeName } from './HardDriveTypeName'

export interface HardDriveType {
	id: Primitives<HardDriveTypeId>
	name: Primitives<HardDriveTypeName>
}

export type HardDriveTypePrimitives = HardDriveType

export type HardDriveTypeDto = HardDriveType
