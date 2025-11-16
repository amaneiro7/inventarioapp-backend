import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto } from '../../domain/OperatingSystemArq.dto'
import { type OperatingSystemArqId } from '../../domain/OperatingSystemArqID'
import { type OperatingSystemArqRepository } from '../../domain/OperatingSystemArqRepository'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { OperatingSystemArqModel } from './OperatingSystemArqSchema'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

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
}
