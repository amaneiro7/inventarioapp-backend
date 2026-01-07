import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type HardDriveCapacityDto } from '../../domain/entity/HardDriveCapacity.dto'
import { type HardDriveCapacityId } from '../../domain/valueObject/HardDriveCapacityId'
import { type HardDriveCapacityRepository } from '../../domain/repository/HardDriveCapacityRepository'
import { HardDriveCapacityModel } from './HardDriveCapacitySchema'

/**
 * @description Sequelize implementation of the HardDriveCapacityRepository.
 */
export class SequelizeHardDriveCapacityRepository
	extends SequelizeCriteriaConverter
	implements HardDriveCapacityRepository
{
	private readonly cacheKeyPrefix = 'hardDriveCapacities'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveCapacityDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<HardDriveCapacityDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await HardDriveCapacityModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<HardDriveCapacityDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const hardDriveCapacity = await HardDriveCapacityModel.findByPk(id)
				return hardDriveCapacity ? hardDriveCapacity.get({ plain: true }) : null
			}
		})
	}
}
