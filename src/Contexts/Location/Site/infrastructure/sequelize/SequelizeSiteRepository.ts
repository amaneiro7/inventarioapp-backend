import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SitePrimitives, type SiteDto } from '../../domain/Site.dto'
import { type SiteId } from '../../domain/SiteId'
import { type SiteRepository } from '../../domain/SiteRepository'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { SiteModels } from './SiteSchema'

export class SequelizeSiteRepository extends CriteriaToSequelizeConverter implements SiteRepository {
	private readonly cacheKey: string = 'sites'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<SiteDto>> {
		const options = this.convert(criteria)
		options.include = [
			{
				association: 'city',
				include: [
					{
						association: 'state',
						include: ['region']
					}
				]
			}
		]
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { count, rows } = await SiteModels.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<SiteId>): Promise<SiteDto | null> {
		return (
			(await SiteModels.findByPk(id, {
				include: [
					{
						association: 'city',
						include: [
							{
								association: 'state',
								include: ['region']
							}
						]
					}
				]
			})) ?? null
		)
	}

	async save(payload: SitePrimitives): Promise<void> {
		const { id } = payload
		const employee = (await SiteModels.findByPk(id)) ?? null
		if (employee === null) {
			await SiteModels.create({ ...payload })
		} else {
			employee.set({ ...payload })
			await employee.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
