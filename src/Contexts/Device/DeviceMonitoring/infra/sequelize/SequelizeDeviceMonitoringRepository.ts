import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type Transaction } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceModel, DeviceMonitoringModel } from './DeviceMonitoringSchema'

import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringDto, DeviceMonitoringPrimitives } from '../../domain/entity/DeviceMonitoring.dto'
import { DeviceMonitoringRepository } from '../../domain/repository/DeviceMonitoringRepository'

export class SequelizeDeviceMonitoringRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringRepository
{
	private readonly models = sequelize.models
	private readonly cacheKey: string = 'devices'
	constructor(private readonly cache: CacheService) {
		super()
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceMonitoringModel.findAndCountAll(options)
				return {
					total: count,
					data: rows
				}
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
			const deviceMonitoring = (await DeviceMonitoringModel.findByPk(id)) ?? null // Find the device by its id, if it does not exist, device will be null
			if (!deviceMonitoring) {
				// If the device does not exist
				await DeviceMonitoringModel.create(
					{
						id,
						serial,
						activo,
						statusId,
						categoryId,
						brandId,
						modelId,
						locationId,
						observation,
						employeeId
					},
					{ transaction: t }
				) // Create a new device with the given payload
			} else {
				// If the device already exists
				await DeviceModel.update(
					{
						serial,
						activo,
						statusId,
						categoryId,
						brandId,
						modelId,
						employeeId,
						locationId,
						observation
					},
					{ where: { id }, transaction: t }
				) // Update the device with the given payload
				// await device.save({ transaction: t }) // Save the updated device
			}

			if (DeviceComputer.isComputerCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceComputerIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
			}
			if (DeviceHardDrive.isHardDriveCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceHardDriveIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
			}
			if (MFP.isMFPCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceMFPIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
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
