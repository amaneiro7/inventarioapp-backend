import { InvalidArgumentError } from '../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject'
import { BrandAlreadyExistError } from './BrandAlreadyExistError'
import { type Brand } from './Brand'
import { type BrandRepository } from './BrandRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'

/**
 * @class BrandName
 * @extends StringValueObject
 * @description Represents the Value Object for a Brand's name.
 * It encapsulates validation rules and business logic related to the brand name.
 */
export class BrandName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 100

	/**
	 * @param {string} value The raw string value of the brand name.
	 * @throws {InvalidArgumentError} If the provided name does not meet the length constraints.
	 */
	constructor(readonly value: string) {
		super(value)
		this.ensureNameHasValidLength(value)
	}

	/**
	 * @private
	 * @method ensureNameHasValidLength
	 * @description Validates that the brand name's length is within the allowed range.
	 * @param {string} name The brand name to validate.
	 * @throws {InvalidArgumentError} If the name's length is invalid.
	 */
	private ensureNameHasValidLength(name: string): void {
		if (name.length < this.MIN_LENGTH || name.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`<${name}> no es un nombre de marca válido. Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}

	/**
	 * @static
	 * @method updateNameField
	 * @description Handles the logic for updating a brand's name. It checks for uniqueness
	 * and updates the entity's name if the new name is different and valid.
	 * @param {{ repository: BrandRepository; name?: Primitives<BrandName>; entity: Brand }} params The parameters for updating the name.
	 * @returns {Promise<void>} A promise that resolves when the name is updated or if no action is needed.
	 * @throws {BrandAlreadyExistError} If the new name already exists in the repository.
	 */
	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: BrandRepository
		name?: Primitives<BrandName>
		entity: Brand
	}): Promise<void> {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		await BrandName.ensureBrandNameDoesNotExist({ repository, name })
		entity.updateName(name)
	}

	/**
	 * @static
	 * @method ensureBrandNameDoesNotExist
	 * @description Checks if a brand name already exists in the repository.
	 * This is crucial for maintaining the uniqueness constraint of brand names.
	 * @param {{ repository: BrandRepository; name: Primitives<BrandName> }} params The parameters for the check.
	 * @returns {Promise<void>} A promise that resolves if the name does not exist.
	 * @throws {BrandAlreadyExistError} If a brand with the given name already exists.
	 */
	static async ensureBrandNameDoesNotExist({
		repository,
		name
	}: {
		repository: BrandRepository
		name: Primitives<BrandName>
	}): Promise<void> {
		const existingBrand = await repository.searchByName(name)
		if (existingBrand) {
			throw new BrandAlreadyExistError(name)
		}
	}
}
