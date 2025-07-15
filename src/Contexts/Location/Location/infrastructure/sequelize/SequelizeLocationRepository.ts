import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../domain/LocationId'
import { type LocationRepository } from '../../domain/LocationRepository'
import { LocationName } from '../../domain/LocationName'
import { LocationAssociation } from './LocationAssociation'
import { LocationModel } from './LocationSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type LocationDto, type LocationPrimitives } from '../../domain/Location.dto'

export class SequelizeLocationRepository extends CriteriaToSequelizeConverter implements LocationRepository {
	private readonly cacheKey: string = 'locations'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationDto>> {
		const options = this.convert(criteria)
		const opt = LocationAssociation.convertFilter(criteria, options)

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await LocationModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<LocationDto>> {
		const options = this.convert(criteria)
		const opt = LocationAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await LocationModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<LocationId>): Promise<LocationDto | null> {
		return (
			(await LocationModel.findByPk(id, {
				include: [
					'typeOfSite',
					{
						association: 'site',
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
					}
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<LocationName>): Promise<LocationDto | null> {
		return (await LocationModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: LocationPrimitives): Promise<void> {
		const { id } = payload
		const employee = (await LocationModel.findByPk(id)) ?? null
		if (employee === null) {
			await LocationModel.create({ ...payload })
		} else {
			employee.set({ ...payload })
			await employee.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
