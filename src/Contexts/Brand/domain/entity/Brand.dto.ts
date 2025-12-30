import { type CategoryDto } from '../../../Category/Category/domain/entity/Category.dto'
import { type CategoryId } from '../../../Category/Category/domain/valueObject/CategoryId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../valueObject/BrandId'
import { type BrandName } from '../valueObject/BrandName'

/**
 * @interface Brand
 * @description Defines the core properties of a Brand entity.
 */
export interface Brand {
	id: Primitives<BrandId>
	name: Primitives<BrandName>
}

/**
 * @type BrandParams
 * @description Represents the set of parameters required to create a new Brand.
 * The 'id' is omitted as it is generated automatically upon creation.
 */
export type BrandParams = Omit<
	Brand & {
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
	categories: Primitives<CategoryId>[]
}

/**
 * @type BrandDto
 * @description Represents a Data Transfer Object (DTO) for the Brand entity.
 * It typically includes related data, such as the full category objects, for client-side display.
 */
export type BrandDto = Brand & {
	categories: CategoryDto[]
}
