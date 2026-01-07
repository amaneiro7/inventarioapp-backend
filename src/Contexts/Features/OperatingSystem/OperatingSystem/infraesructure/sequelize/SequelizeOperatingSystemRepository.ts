import { Op } from 'sequelize'
import { OperatingSystemModel } from './OperatingSystemSchema'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemDto } from '../../domain/entity/OperatingSystem.dto'
import { type OperatingSystemId } from '../../domain/valueObject/OperatingSystemId'
import { type OperatingSystemRepository } from '../../domain/repository/OperatingSystemRepository'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'

/**
 * @description Sequelize implementation of the OperatingSystemRepository.
 */
export class SequelizeOperatingSystemRepository
	extends SequelizeCriteriaConverter
	implements OperatingSystemRepository
{
	private readonly cacheKeyPrefix = 'operatingSystem'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<OperatingSystemDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await OperatingSystemModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<OperatingSystemId>): Promise<OperatingSystemDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<OperatingSystemDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const operatingSystem = await OperatingSystemModel.findByPk(id)
				return operatingSystem ? operatingSystem.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple operatingSystem by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of OperatingSystem IDs to find.
	 * @returns {Promise<OperatingSystemDto[]>} A promise resolving to an array of found OperatingSystem DTOs.
	 */
	async findByIds(ids: string[]): Promise<OperatingSystemDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<OperatingSystemDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const operatingSystems = await OperatingSystemModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return operatingSystems.map(operatingSystem =>
					operatingSystem.get({ plain: true })
				) as OperatingSystemDto[]
			}
		})
	}
}
