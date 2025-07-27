import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type ComputerHardDriveType } from '../../../Computer/domain/ComputerHardDriveType'
import { HardDriveTypeDoesNotExistError } from './HardDriveTypeDoesNotExist'
import { type HardDriveTypeRepository } from './HardDriveTypeRepository'

/**
 * @description Represents the Value Object for a HardDriveType's unique identifier.
 */
export class HardDriveTypeId extends StringValueObject {
	/**
	 * @description Checks if a hard drive type exists in the repository.
	 * @param {{ repository: HardDriveTypeRepository; hardDriveType: Primitives<ComputerHardDriveType> }} params The parameters for the check.
	 * @throws {HardDriveTypeDoesNotExistError} If the hard drive type does not exist.
	 */
	static async ensureHardDriveTypeExit({
		repository,
		hardDriveType
	}: {
		repository: HardDriveTypeRepository
		hardDriveType: Primitives<ComputerHardDriveType>
	}): Promise<void> {
		if (hardDriveType === null) {
			return
		}
		const existingType = await repository.searchById(hardDriveType)
		if (!existingType) {
			throw new HardDriveTypeDoesNotExistError(hardDriveType)
		}
	}
}
