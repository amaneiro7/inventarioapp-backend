import { Brand } from '../domain/entity/Brand'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/errors/CategoryDoesNotExistError'
import { BrandAlreadyExistError } from '../domain/errors/BrandAlreadyExistError'
import { type CategoryId } from '../../Category/Category/domain/valueObject/CategoryId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandRepository } from '../domain/repository/BrandRepository'
import { type BrandParams } from '../domain/entity/Brand.dto'
import { type CategoryRepository } from '../../Category/Category/domain/repository/CategoryRepository'
import { type EventBus } from '../../Shared/domain/event/EventBus'

/**
 * @description Use case for creating a new Brand entity.
 * It ensures that the brand name does not already exist and that all associated categories are valid before creating and saving the brand.
 */
export class BrandCreator {
	private readonly brandRepository: BrandRepository
	private readonly categoryRepository: CategoryRepository
	private readonly eventBus: EventBus

	constructor({
		brandRepository,
		categoryRepository,
		eventBus
	}: {
		brandRepository: BrandRepository
		categoryRepository: CategoryRepository
		eventBus: EventBus
	}) {
		this.brandRepository = brandRepository
		this.categoryRepository = categoryRepository
		this.eventBus = eventBus
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
		await Promise.all([this.ensureBrandNameIsUnique(name), this.ensureCategoriesExist(categories)])

		// Create and save the brand if validations pass
		const brand = Brand.create({ name, categories })
		await this.brandRepository.save(brand.toPrimitives())
		await this.eventBus.publish(brand.pullDomainEvents())
	}

	/**
	 * @private
	 * @description Checks if a brand name is already in use.
	 */
	private async ensureBrandNameIsUnique(name: string): Promise<void> {
		if (await this.brandRepository.findByName(name)) {
			throw new BrandAlreadyExistError(name)
		}
	}

	/**
	 * @private
	 * @description Ensures that all provided category IDs exist in the database.
	 * It performs the checks in parallel to optimize performance.
	 * @param {Primitives<CategoryId>[]} categoryIds An array of category IDs to validate.
	 * @returns {Promise<void>} A promise that resolves if all categories exist.
	 * @throws {CategoryDoesNotExistError} If any category ID is not found.
	 */
	private async ensureCategoriesExist(categoryIds?: Primitives<CategoryId>[]): Promise<void> {
		if (!categoryIds || categoryIds.length === 0) {
			return
		}
		const uniqueCategories = [...new Set(categoryIds)]
		// Find all categories in a single database query for efficiency.
		const foundCategories = await this.categoryRepository.findByIds(uniqueCategories)

		// If the number of found categories does not match the number of unique IDs,
		// it means at least one category does not exist.
		if (foundCategories.length !== uniqueCategories.length) {
			// Identify which categories were not found to provide a more helpful error message.
			const foundIds = new Set(foundCategories.map(c => c.id))
			const missingIds = uniqueCategories.filter(id => !foundIds.has(id))

			throw new CategoryDoesNotExistError(missingIds.join(', '))
		}
	}
}
