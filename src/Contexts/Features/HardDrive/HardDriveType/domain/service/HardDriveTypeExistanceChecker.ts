import { HardDriveTypeDoesNotExistError } from '../errors/HardDriveTypeDoesNotExist'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeRepository } from '../repository/HardDriveTypeRepository'
import { type HardDriveTypeId } from '../../../HardDriveType/domain/valueObject/HardDriveTypeId'

export class HardDriveTypeExistenceChecker {
	constructor(private readonly repository: HardDriveTypeRepository) {}

	/**
	 * Ensures that a HardDriveType exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<HardDriveTypeId>} hardDriveTypeId - The HardDriveType ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the HardDriveType exists.
	 * @throws {HardDriveTypeDoesNotExistError} If the HardDriveType does not exist.
	 */
	async ensureExist(hardDriveTypeId: Primitives<HardDriveTypeId> | null | undefined): Promise<void> {
		if (hardDriveTypeId === null || hardDriveTypeId === undefined) {
			return
		}

		const isHardDriveTypeExist = await this.repository.findById(hardDriveTypeId)
		if (!isHardDriveTypeExist) {
			throw new HardDriveTypeDoesNotExistError(hardDriveTypeId)
		}
	}
}
