import { InputTypeDoesNotExistError } from '../../../InputType/domain/errors/InputTypeDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeRepository } from '../../../InputType/domain/repository/InputTypeRepository'
import { type InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'

export class InputTypeExistenceChecker {
	constructor(private readonly repository: InputTypeRepository) {}

	/**
	 * Ensures that a InputType exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<InputTypeId>} inputTypeId - The InputType ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the InputType exists.
	 * @throws {InputTypeDoesNotExistError} If the InputType does not exist.
	 */
	async ensureExist(inputTypeId: Primitives<InputTypeId> | null | undefined): Promise<void> {
		if (inputTypeId === null || inputTypeId === undefined) {
			return
		}

		const isInputTypeExist = await this.repository.findById(inputTypeId)
		if (!isInputTypeExist) {
			throw new InputTypeDoesNotExistError(inputTypeId)
		}
	}
}
