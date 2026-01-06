import { Op } from 'sequelize'
import { ProcessorModel } from './ProcessorSchema'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { ProcessorAssociation } from './ProcessorAssociation'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorDto, type ProcessorPrimitives } from '../../domain/entity/Processor.dto'
import { type ProcessorNumberModel } from '../../domain/valueObject/ProcessorNumberModel'
import { type ProcessorRepository } from '../../domain/repository/ProcessorRepository'
import { type ProcessorCacheInvalidator } from '../../domain/repository/ProcessorCacheInvalidator'
import { type ProcessorId } from '../../domain/valueObject/ProcessorId'

/**
 * @description Sequelize implementation of the ProcessorRepository.
 */
export class SequelizeProcessorRepository
	extends SequelizeCriteriaConverter
	implements ProcessorRepository, ProcessorCacheInvalidator
{
	private readonly cacheKeyPrefix = 'processors'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = ProcessorAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<ProcessorDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorModel.findAndCountAll(finalOptions)
				return { total: count, data: rows.map(row => row.get({ plain: true })) }
			}
		})
	}

	async findById(id: string): Promise<ProcessorDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<ProcessorDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findByPk(id)
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple categories by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of processor IDs to find.
	 * @returns {Promise<ProcessorDto[]>} A promise resolving to an array of found processor DTOs.
	 */
	async findByIds(ids: string[]): Promise<ProcessorDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<ProcessorDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const categories = await ProcessorModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return categories.map(processor => processor.get({ plain: true })) as ProcessorDto[]
			}
		})
	}

	async searchByNumberModel(numberModel: Primitives<ProcessorNumberModel>): Promise<ProcessorDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:numberModel:${numberModel}`

		return this.cache.getCachedData<ProcessorDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findOne({ where: { numberModel } })
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	async save(payload: ProcessorPrimitives): Promise<void> {
		await ProcessorModel.upsert(payload)
	}

	async remove(id: string): Promise<void> {
		await ProcessorModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateProcessorCache
	 * @description Invalidates all processors-related cache entries.
	 * Implements ProcessorCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<ProcessorId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}
