import { type BrandParams, type BrandPrimitives } from './Brand.dto'
import { BrandId } from './BrandId'
import { BrandName } from './BrandName'

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
	 */
	constructor(
		private readonly id: BrandId,
		private name: BrandName
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
		return new Brand(new BrandId(id), new BrandName(params.name))
	}

	/**
	 * @method updateName
	 * @description Updates the name of the brand.
	 * @param {BrandName['value']} newName - The new name for the brand.
	 */
	updateName(newName: BrandName['value']): void {
		this.name = new BrandName(newName)
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a Brand instance from its primitive representation.
	 * @param {BrandPrimitives} primitives - The primitive representation of the brand.
	 * @returns {Brand} A Brand instance.
	 */
	static fromPrimitives(primitives: BrandPrimitives): Brand {
		return new Brand(new BrandId(primitives.id), new BrandName(primitives.name))
	}

	/**
	 * @method toPrimitive
	 * @description Converts the Brand instance to its primitive representation.
	 * @returns {BrandPrimitives} The primitive representation of the brand.
	 */
	toPrimitive(): BrandPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
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
}
