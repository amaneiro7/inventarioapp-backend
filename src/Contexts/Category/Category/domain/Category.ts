import { MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { CategoryId } from './CategoryId'
import { CategoryName } from './CategoryName'
import { type CategoryPrimitives } from './Category.dto'

/**
 * @class Category
 * @description Represents the Category domain entity. This class encapsulates the business logic
 * and ensures the integrity of a category's data through the use of Value Objects.
 */
export class Category {
	/**
	 * @param {CategoryId} id The unique identifier for the category.
	 * @param {CategoryName} name The name of the category.
	 * @param {MainCategoryId} mainCategoryId The identifier of the main category this category belongs to.
	 */
	constructor(
		private readonly id: CategoryId,
		private readonly name: CategoryName,
		private readonly mainCategoryId: MainCategoryId
	) {}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Category` instance from its primitive representation.
	 * @param {CategoryPrimitives} primitives The primitive data of the category.
	 * @returns {Category} A new `Category` instance.
	 */
	static fromPrimitives(primitives: CategoryPrimitives): Category {
		return new Category(
			new CategoryId(primitives.id),
			new CategoryName(primitives.name),
			new MainCategoryId(primitives.mainCategoryId)
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Category` instance into its primitive, serializable representation.
	 * @returns {CategoryPrimitives} The primitive representation of the category.
	 */
	toPrimitive(): CategoryPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			mainCategoryId: this.mainCategoryValue
		}
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the category's ID.
	 * @returns {CategoryId['value']}
	 */
	get idValue(): CategoryId['value'] {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the category's name.
	 * @returns {CategoryName['value']}
	 */
	get nameValue(): CategoryName['value'] {
		return this.name.value
	}

	/**
	 * @getter mainCategoryValue
	 * @description Returns the primitive value of the main category's ID.
	 * @returns {MainCategoryId['value']}
	 */
	get mainCategoryValue(): MainCategoryId['value'] {
		return this.mainCategoryId.value
	}
}
