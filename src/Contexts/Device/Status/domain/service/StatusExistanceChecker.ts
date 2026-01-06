import { StatusDoesNotExistError } from '../errors/StatusDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusRepository } from '../repository/StatusRepository'
import { type StatusId } from '../valueObject/StatusId'

export class StatusExistenceChecker {
	constructor(private readonly repository: StatusRepository) {}

	/**
	 * Ensures that a Status exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<StatusId>} statusId - The Status ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the Status exists.
	 * @throws {StatusDoesNotExistError} If the Status does not exist.
	 */
	async ensureExist(statusId: Primitives<StatusId> | null | undefined): Promise<void> {
		if (statusId === null || statusId === undefined) {
			return
		}

		const isStatusExist = await this.repository.findById(statusId)
		if (!isStatusExist) {
			throw new StatusDoesNotExistError(statusId)
		}
	}
}
