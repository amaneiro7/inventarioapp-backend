import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type TypeOfSiteDto } from '../../domain/TypeOfSite.dto'
import { type TypeOfSiteId } from '../../domain/TypeOfSiteId'
import { type TypeOfSiteRepository } from '../../domain/TypeOfSiteRepository'
import { TypeOfSiteModel } from './TypeOfSiteSchema'

export class SequelizeTypeOfSiteRepository
	extends CriteriaToSequelizeConverter
	implements TypeOfSiteRepository
{
	private readonly cacheKey: string = 'typeOfSite'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<TypeOfSiteDto>> {
		const options = this.convert(criteria)

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await TypeOfSiteModel.findAndCountAll(
					options
				)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<TypeOfSiteId>
	): Promise<TypeOfSiteDto | null> {
		return (await TypeOfSiteModel.findByPk(id)) ?? null
	}
}
