import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { type MainCategoryDto } from '../../MainCategory/domain/MainCategory.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

/**
 * @interface Category
 * @description Defines the core properties of a Category entity.
 */
export interface Category {
	/**
	 * @property {Primitives<CategoryId>} id The unique identifier of the category.
	 */
	id: Primitives<CategoryId>
	/**
	 * @property {Primitives<CategoryName>} name The name of the category.
	 */
	name: Primitives<CategoryName>
	/**
	 * @property {Primitives<MainCategoryId>} mainCategoryId The identifier of the main category this sub-category belongs to.
	 */
	mainCategoryId: Primitives<MainCategoryId>
}

/**
 * @type CategoryParams
 * @description Represents the set of parameters required to create a new Category.
 * The 'id' is omitted as it is typically generated automatically.
 */
export type CategoryParams = Omit<Category, 'id'>

/**
 * @type CategoryPrimitives
 * @description Represents the primitive, serializable state of a Category entity.
 * This type is ideal for data transfer, persistence, or logging.
 */
export type CategoryPrimitives = Category

/**
 * @type CategoryDto
 * @description Represents a Data Transfer Object (DTO) for the Category entity.
 * It includes the full main category object for client-side display.
 */
export type CategoryDto = Category & {
	/**
	 * @property {MainCategoryDto} mainCategory The main category DTO associated with this category.
	 */
	mainCategory: MainCategoryDto
}
