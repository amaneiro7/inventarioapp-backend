import { Op } from 'sequelize'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { DeviceMonitoringAssociation } from './DeviceMonitoringAssociation'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../../domain/repository/DeviceMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DeviceId } from '../../../Device/domain/valueObject/DeviceId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringCacheInvalidator } from '../../domain/repository/DeviceMonitoringCacheInvalidator'

/**
 * @description Sequelize implementation of the DeviceMonitoringRepository.
 */
export class SequelizeDeviceMonitoringRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringRepository, DeviceMonitoringCacheInvalidator
{
	private readonly cacheKeyPrefix = 'deviceMonitoring'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringAssociation.convertFilter(criteria, options)

		return this.cache.getCachedData<ResponseDB<DeviceMonitoringDto>>({
			cacheKey: `${this.cacheKeyPrefix}:lists:all:${criteria.hash()}`,
			ttl: TimeTolive.MEDIUM,
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
			ttl: TimeTolive.VERY_LONG,
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

	async findById(id: string): Promise<DeviceMonitoringDto | null> {
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
		await DeviceMonitoringModel.upsert(payload)
	}

	/**
	 * @method saveAll
	 * @description Saves an array of device monitoring entries to the database.
	 * It updates the entries if they already exist or creates new ones if they do not.
	 * This operation is wrapped in a transaction to ensure atomicity.
	 * Invalidates relevant cache entries after a successful operation.
	 *
	 * @param {DeviceMonitoringPrimitives[]} payloads - The array of device monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async saveAll(payloads: DeviceMonitoringPrimitives[]): Promise<void> {
		await DeviceMonitoringModel.bulkCreate(payloads, {
			updateOnDuplicate: ['status', 'lastScan', 'lastSuccess', 'lastFailed', 'deviceId']
		})

		// Optimizamos la invalidación ejecutándola en paralelo
		const invalidationPromises = payloads.map(payload => this.invalidate(payload.id))
		await Promise.all(invalidationPromises)
	}

	/**
	 * @method invalidateDeviceCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements DeviceMonitoringCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<DeviceId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}
