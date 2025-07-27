import { BooleanValueObject } from '../../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from './ComputerModels'

/**
 * @description Represents a boolean value indicating if a device has a VGA port.
 */
export class HasVGA extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the VGA field of a computer model.
	 * @param {{ hasVGA: Primitives<HasVGA>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateVGAField(params: { hasVGA: Primitives<HasVGA>; entity: ComputerModels }): void {
		if (params.hasVGA === undefined || params.entity.hasVGAValue === params.hasVGA) {
			return
		}
		params.entity.updateHasVGA(params.hasVGA)
	}
}
