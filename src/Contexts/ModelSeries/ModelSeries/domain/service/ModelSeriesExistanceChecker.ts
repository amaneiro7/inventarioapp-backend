import { ModelSeriesDoesNotExistError } from '../../../ModelSeries/domain/errors/ModelSeriesDoesNotExistError'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesRepository } from '../../../ModelSeries/domain/repository/ModelSeriesRepository'
import { type ModelSeriesId } from '../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { type CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'

export class ModelSeriesExistenceChecker {
	constructor(private readonly repository: ModelSeriesRepository) {}

	/**
	 * Ensures that a modelSeries exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<ModelSeriesId>} modelSeriesId - The modelSeries ID to check for existence.
	 * @returns {: Promise<ModelSeriesDto | undefined>} A promise that resolves if the modelSeries exists.
	 * @throws {ModelSeriesDoesNotExistError} If the modelSeries does not exist.
	 */
	async ensureExist({
		modelSeriesId,
		brand,
		category
	}: {
		modelSeriesId: Primitives<ModelSeriesId> | null | undefined
		category?: Primitives<CategoryId>
		brand?: Primitives<BrandId>
	}): Promise<ModelSeriesDto | undefined> {
		if (modelSeriesId === null || modelSeriesId === undefined) {
			return
		}

		const isModelSeriesExist = await this.repository.findById(modelSeriesId)
		if (!isModelSeriesExist) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId)
		}

		if (brand && isModelSeriesExist.brandId !== brand) {
			throw new InvalidArgumentError('La marca no coincide con el modelo seleccionado.')
		}
		if (category && isModelSeriesExist.categoryId !== category) {
			throw new InvalidArgumentError('La categoría no coincide con el modelo seleccionado.')
		}
		return isModelSeriesExist
	}
}
