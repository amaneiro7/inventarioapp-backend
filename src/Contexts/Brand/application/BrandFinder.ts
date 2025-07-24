import { BrandId } from '../domain/BrandId'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { type BrandDto } from '../domain/Brand.dto'
import { type BrandRepository } from '../domain/BrandRepository'

/**
 * @class BrandFinder
 * @description Use case for finding a Brand entity by its unique identifier.
 */
export class BrandFinder {
	/**
	 * @constructor
	 * @param {BrandRepository} brandRepository - The repository responsible for Brand data persistence.
	 */
	private readonly brandRepository: BrandRepository
	constructor({ brandRepository }: { brandRepository: BrandRepository }) {
		this.brandRepository = brandRepository
	}

	/**
	 * @method run
	 * @description Executes the brand finding process.
	 * @param {object} params - The parameters for finding the brand.
	 * @param {string} params.id - The unique identifier of the brand to find.
	 * @returns {Promise<BrandDto>} A promise that resolves to the found Brand DTO.
	 * @throws {BrandDoesNotExistError} If no brand with the provided ID is found.
	 */
	async run(params: { id: string }): Promise<BrandDto> {
		const { id } = params
		const brandId = new BrandId(id)
		const brand = await this.brandRepository.searchById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(brandId.value)
		}

		return brand
	}
}
