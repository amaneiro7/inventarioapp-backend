import { StatusModel } from './StatusSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/valueObject/StatusId'
import { type StatusRepository } from '../../domain/repository/StatusRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type StatusDto } from '../../domain/entity/Status.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class SequelizeStatusRepository
 * @extends SequelizeCriteriaConverter
 * @implements {StatusRepository}
 * @description Concrete implementation of the StatusRepository using Sequelize.
 */
export class SequelizeStatusRepository extends SequelizeCriteriaConverter implements StatusRepository {
	private readonly cacheKeyPrefix = 'status'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<StatusDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`
		return this.cache.getCachedData<ResponseDB<StatusDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await StatusModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<StatusId>): Promise<StatusDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<StatusDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const status = await StatusModel.findByPk(id)
				return status ? status.get({ plain: true }) : null
			}
		})
	}
}
