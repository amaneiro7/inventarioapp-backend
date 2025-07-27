import { BrandId } from '../domain/BrandId'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { type BrandDto } from '../domain/Brand.dto'
import { type BrandRepository } from '../domain/BrandRepository'

/**
 * @description Use case for finding a Brand entity by its unique identifier.
 */
export class BrandFinder {
	private readonly brandRepository: BrandRepository

	constructor({ brandRepository }: { brandRepository: BrandRepository }) {
		this.brandRepository = brandRepository
	}

	/**
	 * @description Executes the brand finding process.
	 * @param {{ id: string }} params The parameters for finding the brand.
	 * @param {string} params.id The unique identifier (UUID) of the brand to find.
	 * @returns {Promise<BrandDto>} A promise that resolves to the found Brand DTO.
	 * @throws {BrandDoesNotExistError} If no brand with the provided ID is found.
	 * @throws {InvalidArgumentError} If the provided ID is not a valid UUID.
	 */
	async run({ id }: { id: string }): Promise<BrandDto> {
		const brandId = new BrandId(id)
		const brand = await this.brandRepository.searchById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(brandId.value)
		}

		return brand
	}
}
