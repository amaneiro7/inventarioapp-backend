import { HardDriveTypeModel } from './HardDriveTypeSchema'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from '../../domain/valueObject/HardDriveTypeId'
import { type HardDriveTypeRepository } from '../../domain/repository/HardDriveTypeRepository'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type HardDriveTypeDto } from '../../domain/entity/HardDriveType.dto'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'

/**
 * @description Sequelize implementation of the HardDriveTypeRepository.
 */
export class SequelizeHardDriveTypeRepository extends SequelizeCriteriaConverter implements HardDriveTypeRepository {
	private readonly cacheKeyPrefix = 'hardDriveType'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveTypeDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<HardDriveTypeDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await HardDriveTypeModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<HardDriveTypeId>): Promise<HardDriveTypeDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<HardDriveTypeDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const hardDriveType = await HardDriveTypeModel.findByPk(id)
				return hardDriveType ? hardDriveType.get({ plain: true }) : null
			}
		})
	}
}
