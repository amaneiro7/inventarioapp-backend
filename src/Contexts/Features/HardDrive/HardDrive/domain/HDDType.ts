import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { HardDriveTypeId } from '../../HardDriveType/domain/HardDriveTypeId'
import { type HardDriveTypeRepository } from '../../HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceHardDrive } from './HardDrive'

/**
 * @description Represents the hard drive type in the context of a device.
 */
export class HDDType extends HardDriveTypeId {
	/**
	 * @description Handles the logic for updating a device's hard drive type.
	 * @param {{ repository: HardDriveTypeRepository; hardDriveType?: Primitives<HDDType>; entity: DeviceHardDrive }} params The parameters for updating.
	 */
	static async updateHardDriveTypeField({
		repository,
		hardDriveType,
		entity
	}: {
		repository: HardDriveTypeRepository
		hardDriveType?: Primitives<HDDType>
		entity: DeviceHardDrive
	}): Promise<void> {
		if (hardDriveType === undefined || entity.hardDriveTypeValue === hardDriveType) {
			return
		}
		await HardDriveTypeId.ensureHardDriveTypeExit({ repository, hardDriveType })
		entity.updateHardDriveType(hardDriveType)
	}
}
