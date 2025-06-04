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

	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await LocationMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows
				}
			}
		})
	}

	async searchNotnullIpAddress(): Promise<LocationMonitoringDto[]> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}-not-null-ip-address`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await LocationMonitoringModel.findAll({
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
			}
		})
	}

	async searchById(id: string): Promise<LocationMonitoringDto | null> {
		return (await LocationMonitoringModel.findByPk(id)) ?? null
	}

	/**
	 * This function saves a device to the database, it updates the device if it already exists
	 * or creates a new one if it does not exist.
	 *
	 * It also checks if the device category is a computer category, if it is, it will
	 * create a new LocationComputer entity, otherwise, it will not do anything.
	 *
	 * This function is wrapped in a transaction, if there is an error while updating/creating
	 * the device or creating the LocationComputer entity, the transaction will be rolled back.
	 *
	 * @param payload - Location data to be saved
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

			await t.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error: any) {
			await t.rollback()
			throw new Error(error)
		}
	}
}
