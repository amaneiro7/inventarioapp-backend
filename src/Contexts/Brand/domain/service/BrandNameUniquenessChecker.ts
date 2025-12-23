import { BrandAlreadyExistError } from '../errors/BrandAlreadyExistError'
import { type BrandRepository } from '../repository/BrandRepository'
import { type BrandId } from '../valueObject/BrandId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Domain service responsible for verifying that a brand name is unique within the system.
 */
export class BrandNameUniquenessChecker {
	/**
	 * Creates an instance of BrandNameUniquenessChecker.
	 * @param {BrandRepository} repository - The repository used to check for existing brands.
	 */
	constructor(private readonly repository: BrandRepository) {}

	/**
	 * Ensures that the provided brand name is unique.
	 * If an ID is provided in excludeId, it ignores that brand (useful for updates).
	 *
	 * @param {string} name - The brand name to check.
	 * @param {Primitives<BrandId>} [excludeId] - The ID of the brand to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {BrandAlreadyExistError} If a brand with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<BrandId>): Promise<void> {
		const existingBrand = await this.repository.findByName(name)
		if (existingBrand && existingBrand.id !== excludeId) {
			throw new BrandAlreadyExistError(name)
		}
	}
}
