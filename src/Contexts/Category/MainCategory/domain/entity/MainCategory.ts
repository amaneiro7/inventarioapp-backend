import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { MainCategoryName } from '../valueObject/MainCategoryName'
import { MainCategoryId } from '../valueObject/MainCategoryId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryPrimitives } from './MainCategory.dto'

/**
 * @class MainCategory
 * @description Represents the Main Category domain entity. This class encapsulates the business logic
 * and ensures the integrity of a main category's data through the use of Value Objects.
 */
export class MainCategory extends AggregateRoot {
	/**
	 * @param {MainCategoryId} id The unique identifier for the main category.
	 * @param {MainCategoryName} name The name of the main category.
	 */
	constructor(
		private readonly id: MainCategoryId,
		private readonly name: MainCategoryName
	) {
		super()
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `MainCategory` instance from its primitive representation.
	 * @param {MainCategoryPrimitives} primitives The primitive data of the main category.
	 * @returns {MainCategory} A new `MainCategory` instance.
	 */
	static fromPrimitives(primitives: MainCategoryPrimitives): MainCategory {
		return new MainCategory(new MainCategoryId(primitives.id), new MainCategoryName(primitives.name))
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `MainCategory` instance into its primitive, serializable representation.
	 * @returns {MainCategoryPrimitives} The primitive representation of the main category.
	 */
	toPrimitives(): MainCategoryPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the main category's ID.
	 * @returns {Primitives<MainCategoryId>}
	 */
	get idValue(): Primitives<MainCategoryId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the main category's name.
	 * @returns {Primitives<MainCategoryName>}
	 */
	get nameValue(): Primitives<MainCategoryName> {
		return this.name.value
	}
}
