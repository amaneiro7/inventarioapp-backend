import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from '../valueObject/InputTypeId'
import { type InputTypeName } from '../valueObject/InputTypeName'

/**
 * @interface InputType
 * @description Defines the core properties of an InputType entity.
 */
export interface InputType {
	id: Primitives<InputTypeId>
	name: Primitives<InputTypeName>
}

/**
 * @type InputTypePrimitives
 * @description Represents the primitive, serializable state of an InputType entity.
 */
export type InputTypePrimitives = InputType

/**
 * @type InputTypeDto
 * @description Represents a Data Transfer Object (DTO) for the InputType entity.
 */
export type InputTypeDto = InputType
