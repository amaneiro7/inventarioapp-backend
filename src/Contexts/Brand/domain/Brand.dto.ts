import { type CategoryDto } from '../../Category/Category/domain/Category.dto'
import { type CategoryId } from '../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandId } from './BrandId'
import { type BrandName } from './BrandName'

/**
 * @interface Brand
 * @description Represents the core structure of a Brand entity.
 * It defines the properties that a Brand object should have, including its ID and name.
 */
export interface Brand {
	id: Primitives<BrandId>
	name: Primitives<BrandName>
}

/**
 * @type BrandParams
 * @description Represents the parameters required to create a new Brand.
 * It omits the 'id' property as it's typically generated upon creation.
 */
export type BrandParams = Omit<
	Brand & {
		categories: Primitives<CategoryId>[]
	},
	'id'
>

/**
 * @type BrandPrimitives
 * @description Represents the primitive data types of a Brand entity.
 * This type is useful for serialization/deserialization or when interacting with data stores.
 * Currently, it mirrors the `Brand` interface.
 */
export type BrandPrimitives = Brand & {
	categories: Primitives<CategoryId>[]
}

/**
 * @type BrandDto
 * @description Represents a Data Transfer Object (DTO) for the Brand entity.
 * This type is used for transferring brand data between different layers of the application.
 * Currently, it mirrors the `Brand` interface.
 */
export type BrandDto = Brand & {
	categories: CategoryDto[]
}
