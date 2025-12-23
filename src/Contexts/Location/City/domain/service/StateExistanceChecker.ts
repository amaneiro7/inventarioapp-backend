import { StateDoesNotExistError } from '../../../State/domain/errors/StateDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateRepository } from '../../../State/domain/repository/StateRepository'
import { type StateId } from '../../../State/domain/valueObject/StateId'

export class StateExitanceChecker {
	constructor(private readonly repository: StateRepository) {}

	/**
	 * Ensures that a state exists in the repository.
	 * @param {{ repository: StateRepository; stateId: Primitives<StateId> }} params - Parameters for the existence check.
	 * @param {StateRepository} params.repository - The state repository to perform the search.
	 * @param {Primitives<StateId>} params.stateId - The state ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the state exists, or rejects with InvalidArgumentError.
	 * @throws {InvalidArgumentError} If the state does not exist.
	 */
	async ensureExist(stateId: Primitives<StateId>): Promise<void> {
		const isStateExist = await this.repository.findById(stateId)
		if (!isStateExist) {
			throw new StateDoesNotExistError(stateId)
		}
	}
}
