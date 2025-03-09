import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto, type OperatingSystemArqPrimitives } from './OperatingSystemArq.dto'
import { OperatingSystemArqId } from './OperatingSystemArqID'
import { OperatingSystemArqName } from './OperatingSystemArqName'
export class OperatingSystemArq {
	constructor(
		private readonly id: OperatingSystemArqId,
		private readonly name: OperatingSystemArqName
	) {}

	static fromPrimitives(primitives: OperatingSystemArqDto): OperatingSystemArq {
		return new OperatingSystemArq(
			new OperatingSystemArqId(primitives.id),
			new OperatingSystemArqName(primitives.name)
		)
	}

	toPrimitive(): OperatingSystemArqPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): Primitives<OperatingSystemArqId> {
		return this.id.value
	}

	get nameValue(): Primitives<OperatingSystemArqName> {
		return this.name.value
	}
}
