import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { InputTypeId } from '../../../InputType/domain/InputTypeId'
import { type InputTypeRepository } from '../../../InputType/domain/InputTypeRepository'
import { type KeyboardModels } from './KeyboadModels'

/**
 * @description Represents the input type for a keyboard model.
 */
export class ModelKeyboardInputType extends InputTypeId {
	/**
	 * @description Handles the logic for updating the input type field of a keyboard model.
	 * @param {{ repository: InputTypeRepository; inputTypeId: Primitives<InputTypeId>; entity: KeyboardModels }} params The parameters for updating.
	 */
	static async updateInputTypeField(params: {
		repository: InputTypeRepository
		inputTypeId: Primitives<InputTypeId>
		entity: KeyboardModels
	}): Promise<void> {
		if (params.inputTypeId === undefined || params.entity.inputTypeValue === params.inputTypeId) {
			return
		}
		await this.ensureInputTypeExist(params.repository, params.inputTypeId)
		params.entity.updateInputType(params.inputTypeId)
	}

	/**
	 * @description Ensures that the specified input type exists in the repository.
	 * @param repository The repository to search in.
	 * @param inputTypeId The ID of the input type to check.
	 * @throws {Error} If the input type does not exist.
	 */
	static async ensureInputTypeExist(
		repository: InputTypeRepository,
		inputTypeId: Primitives<InputTypeId>
	): Promise<void> {
		const isInputTypeExist = await repository.searchById(inputTypeId)
		if (!isInputTypeExist) {
			throw new Error('El tipo de entrada no existe.')
		}
	}
}
