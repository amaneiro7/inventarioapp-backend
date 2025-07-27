import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemDto } from '../../domain/OperatingSystem.dto'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemRepository } from '../../domain/OperatingSystemRepository'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { OperatingSystemModel } from './OperatingSystemSchema'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

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

	async searchById(id: Primitives<OperatingSystemId>): Promise<OperatingSystemDto | null> {
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
}
