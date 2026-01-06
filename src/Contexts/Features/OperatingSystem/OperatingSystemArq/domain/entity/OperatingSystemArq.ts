import { AggregateRoot } from '../../../../../Shared/domain/AggregateRoot'
import { OperatingSystemArqId } from '../valueObject/OperatingSystemArqID'
import { OperatingSystemArqName } from '../valueObject/OperatingSystemArqName'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto, type OperatingSystemArqPrimitives } from './OperatingSystemArq.dto'

/**
 * @description Represents the OperatingSystemArq domain entity.
 */
export class OperatingSystemArq extends AggregateRoot {
	constructor(
		private readonly id: OperatingSystemArqId,
		private readonly name: OperatingSystemArqName
	) {
		super()
	}

	static fromPrimitives(primitives: OperatingSystemArqDto): OperatingSystemArq {
		return new OperatingSystemArq(
			new OperatingSystemArqId(primitives.id),
			new OperatingSystemArqName(primitives.name)
		)
	}

	toPrimitives(): OperatingSystemArqPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<OperatingSystemArqId> {
		return this.id.value
	}

	get nameValue(): Primitives<OperatingSystemArqName> {
		return this.name.value
	}
}
