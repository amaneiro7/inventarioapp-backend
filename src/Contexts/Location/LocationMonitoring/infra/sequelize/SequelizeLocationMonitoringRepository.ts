import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringAssociation } from './LocationMonitoringAssociation'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import {
	type LocationMonitoringDto,
	type LocationMonitoringPrimitives
} from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringRepository } from '../../domain/repository/LocationMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'

export class SequelizeLocationMonitoringRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringRepository
{
	private readonly cacheKey: string = 'locationMonitoring'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * Searches for all location monitoring entries matching the given criteria.
	 * It uses caching to improve performance.
	 * @param criteria The criteria to filter, sort, and paginate the results.
	 * @returns A promise that resolves to a paginated response of location monitoring DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await LocationMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * Searches for location monitoring entries that have a non-null subnet.
	 * This is useful for finding locations that are configured for network monitoring.
	 * @param page - Optional page number for pagination.
	 * @param pageSize - Optional page size for pagination.
	 * @returns A promise that resolves to an array of location monitoring DTOs.
	 */
	async searchNotNullIpAddress({
		page,
		pageSize
	}: {
		page?: number
		pageSize?: number
	}): Promise<LocationMonitoringDto[]> {
		const offset = page && pageSize ? (page - 1) * pageSize : undefined
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}-not-null-ip-address:${page ?? 1}:${pageSize ?? 'all'}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const rows = await LocationMonitoringModel.findAll({
					offset,
					limit: pageSize,
					include: [
						{
							association: 'location',
							where: {
								locationStatusId: LocationStatusOptions.OPERATIONAL,
								subnet: { [Op.ne]: null }
							}
						}
					]
				})
				return rows.map(row => row.get({ plain: true }))
			}
		})
	}

	async searchById(id: string): Promise<LocationMonitoringDto | null> {
		return (await LocationMonitoringModel.findByPk(id)) ?? null
	}

	/**
	 * Saves a location monitoring entry to the database.
	 * It updates the entry if it already exists or creates a new one if it does not.
	 * This operation is wrapped in a transaction to ensure atomicity.
	 *
	 * @param payload - The location monitoring data to be saved.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: LocationMonitoringPrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			const deviceMonitoring = (await LocationMonitoringModel.findByPk(payload.id)) ?? null // Find the device by its id, if it does not exist, device will be null
			if (!deviceMonitoring) {
				await LocationMonitoringModel.create(payload, { transaction: t }) // Create a new device with the given payload
			} else {
				await LocationMonitoringModel.update(payload, { where: { id: payload.id }, transaction: t }) // Update the device with the given payload
			}

			await t.commit() // Commit the transaction
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error: unknown) {
			await t.rollback() // Rollback the transaction on error

			// Improved error handling to provide more context
			let errorMessage = 'An unknown error occurred while saving the location monitoring data.'
			if (error instanceof Error) {
				errorMessage = `Error saving location monitoring data: ${error.message}`
			}
			throw new Error(errorMessage)
		}
	}
}
