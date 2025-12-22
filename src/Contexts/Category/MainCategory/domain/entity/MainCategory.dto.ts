import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../valueObject/MainCategoryId'
import { type MainCategoryName } from '../valueObject/MainCategoryName'

/**
 * @interface MainCategory
 * @description Defines the core properties of a Main Category entity.
 */
export interface MainCategory {
	/**
	 * @property {Primitives<MainCategoryId>} id The unique identifier of the main category.
	 */
	id: Primitives<MainCategoryId>
	/**
	 * @property {Primitives<MainCategoryName>} name The name of the main category.
	 */
	name: Primitives<MainCategoryName>
}

/**
 * @type MainCategoryParams
 * @description Represents the set of parameters required to create a new Main Category.
 * The 'id' is omitted as it is typically generated automatically.
 */
export type MainCategoryParams = Omit<MainCategory, 'id'>

/**
 * @type MainCategoryPrimitives
 * @description Represents the primitive, serializable state of a Main Category entity.
 * This type is ideal for data transfer, persistence, or logging.
 */
export type MainCategoryPrimitives = MainCategory

/**
 * @type MainCategoryDto
 * @description Represents a Data Transfer Object (DTO) for the Main Category entity.
 */
export type MainCategoryDto = MainCategory
