import { Op } from 'sequelize'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { OperatingSystemArqModel } from './OperatingSystemArqSchema'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto } from '../../domain/entity/OperatingSystemArq.dto'
import { type OperatingSystemArqId } from '../../domain/valueObject/OperatingSystemArqID'
import { type OperatingSystemArqRepository } from '../../domain/repository/OperatingSystemArqRepository'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'

/**
 * @description Sequelize implementation of the OperatingSystemArqRepository.
 */
export class SequelizeOperatingSystemArqRepository
	extends SequelizeCriteriaConverter
	implements OperatingSystemArqRepository
{
	private readonly cacheKeyPrefix = 'operatingSystemArq'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemArqDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<OperatingSystemArqDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await OperatingSystemArqModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<OperatingSystemArqId>): Promise<OperatingSystemArqDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<OperatingSystemArqDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const operatingSystemArq = await OperatingSystemArqModel.findByPk(id)
				return operatingSystemArq ? operatingSystemArq.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple operatingSystemArqs by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of operatingSystemArq IDs to find.
	 * @returns {Promise<OperatingSystemArqDto[]>} A promise resolving to an array of found OperatingSystemArq DTOs.
	 */
	async findByIds(ids: string[]): Promise<OperatingSystemArqDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<OperatingSystemArqDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const operatingSystemArqs = await OperatingSystemArqModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return operatingSystemArqs.map(operatingSystemArq =>
					operatingSystemArq.get({ plain: true })
				) as OperatingSystemArqDto[]
			}
		})
	}
}
