import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MonitorModels } from './MonitorModels'

/**
 * @description Represents a boolean value indicating if a monitor has a DVI port.
 */
export class MonitorHasDVI extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the DVI field of a monitor model.
	 * @param {{ hasDVI: Primitives<MonitorHasDVI>; entity: MonitorModels }} params The parameters for updating.
	 */
	static updateDVIField(params: { hasDVI: Primitives<MonitorHasDVI>; entity: MonitorModels }): void {
		if (params.hasDVI === undefined || params.entity.hasDVIValue === params.hasDVI) {
			return
		}
		params.entity.updateHasDVI(params.hasDVI)
	}
}
