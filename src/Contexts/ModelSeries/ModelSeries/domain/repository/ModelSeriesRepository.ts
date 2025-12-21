import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../valueObject/ModelSeriesId'
import { type ModelSeriesName } from '../valueObject/ModelSeriesName'
import { type ModelSeriesDto, type ModelSeriesPrimitives } from '../dto/ModelSeries.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'

/**
 * @abstract
 * @class ModelSeriesRepository
 * @description Defines the contract for data persistence operations related to the ModelSeries entity.
 */
export abstract class ModelSeriesRepository {
	/**
	 * @abstract
	 * @method save
	 * @description Creates or updates a model series in the data store.
	 * @param {ModelSeriesPrimitives} payload The data of the model series to be saved.
	 * @returns {Promise<void>}
	 */
	abstract save(payload: ModelSeriesPrimitives): Promise<void>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of model series.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<ModelSeriesDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>>

	/**
	 * @abstract
	 * @method matching
	 * @description Retrieves a paginated list of model series that match a complex set of criteria.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<ModelSeriesDto>>} A paginated response of DTOs.
	 */
	abstract matching(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single model series by its ID.
	 * @param {Primitives<ModelSeriesId>} id The ID of the model series to search for.
	 * @returns {Promise<ModelSeriesDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<ModelSeriesId>): Promise<ModelSeriesDto | null>

	/**
	 * @abstract
	 * @method findByName
	 * @description Finds a single model series by its name.
	 * @param {Primitives<ModelSeriesName>} name The name of the model series to search for.
	 * @returns {Promise<ModelSeriesDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findByName(name: Primitives<ModelSeriesName>): Promise<ModelSeriesDto | null>

	/**
	 * @abstract
	 * @method findByNameAndBrand
	 * @description Finds a single model series by its name and brand ID.
	 * @param {Primitives<ModelSeriesName>} name The name of the model series to search for.
	 * @param {Primitives<BrandId>} brandId The brand ID associated with the model series.
	 * @returns {Promise<ModelSeriesDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findByNameAndBrand(
		name: Primitives<ModelSeriesName>,
		brandId: Primitives<BrandId>
	): Promise<ModelSeriesDto | null>

	/**
	 * @abstract
	 * @method searchByCategory
	 * @description Retrieves all model series belonging to a specific category.
	 * @param {Primitives<CategoryId>} categoryId The ID of the category to filter by.
	 * @returns {Promise<ModelSeriesDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract searchByCategory(categoryId: Primitives<CategoryId>): Promise<ModelSeriesDto[]>

	/**
	 * @abstract
	 * @method donwload
	 * @description Generates an Excel file (Buffer) containing model series data.
	 * @param {Criteria} criteria The criteria for filtering the data to be downloaded.
	 * @returns {Promise<Buffer>} A promise that resolves to an Excel file buffer.
	 */
	abstract donwload(criteria: Criteria): Promise<Buffer>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a model series from the data store by its ID.
	 * @param {Primitives<ModelSeriesId>} id The ID of the model series to remove.
	 * @returns {Promise<void>}
	 */
	abstract remove(id: Primitives<ModelSeriesId>): Promise<void>
}
