import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteDto, type TypeOfSitePrimitives } from './TypeOfSite.dto'
import { TypeOfSiteId } from '../valueObject/TypeOfSiteId'
import { TypeOfSiteName } from '../valueObject/TypeOfSiteName'
import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'

/**
 * Represents a TypeOfSite domain entity.
 */
export class TypeOfSite extends AggregateRoot {
	/**
	 * Constructs a TypeOfSite instance.
	 * @param {TypeOfSiteId} id - The unique identifier of the type of site.
	 * @param {TypeOfSiteName} name - The name of the type of site.
	 */
	private constructor(
		private readonly id: TypeOfSiteId,
		private readonly name: TypeOfSiteName
	) {
		super()
	}

	/**
	 * Creates a TypeOfSite instance from primitive data.
	 * @param {TypeOfSiteDto} primitives - The primitive data for the type of site.
	 * @returns {TypeOfSite} A new TypeOfSite instance.
	 */
	static fromPrimitives(primitives: TypeOfSiteDto): TypeOfSite {
		return new TypeOfSite(new TypeOfSiteId(primitives.id), new TypeOfSiteName(primitives.name))
	}

	/**
	 * Converts the TypeOfSite instance to its primitive representation.
	 * @returns {TypeOfSitePrimitives} The primitive representation of the type of site.
	 */
	toPrimitives(): TypeOfSitePrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the type of site's ID.
	 * @returns {Primitives<TypeOfSiteId>} The ID value.
	 */
	get idValue(): Primitives<TypeOfSiteId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the type of site's name.
	 * @returns {Primitives<TypeOfSiteName>} The name value.
	 */
	get nameValue(): Primitives<TypeOfSiteName> {
		return this.name.value
	}
}
