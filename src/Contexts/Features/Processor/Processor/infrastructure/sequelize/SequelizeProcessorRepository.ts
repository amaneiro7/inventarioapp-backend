import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ProcessorModel } from './ProcessorSchema'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorDto, type ProcessorPrimitives } from '../../domain/Processor.dto'
import { type ProcessorNumberModel } from '../../domain/ProcessorNumberModel'
import { type ProcessorRepository } from '../../domain/ProcessorRepository'

/**
 * @class SequelizeProcessorRepository
 * @extends SequelizeCriteriaConverter
 * @implements {ProcessorRepository}
 * @description Concrete implementation of the ProcessorRepository using Sequelize.
 * Handles data persistence for Processor entities, including caching mechanisms.
 */
export class SequelizeProcessorRepository extends SequelizeCriteriaConverter implements ProcessorRepository {
	private readonly cacheKey: string = 'processors'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Processor entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ProcessorDto>>} A promise that resolves to a paginated response containing Processor DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<ProcessorDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorModel.findAndCountAll(options)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Processor entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the Processor to search for.
	 * @returns {Promise<ProcessorDto | null>} A promise that resolves to the Processor DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<ProcessorDto | null> {
		return await this.cache.getCachedData<ProcessorDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findByPk(id)
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByNumberModel
	 * @description Retrieves a single Processor entity by its number model.
	 * Utilizes caching for direct number model lookups.
	 * @param {Primitives<ProcessorNumberModel>} numberModel - The number model of the Processor to search for.
	 * @returns {Promise<ProcessorDto | null>} A promise that resolves to the Processor DTO if found, or null otherwise.
	 */
	async searchByNumberModel(numberModel: Primitives<ProcessorNumberModel>): Promise<ProcessorDto | null> {
		return await this.cache.getCachedData<ProcessorDto | null>({
			cacheKey: `${this.cacheKey}:numberModel:${numberModel}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findOne({ where: { numberModel } })
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Processor entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {ProcessorPrimitives} payload - The Processor data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: ProcessorPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await ProcessorModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		if (payload.numberModel) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:numberModel:${payload.numberModel}` })
		}
	}

	/**
	 * @method remove
	 * @description Deletes a Processor entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the Processor to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		// Retrieve the processor to get its numberModel for cache invalidation
		const processorToRemove = await ProcessorModel.findByPk(id)

		await ProcessorModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (processorToRemove && processorToRemove.numberModel) {
			await this.cache.removeCachedData({
				cacheKey: `${this.cacheKey}:numberModel:${processorToRemove.numberModel}`
			})
		}
	}
}
