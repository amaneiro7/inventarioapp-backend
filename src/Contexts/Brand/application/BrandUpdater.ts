import { Brand } from '../domain/Brand'
import { BrandId } from '../domain/BrandId'
import { BrandName } from '../domain/BrandName'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/CategoryDoesNotExistError'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../domain/BrandRepository'
import { type CategoryId } from '../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandParams } from '../domain/Brand.dto'

/**
 * @description Use case for updating an existing Brand entity.
 * It ensures the brand exists and that the new name is valid and unique before applying updates.
 * It can also update the list of associated categories.
 */
export class BrandUpdater {
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
		const brand = await this.brandRepository.searchById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)

		let hasChanges = false

		if (params.name !== undefined && brandEntity.nameValue !== params.name) {
			await BrandName.updateNameField({
				entity: brandEntity,
				repository: this.brandRepository,
				name: params.name
			})
			hasChanges = true
		}

		if (params.categories !== undefined) {
			const uniqueCategories = [...new Set(params.categories)]
			if (JSON.stringify(brandEntity.categoriesValue.sort()) !== JSON.stringify(uniqueCategories.sort())) {
				await this.ensureCategoriesExistAndUpdate({ entity: brandEntity, categories: params.categories })
				hasChanges = true
			}
		}

		// Save the updated entity only if it has changed
		if (hasChanges) {
			await this.brandRepository.save(brandEntity.toPrimitive())
		}
	}

	/**
	 * @private
	 * @description Ensures that new categories exist before associating them with the brand.
	 * @param {{ entity: Brand; categories?: Primitives<CategoryId>[] }} params The parameters for the check.
	 * @param {Brand} params.entity The brand entity being updated.
	 * @param {Primitives<CategoryId>[]} [params.categories] The list of new category IDs.
	 * @returns {Promise<void>} A promise that resolves when the check is complete.
	 * @throws {CategoryDoesNotExistError} If a new category ID does not exist.
	 */
	private async ensureCategoriesExistAndUpdate({
		entity,
		categories
	}: {
		categories?: Primitives<CategoryId>[]
		entity: Brand
	}): Promise<void> {
		if (categories === undefined) {
			return
		}

		const uniqueCategories = [...new Set(categories)]
		const newCategories = uniqueCategories.filter(categoryId => !entity.categoriesValue.includes(categoryId))

		if (newCategories.length > 0) {
			const categoryExistenceChecks = newCategories.map(async categoryId => {
				const category = await this.categoryRepository.searchById(categoryId)
				if (category === null) {
					throw new CategoryDoesNotExistError(categoryId)
				}
			})
			await Promise.all(categoryExistenceChecks)
		}

		entity.updateCategories(uniqueCategories)
	}
}
