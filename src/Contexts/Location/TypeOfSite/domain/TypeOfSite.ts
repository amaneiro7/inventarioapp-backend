import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteDto, type TypeOfSitePrimitives } from './TypeOfSite.dto'
import { TypeOfSiteId } from './TypeOfSiteId'
import { TypeOfSiteName } from './TypeOfSiteName'

export class TypeOfSite {
	constructor(
		private readonly id: TypeOfSiteId,
		private readonly name: TypeOfSiteName
	) {}

	static fromPrimitives(primitives: TypeOfSiteDto): TypeOfSite {
		return new TypeOfSite(
			new TypeOfSiteId(primitives.id),
			new TypeOfSiteName(primitives.name)
		)
	}

	toPrimitive(): TypeOfSitePrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<TypeOfSiteId> {
		return this.id.value
	}

	get nameValue(): Primitives<TypeOfSiteName> {
		return this.name.value
	}
}
