import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type KeyboardModels } from './KeyboadModels'

/**
 * @description Represents a boolean value indicating if a device has a fingerprint reader.
 */
export class HasFingerPrintReader extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the fingerprint reader field of a keyboard model.
	 * @param {{ hasFingerPrintReader: Primitives<HasFingerPrintReader>; entity: KeyboardModels }} params The parameters for updating.
	 */
	static updateFingerprintField(params: {
		hasFingerPrintReader: Primitives<HasFingerPrintReader>
		entity: KeyboardModels
	}): void {
		if (
			params.hasFingerPrintReader === undefined ||
			params.entity.hasFingerPrintReaderValue === params.hasFingerPrintReader
		) {
			return
		}
		params.entity.updateHasFingerPrintReader(params.hasFingerPrintReader)
	}
}
