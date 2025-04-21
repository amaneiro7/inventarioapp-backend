import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { StatusList } from '../../../Status/domain/StatusList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalComputerRepository } from '../../domain/TotalComputerRepository'

export class SequelizeTotalComputerRepository implements TotalComputerRepository {
	private readonly cacheKey: string = 'totalComputer'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await DeviceModel.count({
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						},
						{
							association: 'status',
							attributes: [],
							where: {
								[Op.not]: {
									id: StatusList.DESINCORPORADO
								}
							}
						}
					]
				})
			}
		})
	}
}
