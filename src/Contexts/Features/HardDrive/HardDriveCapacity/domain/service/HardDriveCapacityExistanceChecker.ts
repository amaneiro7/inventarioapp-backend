import { HardDriveCapacityDoesNotExistError } from '../errors/HardDriveCapacityDoesNotExist'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityRepository } from '../../../HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type HardDriveCapacityId } from '../../../HardDriveCapacity/domain/valueObject/HardDriveCapacityId'

export class HardDriveCapacityExistenceChecker {
	constructor(private readonly repository: HardDriveCapacityRepository) {}

	/**
	 * Ensures that a HardDriveCapacity exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<HardDriveCapacityId>} hardDriveCapacityId - The HardDriveCapacity ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the HardDriveCapacity exists.
	 * @throws {HardDriveCapacityDoesNotExistError} If the HardDriveCapacity does not exist.
	 */
	async ensureExist(hardDriveCapacityId: Primitives<HardDriveCapacityId> | null | undefined): Promise<void> {
		if (hardDriveCapacityId === null || hardDriveCapacityId === undefined) {
			return
		}

		const isHardDriveCapacityExist = await this.repository.findById(hardDriveCapacityId)
		if (!isHardDriveCapacityExist) {
			throw new HardDriveCapacityDoesNotExistError(hardDriveCapacityId)
		}
	}
}
