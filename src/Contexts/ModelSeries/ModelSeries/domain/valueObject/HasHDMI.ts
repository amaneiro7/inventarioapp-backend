import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from '../entity/ComputerModels'

/**
 * @description Represents a boolean value indicating if a device has an HDMI port.
 */
export class HasHDMI extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the HDMI field of a computer model.
	 * @param {{ hasHDMI: Primitives<HasHDMI>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateDVIField(params: { hasHDMI: Primitives<HasHDMI>; entity: ComputerModels }): void {
		if (params.hasHDMI === undefined || params.entity.hasHDMIValue === params.hasHDMI) {
			return
		}
		params.entity.updateHasHDMI(params.hasHDMI)
	}
}
