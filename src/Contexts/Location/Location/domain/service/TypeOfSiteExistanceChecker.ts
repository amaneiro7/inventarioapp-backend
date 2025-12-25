import { TypeOfSiteDoesNotExistError } from '../../../TypeOfSite/domain/errors/TypeOfSiteDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteRepository } from '../../../TypeOfSite/domain/repository/TypeOfSiteRepository'
import { type TypeOfSiteId } from '../../../TypeOfSite/domain/valueObject/TypeOfSiteId'

export class TypeOfSiteExistenceChecker {
	constructor(private readonly repository: TypeOfSiteRepository) {}

	/**
	 * Ensures that a TypeOfSite exists in the repository.
	 * @param {Primitives<TypeOfSiteId>} typeOfSiteId - The TypeOfSite ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the TypeOfSite exists.
	 * @throws {TypeOfSiteDoesNotExistError} If the TypeOfSite does not exist.
	 */
	async ensureExist(typeOfSiteId: Primitives<TypeOfSiteId>): Promise<void> {
		const isTypeOfSiteExist = await this.repository.findById(typeOfSiteId)
		if (!isTypeOfSiteExist) {
			throw new TypeOfSiteDoesNotExistError(typeOfSiteId)
		}
	}
}
