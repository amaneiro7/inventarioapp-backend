import { BooleanValueObject } from '../../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from './ComputerModels'

/**
 * @description Represents a boolean value indicating if a device has Bluetooth.
 */
export class HasBluetooth extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the Bluetooth field of a computer model.
	 * @param {{ hasBluetooth: Primitives<HasBluetooth>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateBluetoothField(params: { hasBluetooth: Primitives<HasBluetooth>; entity: ComputerModels }): void {
		if (params.hasBluetooth === undefined || params.entity.hasBluetoothValue === params.hasBluetooth) {
			return
		}
		params.entity.updateHasBluetooth(params.hasBluetooth)
	}
}
