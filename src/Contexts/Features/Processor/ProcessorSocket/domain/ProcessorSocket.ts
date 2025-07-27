import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketDto, type ProcessorSocketPrimitives } from './ProcessorSocket.dto'
import { ProcessorSocketId } from './ProcessorSocketId'
import { ProcessorSocketName } from './ProcessorSocketName'

/**
 * @description Represents the ProcessorSocket domain entity.
 */
export class ProcessorSocket {
	constructor(
		private readonly id: ProcessorSocketId,
		private readonly name: ProcessorSocketName
	) {}

	static fromPrimitives(primitives: ProcessorSocketDto): ProcessorSocket {
		return new ProcessorSocket(new ProcessorSocketId(primitives.id), new ProcessorSocketName(primitives.name))
	}

	toPrimitive(): ProcessorSocketPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<ProcessorSocketId> {
		return this.id.value
	}

	get nameValue(): Primitives<ProcessorSocketName> {
		return this.name.value
	}
}
