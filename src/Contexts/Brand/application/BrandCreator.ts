import { Brand } from '../domain/Brand'
import { BrandName } from '../domain/BrandName'
import { type BrandRepository } from '../domain/BrandRepository'
import { type BrandParams } from '../domain/Brand.dto'

/**
 * @class BrandCreator
 * @description Use case for creating a new Brand entity.
 * It ensures that the brand name does not already exist before creating and saving the brand.
 */
export class BrandCreator {
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
	 * @description Executes the brand creation process.
	 * @param {BrandParams} params - The parameters for creating the brand, including its name.
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully created and saved.
	 * @throws {BrandAlreadyExistError} If a brand with the provided name already exists.
	 */
	async run(params: BrandParams): Promise<void> {
		await BrandName.ensureBrandNameDoesNotExist({ name: params.name, repository: this.brandRepository })

		const brand = Brand.create(params).toPrimitive()

		await this.brandRepository.save(brand)
	}
}
