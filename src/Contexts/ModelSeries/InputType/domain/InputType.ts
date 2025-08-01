import { InputTypeId } from './InputTypeId'
import { InputTypeName } from './InputTypeName'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto, type InputTypePrimitives } from './InputType.dto'

/**
 * @description Represents the InputType domain entity.
 */
export class InputType {
	constructor(
		private readonly id: InputTypeId,
		private readonly name: InputTypeName
	) {}

	static fromPrimitives(primitives: InputTypeDto): InputType {
		return new InputType(new InputTypeId(primitives.id), new InputTypeName(primitives.name))
	}

	toPrimitive(): InputTypePrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): Primitives<InputTypeId> {
		return this.id.value
	}

	get nameValue(): Primitives<InputTypeName> {
		return this.name.value
	}
}
