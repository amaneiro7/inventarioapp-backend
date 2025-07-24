import { DeviceHardDrive } from '../domain/HardDrive'
import { HDDCapacity } from '../domain/HDDCapacity'
import { HDDType } from '../domain/HDDType'

import { type HardDriveCapacityRepository } from '../../HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceHardDriveParams } from '../domain/HardDrive.dto'

export class HardDriveValidation {
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	constructor({
		hardDriveCapacityRepository,
		hardDriveTypeRepository
	}: {
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
	}) {
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
		this.hardDriveTypeRepository = hardDriveTypeRepository
	}

	async run(params: DeviceHardDriveParams): Promise<DeviceHardDrive> {
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
