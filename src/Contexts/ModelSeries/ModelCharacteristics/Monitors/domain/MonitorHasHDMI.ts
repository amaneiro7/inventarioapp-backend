import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MonitorModels } from './MonitorModels'

/**
 * @description Represents a boolean value indicating if a monitor has an HDMI port.
 */
export class MonitorHasHDMI extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the HDMI field of a monitor model.
	 * @param {{ hasHDMI: Primitives<MonitorHasHDMI>; entity: MonitorModels }} params The parameters for updating.
	 */
	static updateDVIField(params: { hasHDMI: Primitives<MonitorHasHDMI>; entity: MonitorModels }): void {
		if (params.hasHDMI === undefined || params.entity.hasHDMIValue === params.hasHDMI) {
			return
		}
		params.entity.updateHasHDMI(params.hasHDMI)
	}
}
