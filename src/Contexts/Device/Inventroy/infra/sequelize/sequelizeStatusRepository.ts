import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { type StatusDashboardRepository } from '../../domain/StatusDashboardRepository'

export class SequelizeStatusDashboardRepository implements StatusDashboardRepository {
	private readonly cacheKey: string = 'statusDashboard'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'categoryName'],
						[sequelize.col('status.name'), 'statusName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: []
						},
						{
							association: 'status',
							attributes: []
						}
					],
					group: ['category.name', 'status.name'],
					raw: true
				})

				let total = 0
				const dashboardData: Record<string, any> = {
					overall: {}
				}

				devices.forEach((device: any) => {
					const { statusName, categoryName, count } = device
					const countNumber = Number(count)

					// Sumar al total
					total += countNumber

					// Agregar a la sección "overall"
					dashboardData.overall[statusName] = (dashboardData.overall[statusName] || 0) + countNumber

					// Asegurar que la categoría existe
					if (!dashboardData[categoryName]) {
						dashboardData[categoryName] = {}
					}

					// Agregar el estado dentro de la categoría
					dashboardData[categoryName][statusName] =
						(dashboardData[categoryName][statusName] || 0) + countNumber
				})

				return {
					total,
					status: { ...dashboardData }
				}
			}
		})
	}
}
