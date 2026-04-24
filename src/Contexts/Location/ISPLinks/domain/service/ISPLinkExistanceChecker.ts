import { ISPLinkDoesNotExistError } from '../errors/ISPLinkDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ISPLinkRepository } from '../repository/ISPLinkRepository'
import { type ISPLinkId } from '../valueObject/ISPLinkId'

export class ISPLinkExistenceChecker {
	constructor(private readonly repository: ISPLinkRepository) {}

	/**
	 * Ensures that one or more ISPLinks exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<ISPLinkId> | null | undefined | (Primitives<ISPLinkId> | null | undefined)[]} ispLinkIds - The ISPLink ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null ISPLinks exist.
	 * @throws {ISPLinkDoesNotExistError} If any of the ISPLinks do not exist.
	 */
	async ensureExist(
		ispLinkIds: Primitives<ISPLinkId> | null | undefined | (Primitives<ISPLinkId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(ispLinkIds) ? ispLinkIds : [ispLinkIds]
		const uniqueISPLinkIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<ISPLinkId>[]
		if (uniqueISPLinkIds.length === 0) {
			return
		}
		const foundISPLinks = await this.repository.findByIds(uniqueISPLinkIds)
		if (foundISPLinks.length !== uniqueISPLinkIds.length) {
			const foundIds = new Set(foundISPLinks.map(c => c.id))
			const missingIds = uniqueISPLinkIds.filter(id => !foundIds.has(id))
			throw new ISPLinkDoesNotExistError(missingIds.join(', '))
		}
	}
}
