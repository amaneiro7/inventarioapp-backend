import { type BrandParams, type BrandPrimitives } from './Brand.dto'
import { BrandId } from './BrandId'
import { BrandName } from './BrandName'
export class Brand {
	constructor(
		private readonly id: BrandId,
		private name: BrandName
	) {}

	static create(params: BrandParams): Brand {
		const id = BrandId.random().value
		return new Brand(new BrandId(id), new BrandName(params.name))
	}

	updateName(newName: BrandName['value']): void {
		this.name = new BrandName(newName)
	}

	static fromPrimitives(primitives: BrandPrimitives): Brand {
		return new Brand(new BrandId(primitives.id), new BrandName(primitives.name))
	}

	toPrimitive(): BrandPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	get idValue(): BrandId['value'] {
		return this.id.value
	}

	get nameValue(): BrandName['value'] {
		return this.name.value
	}
}
