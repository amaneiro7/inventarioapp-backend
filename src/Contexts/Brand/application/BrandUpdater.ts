import { Brand } from '../domain/Brand'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { BrandName } from '../domain/BrandName'
import { type BrandRepository } from '../domain/BrandRepository'

/**
 * @class BrandUpdater
 * @description Use case for updating an existing Brand entity.
 * It ensures the brand exists and that the new name is valid and unique before updating.
 */
export class BrandUpdater {
	/**
	 * @constructor
	 * @param {BrandRepository} brandRepository - The repository responsible for Brand data persistence.
	 */	constructor(private readonly brandRepository: BrandRepository) {}

	/**
	 * @method run
	 * @description Executes the brand update process.
	 * @param {object} params - The parameters for updating the brand.
	 * @param {string} params.id - The unique identifier of the brand to update.
	 * @param {string} params.newName - The new name for the brand.
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully updated.
	 * @throws {BrandDoesNotExistError} If the brand with the provided ID does not exist.
	 * @throws {BrandAlreadyExistError} If the new name already exists for another brand.
	 * @throws {InvalidArgumentError} If the new name is not valid (e.g., invalid length).
	 */	async run(params: { id: string; newName: string }): Promise<void> {
		const { id, newName } = params
		const brandId = new BrandId(id)

		const brand = await this.brandRepository.searchById(brandId.value)
		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)
		await BrandName.updateNameField({ entity: brandEntity, repository: this.brandRepository, name: newName })

		await this.brandRepository.save(brandEntity.toPrimitive())
	}
}
