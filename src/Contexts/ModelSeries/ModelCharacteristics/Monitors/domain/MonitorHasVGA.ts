import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MonitorModels } from './MonitorModels'

/**
 * @description Represents a boolean value indicating if a monitor has a VGA port.
 */
export class MonitorHasVGA extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the VGA field of a monitor model.
	 * @param {{ hasVGA: Primitives<MonitorHasVGA>; entity: MonitorModels }} params The parameters for updating.
	 */
	static updateVGAField(params: { hasVGA: Primitives<MonitorHasVGA>; entity: MonitorModels }): void {
		if (params.hasVGA === undefined || params.entity.hasVGAValue === params.hasVGA) {
			return
		}
		params.entity.updateHasVGA(params.hasVGA)
	}
}
