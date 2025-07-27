import { Brand } from '../domain/Brand'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { BrandName } from '../domain/BrandName'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../domain/BrandRepository'
import { CategoryId } from '../../Category/Category/domain/CategoryId'
import { Primitives } from '../../Shared/domain/value-object/Primitives'
import { CategoryDoesNotExistError } from '../../Category/Category/domain/CategoryDoesNotExistError'
import { BrandParams } from '../domain/Brand.dto'

/**
 * @class BrandUpdater
 * @description Use case for updating an existing Brand entity.
 * It ensures the brand exists and that the new name is valid and unique before updating.
 */
export class BrandUpdater {
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
	 * @description Executes the brand update process.
	 * @param {object} params - The parameters for updating the brand.
	 * @param {string} params.id - The unique identifier of the brand to update.
	 * @param {string} params.newName - The new name for the brand.
	 * @returns {Promise<void>} A promise that resolves when the brand is successfully updated.
	 * @throws {BrandDoesNotExistError} If the brand with the provided ID does not exist.
	 * @throws {BrandAlreadyExistError} If the new name already exists for another brand.
	 * @throws {InvalidArgumentError} If the new name is not valid (e.g., invalid length).
	 */ async run({ id, params }: { id: Primitives<BrandId>; params: Partial<BrandParams> }): Promise<void> {
		const brandId = new BrandId(id)

		const brand = await this.brandRepository.searchById(brandId.value)
		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)
		await Promise.all([
			BrandName.updateNameField({ entity: brandEntity, repository: this.brandRepository, name: params.name }),
			this.ensureCategoryExists({ entity: brandEntity, categories: params.categories })
		])

		await this.brandRepository.save(brandEntity.toPrimitive())
	}

	private async ensureCategoryExists({
		entity,
		categories
	}: {
		categories?: Primitives<CategoryId>[]
		entity: Brand
	}): Promise<void> {
		if (!categories) return

		// Asegurarse que no existan valores duplicados
		const uniqueCategories = Array.from(new Set(categories))
		// Se crea una nueva lista con los categories nuevos, que no estan en la lista actual
		const newCategories = this.getNewCategories(entity.categoriesValue, uniqueCategories)

		// Si la lista es 0, no hay categories nuevos
		if (newCategories.length > 0) {
			// Se verifica que cada cargo exista
			await Promise.all(
				newCategories.map(async categoryId => {
					if ((await this.categoryRepository.searchById(categoryId)) === null) {
						throw new CategoryDoesNotExistError(categoryId)
					}
				})
			)
		}

		entity.updateCategories(categories)
	}

	// Funcion para filtrar solo las categorias nuevos que no estan en la lista actual
	private getNewCategories(currentList: string[], newList: string[]): string[] {
		return newList.filter(categoryId => !currentList.includes(categoryId))
	}
}
