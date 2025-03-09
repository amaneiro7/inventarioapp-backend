import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeDto, type MemoryRamTypePrimitives } from './MemoryRam.dto'
import { MemoryRamTypeId } from './MemoryRamTypeId'
import { MemoryRamTypeName } from './MemoryRamTypeName'

export class MemoryRamType {
	constructor(
		private readonly id: MemoryRamTypeId,
		private readonly name: MemoryRamTypeName
	) {}

	static fromPrimitives(primitives: MemoryRamTypeDto): MemoryRamType {
		return new MemoryRamType(new MemoryRamTypeId(primitives.id), new MemoryRamTypeName(primitives.name))
	}

	toPrimitive(): MemoryRamTypePrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): Primitives<MemoryRamTypeId> {
		return this.id.value
	}

	get nameValue(): Primitives<MemoryRamTypeName> {
		return this.name.value
	}
}
