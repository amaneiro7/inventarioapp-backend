import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from './MainCategoryId'
import { type MainCategoryName } from './MainCategoryName'

/**
 * Represents the basic structure of a Main Category.
 */
export interface MainCategory {
	/**
	 * The unique identifier of the main category.
	 * @type {Primitives<MainCategoryId>}
	 */
	id: Primitives<MainCategoryId>
	/**
	 * The name of the main category.
	 * @type {Primitives<MainCategoryName>}
	 */
	name: Primitives<MainCategoryName>
}

/**
 * Type for creating a new main category, omitting the 'id'.
 */
export type MainCategoryParams = Omit<MainCategory, 'id'>

/**
 * Represents the primitive type of a Main Category.
 */
export type MainCategoryPrimitives = MainCategory

/**
 * Data Transfer Object for a Main Category.
 */
export type MainCategoryDto = MainCategory
