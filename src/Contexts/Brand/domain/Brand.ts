import { BrandId } from './BrandId'
import { BrandName } from './BrandName'
import { CategoryId } from '../../Category/Category/domain/CategoryId'
import { type Category } from '../../Category/Category/domain/Category.dto'
import { type BrandDto, type BrandParams, type BrandPrimitives } from './Brand.dto'

/**
 * @class Brand
 * @description Represents the Brand domain entity. Encapsulates brand-specific business logic
 * and ensures the integrity of brand data using Value Objects.
 */
export class Brand {
	/**
	 * @private
	 * @param {BrandId} id - The unique identifier of the brand.
	 * @param {BrandName} name - The name of the brand.
	 * @param {CategoryId[]} categories - The name of the brand.
	 */
	constructor(
		private readonly id: BrandId,
		private name: BrandName,
		private categories: CategoryId[]
	) {}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new Brand instance with a randomly generated ID.
	 * @param {BrandParams} params - The parameters required to create a brand (e.g., name).
	 * @returns {Brand} A new Brand instance.
	 */
	static create(params: BrandParams): Brand {
		const id = BrandId.random().value
		const categories = params.categories.map(categoryId => new CategoryId(categoryId))
		return new Brand(new BrandId(id), new BrandName(params.name), categories)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the brand.
	 * @param {BrandName['value']} newName - The new name for the brand.
	 */
	updateName(newName: BrandName['value']): void {
		this.name = new BrandName(newName)
	}

	updateCategories(categoryIds: CategoryId['value'][]): void {
		this.categories = categoryIds.map(categoryId => new CategoryId(categoryId))
	}

	static addCategoryIds(categories: Category[]): CategoryId[] {
		return categories.map(category => new CategoryId(category.id))
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a Brand instance from its primitive representation.
	 * @param {BrandPrimitives} primitives - The primitive representation of the brand.
	 * @returns {Brand} A Brand instance.
	 */
	static fromPrimitives(primitives: BrandDto): Brand {
		return new Brand(
			new BrandId(primitives.id),
			new BrandName(primitives.name),
			this.addCategoryIds(primitives.categories)
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the Brand instance to its primitive representation.
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
	 * @property {string} idValue
	 * @description Getter for the primitive value of the brand's ID.
	 */
	get idValue(): BrandId['value'] {
		return this.id.value
	}

	/**
	 * @property {string} nameValue
	 * @description Getter for the primitive value of the brand's name.
	 */
	get nameValue(): BrandName['value'] {
		return this.name.value
	}

	get categoriesValue(): CategoryId['value'][] {
		return this.categories.map(category => category.value)
	}
}
