import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from './InputTypeId'
import { type InputTypeName } from './InputTypeName'

export interface InputType {
	id: Primitives<InputTypeId>
	name: Primitives<InputTypeName>
}
export type InputTypePrimitives = InputType

export type InputTypeDto = InputType
