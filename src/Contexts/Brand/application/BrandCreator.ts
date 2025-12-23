import { Brand } from '../domain/entity/Brand'
import { CategoryExistenceChecker } from '../domain/service/CategoryExistenceChecker'
import { BrandNameUniquenessChecker } from '../domain/service/BrandNameUniquenessChecker'
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
	private readonly brandNameUniquenessChecker: BrandNameUniquenessChecker
	private readonly categoryExistenceChecker: CategoryExistenceChecker
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
		this.brandNameUniquenessChecker = new BrandNameUniquenessChecker(brandRepository)
		this.categoryExistenceChecker = new CategoryExistenceChecker(categoryRepository)
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
		await Promise.all([
			this.brandNameUniquenessChecker.ensureUnique(name),
			this.categoryExistenceChecker.ensureExist(categories)
		])

		// Create and save the brand if validations pass
		const brand = Brand.create({ name, categories })
		await this.brandRepository.save(brand.toPrimitives())
		await this.eventBus.publish(brand.pullDomainEvents())
	}
}
