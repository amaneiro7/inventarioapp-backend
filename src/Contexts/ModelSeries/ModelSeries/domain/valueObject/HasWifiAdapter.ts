import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from '../entity/ComputerModels'

/**
 * @description Represents a boolean value indicating if a device has a Wi-Fi adapter.
 */
export class HasWifiAdapter extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the Wi-Fi adapter field of a computer model.
	 * @param {{ hasWifiAdapter: Primitives<HasWifiAdapter>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateWifiAdapterField(params: {
		hasWifiAdapter: Primitives<HasWifiAdapter>
		entity: ComputerModels
	}): void {
		if (params.hasWifiAdapter === undefined || params.entity.hasWifiAdapterValue === params.hasWifiAdapter) {
			return
		}
		params.entity.updateHasWifiAdapter(params.hasWifiAdapter)
	}
}
