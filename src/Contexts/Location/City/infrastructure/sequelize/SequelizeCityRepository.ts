import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityPrimitives, type CityDto } from '../../domain/City.dto'
import { type CityId } from '../../domain/CityId'
import { type CityRepository } from '../../domain/CityRepository'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CityModel } from './CitySchema'
import { CityAssociation } from './CityAssociation'
import { CityName } from '../../domain/CityName'

export class SequelizeCityRepository extends CriteriaToSequelizeConverter implements CityRepository {
	private readonly cacheKey: string = 'cities'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>> {
		const options = CityAssociation.converFilter(criteria, this.convert(criteria))
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
	async searchByName(name: Primitives<CityName>): Promise<CityDto | null> {
		return (
			(await CityModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async remove(id: string): Promise<void> {
		await CityModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async save(payload: CityPrimitives): Promise<void> {
		const { id } = payload
		const city = (await CityModel.findByPk(id)) ?? null
		if (!city) {
			await CityModel.create({ ...payload })
		} else {
			city.set({ ...payload })
			await city.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
