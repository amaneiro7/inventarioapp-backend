import {
	DeviceHardDrive,
	type DeviceHardDrivePrimitives
} from '../domain/HardDrive'
import { HDDCapacity } from '../domain/HDDCapacity'
import { HDDType } from '../domain/HDDType'

import { type HardDriveCapacityRepository } from '../../HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../HardDriveType/domain/HardDriveTypeRepository'

export class HardDriveValidation {
	constructor(
		private readonly hardDriveCapacityRepository: HardDriveCapacityRepository,
		private readonly hardDriveTypeRepository: HardDriveTypeRepository
	) {}

	async run(
		params: Omit<DeviceHardDrivePrimitives, 'id'>
	): Promise<DeviceHardDrive> {
		await HDDCapacity.ensureHardDriveCapacityExit({
			repository: this.hardDriveCapacityRepository,
			hardDriveCapacity: params.hardDriveCapacityId
		})
		await HDDType.ensureHardDriveTypeExit({
			repository: this.hardDriveTypeRepository,
			hardDriveType: params.hardDriveTypeId
		})

		return DeviceHardDrive.create(params)
	}
}
