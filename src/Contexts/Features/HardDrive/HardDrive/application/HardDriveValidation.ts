import { DeviceHardDrive } from '../domain/HardDrive'
import { HDDCapacity } from '../domain/HDDCapacity'
import { HDDType } from '../domain/HDDType'
import { type HardDriveCapacityRepository } from '../../HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../HardDriveType/domain/repository/HardDriveTypeRepository'
import { type DeviceHardDriveParams } from '../domain/HardDrive.dto'

/**
 * @description A validation service for creating hard drive devices.
 */
export class HardDriveValidation {
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository

	constructor(dependencies: {
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
	}) {
		this.hardDriveCapacityRepository = dependencies.hardDriveCapacityRepository
		this.hardDriveTypeRepository = dependencies.hardDriveTypeRepository
	}

	/**
	 * @description Executes the validation process and creates a new `DeviceHardDrive` instance.
	 * @param {DeviceHardDriveParams} params The parameters for the new hard drive.
	 * @returns {Promise<DeviceHardDrive>} A promise that resolves to a new `DeviceHardDrive` instance.
	 */
	async run(params: DeviceHardDriveParams): Promise<DeviceHardDrive> {
		await Promise.all([
			HDDCapacity.ensureHardDriveCapacityExit({
				repository: this.hardDriveCapacityRepository,
				hardDriveCapacity: params.hardDriveCapacityId
			}),
			HDDType.ensureHardDriveTypeExit({
				repository: this.hardDriveTypeRepository,
				hardDriveType: params.hardDriveTypeId
			})
		])

		return DeviceHardDrive.create(params)
	}
}
