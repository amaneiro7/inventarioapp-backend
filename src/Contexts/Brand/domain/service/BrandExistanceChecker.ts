import { BrandDoesNotExistError } from '../../../Brand/domain/errors/BrandDoesNotExistError'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type BrandId } from '../../../Brand/domain/valueObject/BrandId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class BrandExistenceChecker {
	constructor(private readonly repository: BrandRepository) {}

	/**
	 * Ensures that a Brand exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<BrandId>} brandId - The Brand ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the Brand exists.
	 * @throws {BrandDoesNotExistError} If the Brand does not exist.
	 */
	async ensureExist(brandId: Primitives<BrandId> | null | undefined): Promise<void> {
		if (brandId === null || brandId === undefined) {
			return
		}

		const isBrandExist = await this.repository.findById(brandId)
		if (!isBrandExist) {
			throw new BrandDoesNotExistError(brandId)
		}
	}
}
