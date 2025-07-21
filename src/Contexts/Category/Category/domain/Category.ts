import { MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { CategoryId } from './CategoryId'
import { CategoryName } from './CategoryName'
import { type CategoryPrimitives } from './Category.dto'

/**
 * Represents a category entity.
 *
 * @class Category
 */
export class Category {
	/**
	 * Creates an instance of Category.
	 * @param {CategoryId} id - The unique identifier for the category.
	 * @param {CategoryName} name - The name of the category.
	 * @param {MainCategoryId} mainCategoryId - The identifier of the main category this category belongs to.
	 */
	constructor(
		private readonly id: CategoryId,
		private readonly name: CategoryName,
		private readonly mainCategoryId: MainCategoryId
	) {}

	/**
	 * Creates a Category instance from its primitive representation.
	 *
	 * @static
	 * @param {CategoryPrimitives} primitives - The primitive data of the category.
	 * @returns {Category} A new Category instance.
	 */
	static fromPrimitives(primitives: CategoryPrimitives): Category {
		return new Category(
			new CategoryId(primitives.id),
			new CategoryName(primitives.name),
			new MainCategoryId(primitives.mainCategoryId)
		)
	}

	/**
	 * Converts the Category instance to its primitive representation.
	 *
	 * @returns {CategoryPrimitives} The primitive data of the category.
	 */
	toPrimitive(): CategoryPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			mainCategoryId: this.mainCategoryValue
		}
	}

	/**
	 * Gets the value of the category's ID.
	 * @type {CategoryId['value']}
	 */
	get idValue(): CategoryId['value'] {
		return this.id.value
	}

	/**
	 * Gets the value of the category's name.
	 * @type {CategoryName['value']}
	 */
	get nameValue(): CategoryName['value'] {
		return this.name.value
	}

	/**
	 * Gets the value of the main category's ID.
	 * @type {MainCategoryId['value']}
	 */
	get mainCategoryValue(): MainCategoryId['value'] {
		return this.mainCategoryId.value
	}
}
