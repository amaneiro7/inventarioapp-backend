import { type BrandId } from '../../../Brand/domain/valueObject/BrandId'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device } from './Device'
import { type ModelSeriesDto } from '../../../ModelSeries/ModelSeries/domain/dto/ModelSeries.dto'
import { ModelSeriesDoesNotExistError } from '../../../ModelSeries/ModelSeries/domain/errors/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'

/**
 * @class DeviceModelSeries
 * @extends ModelSeriesId
 * @description Represents the Value Object for a Device's model series.
 * It encapsulates business logic related to model series validation and updates.
 */
export class DeviceModelSeries extends ModelSeriesId {
	/**
	 * @static
	 * @method updateModelField
	 * @description Handles the logic for updating a device's model, brand, and category.
	 * @param {{ repository: ModelSeriesRepository; modelSeries?: Primitives<ModelSeriesId>; category?: Primitives<CategoryId>; brand?: Primitives<BrandId>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateModelField({
		repository,
		modelSeries,
		category,
		brand,
		entity
	}: {
		repository: ModelSeriesRepository
		modelSeries?: Primitives<ModelSeriesId>
		category?: Primitives<CategoryId>
		brand?: Primitives<BrandId>
		entity: Device
	}): Promise<void> {
		if (modelSeries === undefined || entity.modelSeriesValue === modelSeries) {
			return
		}
		const { brandId, categoryId } = await DeviceModelSeries.ensureModelSeriesExit({
			repository,
			modelSeries,
			category,
			brand
		})
		entity.updateCategoryId(categoryId)
		entity.updateBrandId(brandId)
		entity.updateModelId(modelSeries)
	}

	/**
	 * @static
	 * @method ensureModelSeriesExit
	 * @description Checks if a model series exists and if the provided brand and category match.
	 * @param {{ repository: ModelSeriesRepository; modelSeries: Primitives<ModelSeriesId>; category?: Primitives<CategoryId>; brand?: Primitives<BrandId> }} params The parameters for the check.
	 * @returns {Promise<ModelSeriesDto>} The model series DTO if it exists and is valid.
	 * @throws {ModelSeriesDoesNotExistError} If the model series does not exist.
	 * @throws {InvalidArgumentError} If the brand or category do not match the model series.
	 */
	static async ensureModelSeriesExit({
		repository,
		modelSeries,
		category,
		brand
	}: {
		repository: ModelSeriesRepository
		modelSeries: Primitives<ModelSeriesId>
		category?: Primitives<CategoryId>
		brand?: Primitives<BrandId>
	}): Promise<ModelSeriesDto> {
		const existingModel = await repository.findById(new ModelSeriesId(modelSeries).value)
		if (!existingModel) {
			throw new ModelSeriesDoesNotExistError(modelSeries)
		}
		if (brand && existingModel.brandId !== brand) {
			throw new InvalidArgumentError('La marca no coincide con el modelo seleccionado.')
		}
		if (category && existingModel.categoryId !== category) {
			throw new InvalidArgumentError('La categoría no coincide con el modelo seleccionado.')
		}
		return existingModel
	}
}
