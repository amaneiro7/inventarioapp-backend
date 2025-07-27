import { BooleanValueObject } from '../../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from './ComputerModels'

/**
 * @description Represents a boolean value indicating if a device has a DVI port.
 */
export class HasDVI extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the DVI field of a computer model.
	 * @param {{ hasDVI: Primitives<HasDVI>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateDVIField(params: { hasDVI: Primitives<HasDVI>; entity: ComputerModels }): void {
		if (params.hasDVI === undefined || params.entity.hasDVIValue === params.hasDVI) {
			return
		}
		params.entity.updateHasDVI(params.hasDVI)
	}
}
