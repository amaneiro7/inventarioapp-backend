import { Brand } from '../domain/Brand'
import { BrandName } from '../domain/BrandName'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/CategoryDoesNotExistError'
import { type CategoryId } from '../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandRepository } from '../domain/BrandRepository'
import { type BrandParams } from '../domain/Brand.dto'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'

/**
 * @class BrandCreator
 * @description Use case for creating a new Brand entity.
 * It ensures that the brand name does not already exist before creating and saving the brand.
 */
export class BrandCreator {
	/**
	 * @constructor
	 * @param {BrandRepository} brandRepository - The repository responsible for Brand data persistence.
	 * @param {CategoryRepository} categoryRepository - The repository responsible for Category data persistence.
	 */
	private readonly brandRepository: BrandRepository
	private readonly categoryRepository: CategoryRepository
	constructor({
		brandRepository,
		categoryRepository
	}: {
		brandRepository: BrandRepository
		categoryRepository: CategoryRepository
	}) {
		this.brandRepository = brandRepository
		this.categoryRepository = categoryRepository
	}

	/**
	 * @method run
	 * @description Executes the brand creation process.
	 * @param {BrandParams} params - The parameters for creating the brand, including its name.
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully created and saved.
	 * @throws {BrandAlreadyExistError} If a brand with the provided name already exists.
	 */
	async run(params: BrandParams): Promise<void> {
		await Promise.all([
			BrandName.ensureBrandNameDoesNotExist({ name: params.name, repository: this.brandRepository }),
			this.ensureCategoryExist(params.categories)
		])

		const brand = Brand.create(params).toPrimitive()

		await this.brandRepository.save(brand)
	}

	private async ensureCategoryExist(categories: Primitives<CategoryId>[]): Promise<void> {
		for (const categoryId of categories) {
			if ((await this.categoryRepository.searchById(categoryId)) === null) {
				throw new CategoryDoesNotExistError(categoryId)
			}
		}
	}
}
