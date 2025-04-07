import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type AdministrativeRegionDto } from '../../domain/AdministrativeRegion.dto'
import { type AdministrativeRegionId } from '../../domain/AdministrativeRegionId'
import { type AdministrativeRegionRepository } from '../../domain/AdministrativeRegionRepository'
import { AdministrativeRegionModel } from './AdministrativeRegionSchema'

export class SequelizeAdministrativeRegionRepository
	extends CriteriaToSequelizeConverter
	implements AdministrativeRegionRepository
{
	private readonly cacheKey: string = 'administrativeRegions'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<AdministrativeRegionDto>> {
		const options = this.convert(criteria)
		options.include = ['region']
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await AdministrativeRegionModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<AdministrativeRegionId>): Promise<AdministrativeRegionDto | null> {
		return (await AdministrativeRegionModel.findByPk(id)) ?? null
	}
}
