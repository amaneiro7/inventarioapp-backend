import { BrandId } from './BrandId'
import { BrandName } from './BrandName'
import { CategoryId } from '../../Category/Category/domain/CategoryId'
import { type BrandDto, type BrandParams, type BrandPrimitives } from './Brand.dto'

/**
 * @class Brand
 * @description Represents the Brand domain entity. This class encapsulates the business logic
 * and ensures the integrity of a brand's data through the use of Value Objects.
 */
export class Brand {
	/**
	 * @param {BrandId} id The unique identifier of the brand.
	 * @param {BrandName} name The name of the brand.
	 * @param {CategoryId[]} categories An array of category value objects associated with the brand.
	 */
	constructor(
		private readonly id: BrandId,
		private name: BrandName,
		private categories: CategoryId[]
	) {}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Brand` instance.
	 * It generates a random UUID for the brand's ID.
	 * @param {BrandParams} params The parameters required to create a brand (name and category IDs).
	 * @returns {Brand} A new `Brand` instance.
	 */
	static create(params: BrandParams): Brand {
		const id = BrandId.random()
		const name = new BrandName(params.name)
		const uniqueCategories = [...new Set(params.categories)]
		const categories = uniqueCategories.map(categoryId => new CategoryId(categoryId))
		return new Brand(id, name, categories)
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Brand` instance from its primitive representation (DTO).
	 * @param {BrandDto} primitives The primitive data of the brand.
	 * @returns {Brand} A `Brand` instance.
	 */
	static fromPrimitives(primitives: BrandDto): Brand {
		const uniqueCategories = [...new Set(primitives.categories.map(category => category.id))]
		return new Brand(
			new BrandId(primitives.id),
			new BrandName(primitives.name),
			uniqueCategories.map(categoryId => new CategoryId(categoryId))
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Brand` instance into its primitive, serializable representation.
	 * @returns {BrandPrimitives} The primitive representation of the brand.
	 */
	toPrimitive(): BrandPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			categories: this.categoriesValue
		}
	}

	/**
	 * @method updateName
	 * @description Updates the name of the brand.
	 * @param {BrandName['value']} newName The new name for the brand.
	 */
	updateName(newName: BrandName['value']): void {
		this.name = new BrandName(newName)
	}

	/**
	 * @method updateCategories
	 * @description Replaces the brand's associated categories with a new list.
	 * @param {CategoryId['value'][]} categoryIds An array of category IDs to set.
	 */
	updateCategories(categoryIds: CategoryId['value'][]): void {
		const uniqueCategories = [...new Set(categoryIds)]
		this.categories = uniqueCategories.map(categoryId => new CategoryId(categoryId))
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the brand's ID.
	 * @returns {BrandId['value']}
	 */
	get idValue(): BrandId['value'] {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the brand's name.
	 * @returns {BrandName['value']}
	 */
	get nameValue(): BrandName['value'] {
		return this.name.value
	}

	/**
	 * @getter categoriesValue
	 * @description Returns the primitive values of the brand's associated category IDs.
	 * @returns {CategoryId['value'][]}
	 */
	get categoriesValue(): CategoryId['value'][] {
		const categroyValues = this.categories.map(category => category.value)
		const uniqueCategories = new Set(categroyValues)
		return [...uniqueCategories]
	}
}
