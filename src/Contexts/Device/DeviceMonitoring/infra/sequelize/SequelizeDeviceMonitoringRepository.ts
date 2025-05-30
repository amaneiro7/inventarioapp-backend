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

export class SequelizeDeviceMonitoringRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringRepository
{
	private readonly cacheKey: string = 'deviceMonitoring'
	constructor(private readonly cache: CacheService) {
		super()
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows
				}
			}
		})
	}

	async searchNotnullIpAddress(): Promise<DeviceMonitoringDto[]> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}-not-null-ip-address`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await DeviceMonitoringModel.findAll({
					include: [
						{
							association: 'device',
							where: {
								statusId: StatusOptions.INUSE
							},
							include: [
								{
									association: 'computer',
									where: { ipAddress: { [Op.ne]: null } },
									attributes: ['ipAddress'],
									required: true
								}
							]
						}
					]
				})
			}
		})
	}

	async searchById(id: string): Promise<DeviceMonitoringDto | null> {
		return (await DeviceMonitoringModel.findByPk(id)) ?? null
	}

	/**
	 * This function saves a device to the database, it updates the device if it already exists
	 * or creates a new one if it does not exist.
	 *
	 * It also checks if the device category is a computer category, if it is, it will
	 * create a new DeviceComputer entity, otherwise, it will not do anything.
	 *
	 * This function is wrapped in a transaction, if there is an error while updating/creating
	 * the device or creating the DeviceComputer entity, the transaction will be rolled back.
	 *
	 * @param payload - Device data to be saved
	 */
	async save(payload: DeviceMonitoringPrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			const deviceMonitoring = (await DeviceMonitoringModel.findByPk(payload.id)) ?? null // Find the device by its id, if it does not exist, device will be null
			if (!deviceMonitoring) {
				// If the device does not exist
				await DeviceMonitoringModel.create(payload, { transaction: t }) // Create a new device with the given payload
			} else {
				// If the device already exists
				await DeviceMonitoringModel.update(payload, { where: { id: payload.id }, transaction: t }) // Update the device with the given payload
				// await device.save({ transaction: t }) // Save the updated device
			}

			await t.commit() // Commit the transaction
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error: any) {
			// If there is an error
			await t.rollback() // Rollback the transaction
			throw new Error(error)
		}
	}
}
