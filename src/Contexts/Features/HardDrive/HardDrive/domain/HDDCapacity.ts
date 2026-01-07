import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { HardDriveCapacityId } from '../../HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { type HardDriveCapacityRepository } from '../../HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type DeviceHardDrive } from './HardDrive'

/**
 * @description Represents the hard drive capacity in the context of a device.
 */
export class HDDCapacity extends HardDriveCapacityId {
	/**
	 * @description Handles the logic for updating a device's hard drive capacity.
	 * @param {{ repository: HardDriveCapacityRepository; hardDriveCapacity?: Primitives<HDDCapacity>; entity: DeviceHardDrive }} params The parameters for updating.
	 */
	static async updateHardDriveCapacityField({
		repository,
		hardDriveCapacity,
		entity
	}: {
		repository: HardDriveCapacityRepository
		hardDriveCapacity?: Primitives<HDDCapacity>
		entity: DeviceHardDrive
	}): Promise<void> {
		if (hardDriveCapacity === undefined || entity.hardDriveCapacityValue === hardDriveCapacity) {
			return
		}
		await HardDriveCapacityId.ensureHardDriveCapacityExit({ repository, hardDriveCapacity })
		entity.updateHardDriveCapacity(hardDriveCapacity)
	}
}
