import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { InputTypeId } from './InputTypeId'
import { InputTypeName } from './InputTypeName'

export interface InputType {
	id: Primitives<InputTypeId>
	name: Primitives<InputTypeName>
}
export type InputTypePrimitives = InputType

export type InputTypeDto = InputType
