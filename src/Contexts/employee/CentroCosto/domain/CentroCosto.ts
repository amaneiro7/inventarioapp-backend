import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoDto, type CentroCostoParams, type CentroCostoPrimitives } from './CentroCosto.dto'
import { CentroCostoName } from './CentroCostoName'
import { CodCentroCosto } from './CodCentroCosto'

/**
 * @description Represents the CentroCosto domain entity.
 */
export class CentroCosto {
	constructor(
		private readonly id: CodCentroCosto,
		private name: CentroCostoName
	) {}

	static create({ name, id }: CentroCostoParams): CentroCosto {
		return new CentroCosto(new CodCentroCosto(id), new CentroCostoName(name))
	}

	static fromPrimitives(primitives: CentroCostoDto): CentroCosto {
		return new CentroCosto(new CodCentroCosto(primitives.id), new CentroCostoName(primitives.name))
	}

	toPrimitive(): CentroCostoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	updateName(newName: Primitives<CentroCostoName>): void {
		this.name = new CentroCostoName(newName)
	}

	get idValue(): Primitives<CodCentroCosto> {
		return this.id.value
	}

	get nameValue(): Primitives<CentroCostoName> {
		return this.name.value
	}
}
