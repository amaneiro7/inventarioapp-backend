import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type ComputerHardDriveCapacity } from '../../../Computer/domain/ComputerHardDriveCapacity'
import { HardDriveCapacityDoesNotExistError } from './HardDriveCapacityDoesNotExist'
import { type HardDriveCapacityRepository } from './HardDriveCapacityRepository'

/**
 * @description Represents the Value Object for a HardDriveCapacity's unique identifier.
 */
export class HardDriveCapacityId extends StringValueObject {
	/**
	 * @description Checks if a hard drive capacity exists in the repository.
	 * @param {{ repository: HardDriveCapacityRepository; hardDriveCapacity: Primitives<ComputerHardDriveCapacity> }} params The parameters for the check.
	 * @throws {HardDriveCapacityDoesNotExistError} If the hard drive capacity does not exist.
	 */
	static async ensureHardDriveCapacityExit({
		repository,
		hardDriveCapacity
	}: {
		repository: HardDriveCapacityRepository
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	}): Promise<void> {
		if (hardDriveCapacity === null) {
			return
		}
		const existingCapacity = await repository.searchById(hardDriveCapacity)
		if (!existingCapacity) {
			throw new HardDriveCapacityDoesNotExistError(hardDriveCapacity)
		}
	}
}
