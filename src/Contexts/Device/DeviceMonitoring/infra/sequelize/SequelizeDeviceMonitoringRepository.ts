import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { DeviceMonitoringAssociation } from './DeviceMonitoringAssociation'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../../domain/repository/DeviceMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'

/**
 * @description Sequelize implementation of the DeviceMonitoringRepository.
 */
export class SequelizeDeviceMonitoringRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringRepository
{
	private readonly cacheKeyPrefix = 'deviceMonitoring'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<DeviceMonitoringDto>>({
			cacheKey,
			ttl: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<DeviceMonitoringDto>
			}
		})
	}

	async searchNotNullIpAddress({
		page,
		pageSize
	}: {
		page?: number
		pageSize?: number
	}): Promise<DeviceMonitoringDto[]> {
		const offset = page && pageSize ? (page - 1) * pageSize : undefined
		const cacheKey = `${this.cacheKeyPrefix}-not-null-ip:${page ?? 1}:${pageSize ?? 'all'}`

		return this.cache.getCachedData<DeviceMonitoringDto[]>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const rows = await DeviceMonitoringModel.findAll({
					offset,
					limit: pageSize,
					include: [
						{
							association: 'device',
							where: { statusId: StatusOptions.INUSE },
							include: [
								{
									association: 'computer',
									where: { ipAddress: { [Op.ne]: null } },
									attributes: ['ipAddress', 'computerName'],
									required: true
								}
							]
						}
					]
				})
				return rows.map(row => row.get({ plain: true })) as DeviceMonitoringDto[]
			}
		})
	}

	async searchById(id: string): Promise<DeviceMonitoringDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<DeviceMonitoringDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const deviceMonitoring = await DeviceMonitoringModel.findByPk(id)
				return deviceMonitoring ? (deviceMonitoring.get({ plain: true }) as DeviceMonitoringDto) : null
			}
		})
	}

	async save(payload: DeviceMonitoringPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			await DeviceMonitoringModel.upsert(payload, { transaction })
			await transaction.commit()
			await this.invalidateCache(payload.id)
		} catch (error) {
			await transaction.rollback()
			throw new Error(
				`Error saving device monitoring data: ${error instanceof Error ? error.message : String(error)}`
			)
		}
	}

	private async invalidateCache(id: string): Promise<void> {
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`, `${this.cacheKeyPrefix}:id:${id}`]
		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
