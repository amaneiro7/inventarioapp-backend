import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type CityDto } from '../../domain/City.dto'
import { type CityId } from '../../domain/CityId'
import { type CityRepository } from '../../domain/CityRepository'
import { CityModel } from './CitySchema'

export class SequelizeCityRepository
	extends CriteriaToSequelizeConverter
	implements CityRepository
{
	private readonly cacheKey: string = 'cities'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>> {
		const options = this.convert(criteria)
		options.include = ['state']
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CityModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<CityId>): Promise<CityDto | null> {
		return (await CityModel.findByPk(id)) ?? null
	}
}
