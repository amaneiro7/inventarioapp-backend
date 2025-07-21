import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { type MainCategoryDto } from '../../MainCategory/domain/MainCategory.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

/**
 * Represents the basic structure of a Category.
 */
export interface Category {
	/**
	 * The unique identifier of the category.
	 * @type {Primitives<CategoryId>}
	 */
	id: Primitives<CategoryId>
	/**
	 * The name of the category.
	 * @type {Primitives<CategoryName>}
	 */
	name: Primitives<CategoryName>
	/**
	 * The identifier of the main category this category belongs to.
	 * @type {Primitives<MainCategoryId>}
	 */
	mainCategoryId: Primitives<MainCategoryId>
}

/**
 * Type for creating a new category, omitting the 'id'.
 */
export type CategoryParams = Omit<Category, 'id'>

/**
 * Represents the primitive type of a Category.
 */
export type CategoryPrimitives = Category

/**
 * Data Transfer Object for a Category, including the main category data.
 */
export type CategoryDto = Category & {
	/**
	 * The main category object associated with this category.
	 * @type {MainCategoryDto}
	 */
	mainCategory: MainCategoryDto
}
