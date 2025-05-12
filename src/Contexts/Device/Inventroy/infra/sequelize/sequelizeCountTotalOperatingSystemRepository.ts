import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CountTotalOperatingSystemRepository } from '../../domain/CountTotalOperatingSystemRepository'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'

export class SequelizeCountTotalOperatingSystemRepository implements CountTotalOperatingSystemRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-os-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.operatingSystem.name'), 'osName'],
						[sequelize.col('computer.operatingSystemArq.name'), 'arqName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'computer',
							attributes: [],
							required: true,
							include: [
								{
									association: 'operatingSystem',
									required: true,
									attributes: []
								},
								{
									association: 'operatingSystemArq',
									required: true,
									attributes: []
								}
							]
						},
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						}
					],
					group: ['computer.operatingSystem.name', 'computer.operatingSystemArq.name'],
					order: [[sequelize.col('computer.operatingSystem.name'), 'ASC']],
					raw: true
				})
				const operatingSystemMap = new Map()
				result.forEach((item: any) => {
					const { osName, arqName, count } = item
					const countAsNumber = Number(count)

					if (!operatingSystemMap.has(osName)) {
						operatingSystemMap.set(osName, {
							name: osName,
							count: 0,
							arq: new Map()
						})
					}
					const operatingSystem = operatingSystemMap.get(osName)
					operatingSystem.count += countAsNumber

					if (!operatingSystem.arq.has(arqName)) {
						operatingSystem.arq.set(arqName, {
							name: arqName,
							count: countAsNumber
						})
					} else {
						operatingSystem.arq.get(arqName).count += countAsNumber
					}
				})

				// convertir los mapas a arrays
				const transformedData = Array.from(operatingSystemMap.values()).map((operatingSystem: any) => ({
					...operatingSystem,
					arq: Array.from(operatingSystem.arq.values())
				}))

				return transformedData
			}
		})
	}
}
