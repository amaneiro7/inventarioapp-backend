import { Brand } from '../domain/entity/Brand'
import { BrandId } from '../domain/valueObject/BrandId'
import { CategoryId } from '../../Category/Category/domain/CategoryId'
import { BrandDoesNotExistError } from '../domain/errors/BrandDoesNotExistError'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/CategoryDoesNotExistError'
import { BrandAlreadyExistError } from '../domain/errors/BrandAlreadyExistError'

import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../domain/repository/BrandRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandParams } from '../domain/entity/Brand.dto'
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
		const brand = await this.brandRepository.findById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)

		let hasChanges = false

		if (params.name !== undefined && brandEntity.nameValue !== params.name.trim()) {
			await this.ensureBrandNameIsUnique(params.name, brandEntity.idValue)
			brandEntity.updateName(params.name)
			hasChanges = true
		}

		if (params.categories !== undefined) {
			const categoriesChanged = await this.updateCategories({
				entity: brandEntity,
				newCategoryIds: params.categories
			})
			if (categoriesChanged) {
				hasChanges = true
			}
		}

		// Save the updated entity only if it has changed
		if (hasChanges) {
			await this.brandRepository.save(brandEntity.toPrimitives()) // Asegúrate de que el repositorio invalide la caché
		}
	}

	/**
	 * @private
	 * @description Checks if a brand name is already in use.
	 */
	private async ensureBrandNameIsUnique(name: string, currentId: Primitives<BrandId>): Promise<void> {
		const existingBrand = await this.brandRepository.findByName(name)
		if (existingBrand && existingBrand.id !== currentId) {
			throw new BrandAlreadyExistError(name)
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
	private async updateCategories({
		entity,
		newCategoryIds
	}: {
		newCategoryIds: Primitives<CategoryId>[]
		entity: Brand
	}): Promise<boolean> {
		let hasCategoriesChanged = false
		const uniqueCategoryIds = [...new Set(newCategoryIds)]

		// 1. Validar la existencia de todos los IDs de categorias entrantes en una sola consulta.
		if (uniqueCategoryIds.length > 0) {
			const foundCategories = await this.categoryRepository.findByIds(uniqueCategoryIds)
			if (foundCategories.length !== uniqueCategoryIds.length) {
				const foundIds = new Set(foundCategories.map(c => c.id))
				const missingIds = uniqueCategoryIds.filter(id => !foundIds.has(id))
				throw new CategoryDoesNotExistError(missingIds.join(', '))
			}
		}

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
