import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from '../../domain/HardDriveTypeId'
import { type HardDriveTypeRepository } from '../../domain/HardDriveTypeRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { HardDriveTypeModel } from './HardDriveTypeSchema'
import { type HardDriveTypeDto } from '../../domain/HardDriveType.dto'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

export class SequelizeHardDriveTypeRepository
	extends CriteriaToSequelizeConverter
	implements HardDriveTypeRepository
{
	private readonly cacheKey: string = 'hardDriveType'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { rows, count } =
					await HardDriveTypeModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<HardDriveTypeId>
	): Promise<HardDriveTypeDto | null> {
		return (await HardDriveTypeModel.findByPk(id)) ?? null
	}
}
