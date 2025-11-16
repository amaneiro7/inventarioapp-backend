import { Brand } from '../domain/Brand'
import { BrandName } from '../domain/BrandName'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/CategoryDoesNotExistError'
import { type CategoryId } from '../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandRepository } from '../domain/BrandRepository'
import { type BrandParams } from '../domain/Brand.dto'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'

/**
 * @description Use case for creating a new Brand entity.
 * It ensures that the brand name does not already exist and that all associated categories are valid before creating and saving the brand.
 */
export class BrandCreator {
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
	 * @description Executes the brand creation process.
	 * It validates the brand name for uniqueness and ensures all specified categories exist.
	 * If validation passes, it creates and saves the new brand.
	 * @param {BrandParams} params The parameters for creating the brand, including its name and associated category IDs.
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully created and saved.
	 * @throws {BrandAlreadyExistError} If a brand with the provided name already exists.
	 * @throws {CategoryDoesNotExistError} If any of the provided category IDs do not correspond to an existing category.
	 */
	async run(params: BrandParams): Promise<void> {
		const { name, categories } = params

		// Perform validation checks in parallel for efficiency
		await Promise.all([
			BrandName.ensureBrandNameDoesNotExist({ name, repository: this.brandRepository }),
			this.ensureCategoriesExist(categories)
		])

		// Create and save the brand if validations pass
		const brand = Brand.create(params)
		await this.brandRepository.save(brand.toPrimitive())
	}

	/**
	 * @private
	 * @description Ensures that all provided category IDs exist in the database.
	 * It performs the checks in parallel to optimize performance.
	 * @param {Primitives<CategoryId>[]} categoryIds An array of category IDs to validate.
	 * @returns {Promise<void>} A promise that resolves if all categories exist.
	 * @throws {CategoryDoesNotExistError} If any category ID is not found.
	 */
	private async ensureCategoriesExist(categoryIds: Primitives<CategoryId>[]): Promise<void> {
		if (categoryIds.length === 0) {
			return
		}
		const uniqueCategories = [...new Set(categoryIds)]
		// Create an array of promises to check for the existence of each category
		const categoryExistenceChecks = uniqueCategories.map(async categoryId => {
			const category = await this.categoryRepository.findById(categoryId)
			if (category === null) {
				throw new CategoryDoesNotExistError(categoryId)
			}
		})
		// Await all checks to complete
		await Promise.all(categoryExistenceChecks)
	}
}
