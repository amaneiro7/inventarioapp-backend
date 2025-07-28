import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StateId } from '../../State/domain/StateId'
import { type City } from './City'
import { type StateRepository } from '../../State/domain/StateRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the state ID associated with a City.
 * Extends StateId and provides static methods for updating and ensuring state existence.
 */
export class CityState extends StateId {
	/**
	 * Updates the state field of a City entity.
	 * @param {{ repository: StateRepository; stateId?: Primitives<StateId>; entity: City }} params - Parameters for updating the state.
	 * @param {StateRepository} params.repository - The state repository for existence checks.
	 * @param {Primitives<StateId>} [params.stateId] - The new state ID for the city (optional).
	 * @param {City} params.entity - The City entity to update.
	 * @returns {Promise<void>} A promise that resolves when the state is updated or no action is needed.
	 * @throws {InvalidArgumentError} If the new state ID does not exist.
	 */
	static async updateStateField(params: {
		repository: StateRepository
		stateId?: Primitives<StateId>
		entity: City
	}): Promise<void> {
		// If no new state value is provided, do nothing.
		if (params.stateId === undefined) {
			return
		}
		// If the current state and the new state value are the same, do nothing.
		if (params.entity.stateValue === params.stateId) {
			return
		}
		// Check if the state exists in the database.
		await CityState.ensureStateExist({
			repository: params.repository,
			stateId: params.stateId
		})
		// Update the state field of the City entity with the new state value.
		params.entity.updateState(params.stateId)
	}

	/**
	 * Ensures that a state exists in the repository.
	 * @param {{ repository: StateRepository; stateId: Primitives<StateId> }} params - Parameters for the existence check.
	 * @param {StateRepository} params.repository - The state repository to perform the search.
	 * @param {Primitives<StateId>} params.stateId - The state ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the state exists, or rejects with InvalidArgumentError.
	 * @throws {InvalidArgumentError} If the state does not exist.
	 */
	static async ensureStateExist(params: {
		repository: StateRepository
		stateId: Primitives<StateId>
	}): Promise<void> {
		const isStateExist = await params.repository.searchById(params.stateId)
		if (!isStateExist) {
			throw new InvalidArgumentError('State does not exist')
		}
	}
}
