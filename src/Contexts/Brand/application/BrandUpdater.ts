import { Brand } from '../domain/entity/Brand'
import { BrandId } from '../domain/valueObject/BrandId'
import { CategoryId } from '../../Category/Category/domain/valueObject/CategoryId'
import { BrandNameUniquenessChecker } from '../domain/service/BrandNameUniquenessChecker'
import { CategoryExistenceChecker } from '../../Category/Category/domain/service/CategoryExistenceChecker'
import { BrandDoesNotExistError } from '../domain/errors/BrandDoesNotExistError'
import { type CategoryRepository } from '../../Category/Category/domain/repository/CategoryRepository'
import { type BrandRepository } from '../domain/repository/BrandRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandChangeFields, type BrandParams } from '../domain/entity/Brand.dto'
import { type EventBus } from '../../Shared/domain/event/EventBus'
/**
 * @description Use case for updating an existing Brand entity.
 * It ensures the brand exists and that the new name is valid and unique before applying updates.
 * It can also update the list of associated categories.
 */
export class BrandUpdater {
	private readonly brandRepository: BrandRepository
	private readonly eventBus: EventBus
	private readonly brandNameUniquenessChecker: BrandNameUniquenessChecker
	private readonly categoryExistenceChecker: CategoryExistenceChecker

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
		this.eventBus = eventBus
		this.brandNameUniquenessChecker = new BrandNameUniquenessChecker(brandRepository)
		this.categoryExistenceChecker = new CategoryExistenceChecker(categoryRepository)
	}

	/**
	 * @description Executes the brand update process.
	 * @param {{ id: Primitives<BrandId>; params: Partial<BrandParams> }} params The parameters for updating the brand.
	 * @param {Primitives<BrandId>} params.id The unique identifier of the brand to update.
	 * @param {Partial<BrandParams>} params.params The new data for the brand (e.g., name, categories).
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully updated.
	 * @throws {BrandDoesNotExistError} If the brand with the provided ID does not exist.
	 * @throws {BrandAlreadyExistError} If the new name already exists for another brand.
	 * @throws {InvalidArgumentError} If the new name is not valid (e.g., invalid length).
	 * @throws {CategoryDoesNotExistError} If any of the provided category IDs do not exist.
	 */
	async run({ id, params }: { id: Primitives<BrandId>; params: Partial<BrandParams> }): Promise<void> {
		const brandId = new BrandId(id)
		const brand = await this.brandRepository.findById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)

		const changes: Array<{ field: BrandChangeFields; oldValue: unknown; newValue: unknown }> = []
		const validations: Promise<void>[] = []

		if (params.name !== undefined && brandEntity.nameValue !== params.name.trim()) {
			validations.push(this.brandNameUniquenessChecker.ensureUnique(params.name, brandEntity.idValue))
			changes.push({
				field: 'name',
				oldValue: brandEntity.nameValue,
				newValue: params.name
			})
			brandEntity.updateName(params.name)
		}

		if (params.categories !== undefined) {
			validations.push(this.categoryExistenceChecker.ensureExist(params.categories))
			const oldCategories = [...brandEntity.categoriesValue]
			const categoriesChanged = this.updateCategories({
				entity: brandEntity,
				newCategoryIds: params.categories
			})
			if (categoriesChanged) {
				changes.push({
					field: 'categories',
					oldValue: oldCategories,
					newValue: params.categories
				})
			}
		}

		await Promise.all(validations)

		// Save the updated entity only if it has changed
		if (changes.length > 0) {
			brandEntity.registerUpdateEvent(changes)
			await this.brandRepository.save(brandEntity.toPrimitives())
			await this.eventBus.publish(brandEntity.pullDomainEvents())
		}
	}

	/**
	 * @private
	 * @description Ensures that new categories exist before associating them with the brand.
	 * @param {{ entity: Brand; categories?: Primitives<CategoryId>[] }} params The parameters for the check.
	 * @param {Brand} params.entity The brand entity being updated.
	 * @param {Primitives<CategoryId>[]} [params.categories] The list of new category IDs.
	 * @returns {boolean} True if categories were changed.
	 */
	private updateCategories({
		entity,
		newCategoryIds
	}: {
		newCategoryIds: Primitives<CategoryId>[]
		entity: Brand
	}): boolean {
		let hasCategoriesChanged = false
		const uniqueCategoryIds = [...new Set(newCategoryIds)]

		const newIdSet = new Set(uniqueCategoryIds)
		const currentIdSet = new Set(entity.categoriesValue)

		// Añadir categorías nuevas
		for (const id of newIdSet) {
			if (!currentIdSet.has(id)) {
				entity.addCategory(new CategoryId(id))
				hasCategoriesChanged = true
			}
		}

		// Eliminar categorías que ya no están
		for (const id of currentIdSet) {
			if (!newIdSet.has(id)) {
				entity.removeCategory(new CategoryId(id))
				hasCategoriesChanged = true
			}
		}

		return hasCategoriesChanged
	}
}
