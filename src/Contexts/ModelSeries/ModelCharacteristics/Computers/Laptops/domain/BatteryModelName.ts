import { InvalidArgumentError } from '../../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../../../Shared/domain/value-object/StringValueObject'
import { type LaptopsModels } from './LaptopsModels'

/**
 * @description Represents the model name of a battery.
 */
export class BatteryModelName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 20

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`El modelo de batería debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the battery model field of a laptop model.
	 * @param {{ batteryModel: Primitives<BatteryModelName>; entity: LaptopsModels }} params The parameters for updating.
	 */
	static updateBatteryModelField(params: {
		batteryModel: Primitives<BatteryModelName>
		entity: LaptopsModels
	}): void {
		if (params.batteryModel === undefined || params.entity.batteryModelValue === params.batteryModel) {
			return
		}
		params.entity.updateBatterModel(params.batteryModel)
	}
}
