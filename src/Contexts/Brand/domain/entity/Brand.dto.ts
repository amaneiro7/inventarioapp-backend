import { type CategoryDto } from '../../../Category/Category/domain/Category.dto'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../valueObject/BrandId'
import { type BrandName } from '../valueObject/BrandName'

/**
 * @interface Brand
 * @description Defines the core properties of a Brand entity.
 */
export interface Brand {
	/**
	 * @property {Primitives<BrandId>} id The unique identifier of the brand.
	 */
	id: Primitives<BrandId>
	/**
	 * @property {Primitives<BrandName>} name The name of the brand.
	 */
	name: Primitives<BrandName>
}

/**
 * @type BrandParams
 * @description Represents the set of parameters required to create a new Brand.
 * The 'id' is omitted as it is generated automatically upon creation.
 */
export type BrandParams = Omit<
	Brand & {
		/**
		 * @property {Primitives<CategoryId>[]} categories An array of category IDs to associate with the brand.
		 */
		categories: Primitives<CategoryId>[]
	},
	'id'
>

/**
 * @type BrandPrimitives
 * @description Represents the primitive, serializable state of a Brand entity.
 * This type is ideal for data transfer, persistence, or logging.
 */
export type BrandPrimitives = Brand & {
	/**
	 * @property {Primitives<CategoryId>[]} categories An array of category IDs associated with the brand.
	 */
	categories: Primitives<CategoryId>[]
}

/**
 * @type BrandDto
 * @description Represents a Data Transfer Object (DTO) for the Brand entity.
 * It typically includes related data, such as the full category objects, for client-side display.
 */
export type BrandDto = Brand & {
	/**
	 * @property {CategoryDto[]} categories An array of category DTOs associated with the brand.
	 */
	categories: CategoryDto[]
}
