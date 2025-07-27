import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MonitorModels } from './MonitorModels'

/**
 * @description Represents the screen size of a monitor in inches.
 */
export class MonitorScreenSize extends NumberValueObject {
	private readonly MIN_SIZE = 11
	private readonly MAX_SIZE = 35

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidRange(value)
	}

	private ensureIsValidRange(value: number): void {
		if (value < this.MIN_SIZE || value > this.MAX_SIZE) {
			throw new InvalidArgumentError(
				`El tamaño de pantalla debe estar entre ${this.MIN_SIZE} y ${this.MAX_SIZE} pulgadas.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the screen size field of a monitor model.
	 * @param {{ ScreenSize: Primitives<MonitorScreenSize>; entity: MonitorModels }} params The parameters for updating.
	 */
	static updateScreenSizeField(params: { ScreenSize: Primitives<MonitorScreenSize>; entity: MonitorModels }): void {
		if (params.ScreenSize === undefined || params.entity.screenSizeValue === params.ScreenSize) {
			return
		}
		params.entity.updateScreenSize(params.ScreenSize)
	}
}
