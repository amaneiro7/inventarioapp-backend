import { InvalidArgumentError } from '../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject'
import { BrandAlreadyExistError } from './BrandAlreadyExistError'
import { type Brand } from './Brand'
import { type BrandRepository } from './BrandRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'

/**
 * @class BrandName
 * @extends StringValueObject
 * @description Represents the Value Object for a Brand's name. Encapsulates validation rules
 * and business logic related to the brand name, such as uniqueness checks.
 */
export class BrandName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 2

	/**
	 * @constructor
	 * @param {string} value - The raw string value of the brand name.
	 * @throws {InvalidArgumentError} If the provided name is not valid based on length constraints.
	 */	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	/**
	 * @method toPrimitives
	 * @description Converts the BrandName Value Object to its primitive string representation.
	 * @returns {string} The primitive string value of the brand name.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * @private
	 * @method ensureIsValidName
	 * @description Ensures that the provided brand name meets the defined validation rules.
	 * @param {BrandName['value']} value - The brand name to validate.
	 * @throws {InvalidArgumentError} If the name is not valid.
	 */
	private ensureIsValidName(value: BrandName['value']): void {
		if (!this.isBrandNameValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es un nombre de marca válido. Debe tener entre ${this.NAME_MIN_LENGTH} y ${this.NAME_MAX_LENGTH} caracteres.`)
		}
	}

	/**
	 * @private
	 * @method isBrandNameValid
	 * @description Checks if the brand name's length is within the allowed range.
	 * @param {BrandName['value']} name - The brand name to check.
	 * @returns {boolean} True if the name is valid, false otherwise.
	 */
	private isBrandNameValid(name: BrandName['value']): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	/**
	 * @static
	 * @method updateNameField
	 * @description Handles the logic for updating a brand's name. It checks for uniqueness
	 * and updates the entity's name if the new name is different and valid.
	 * @param {object} params - The parameters for updating the name.
	 * @param {BrandRepository} params.repository - The brand repository for uniqueness checks.
	 * @param {Primitives<BrandName>} [params.name] - The new name to set. If undefined, no action is taken.
	 * @param {Brand} params.entity - The Brand entity to update.
	 * @returns {Promise<void>} A promise that resolves when the name is updated or no action is needed.
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
		// If no new name is provided or the new name is the same as the current one, do nothing.
		if (name === undefined || entity.nameValue === name) {
			return
		}
		// Ensure the new name does not already exist in the database.
		await BrandName.ensureBrandNameDoesNotExist({
			repository,
			name
		})
		// Update the entity's name with the new, validated name.
		entity.updateName(name)
	}

	/**
	 * @static
	 * @method ensureBrandNameDoesNotExist
	 * @description Checks if a brand name already exists in the repository. If it does, it throws an error.
	 * This is crucial for maintaining the uniqueness constraint of brand names.
	 * @param {object} params - The parameters for the check.
	 * @param {BrandRepository} params.repository - The brand repository to perform the search.
	 * @param {Primitives<BrandName>} params.name - The brand name to check for existence.
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
		// Search for a brand with the provided name in the database.
		const brand = await repository.searchByName(name)

		// If a brand is found, it means the name already exists, so throw an error.
		if (brand) {
			throw new BrandAlreadyExistError(name)
		}
	}
}
