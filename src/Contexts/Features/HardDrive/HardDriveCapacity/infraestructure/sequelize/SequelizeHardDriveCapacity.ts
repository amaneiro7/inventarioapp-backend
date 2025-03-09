import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type HardDriveCapacityDto } from '../../domain/HardDriveCapacity.dto'
import { type HardDriveCapacityId } from '../../domain/HardDriveCapacityId'
import { type HardDriveCapacityRepository } from '../../domain/HardDriveCapacityRepository'
import { HardDriveCapacityModel } from './HardDriveCapacitySchema'

export class SequelizeHardDriveCapacityRepository
	extends CriteriaToSequelizeConverter
	implements HardDriveCapacityRepository
{
	private readonly cacheKey: string = 'hardDriveCapacities'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveCapacityDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { rows, count } = await HardDriveCapacityModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityDto | null> {
		return (await HardDriveCapacityModel.findByPk(id)) ?? null
	}
}
