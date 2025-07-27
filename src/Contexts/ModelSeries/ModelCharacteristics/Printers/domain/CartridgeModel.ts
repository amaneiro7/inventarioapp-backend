import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type ModelPrinters } from './ModelPrinters'

/**
 * @description Represents the model of a printer cartridge.
 */
export class CartridgeModel extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 20

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`El modelo de cartucho debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the cartridge model field of a printer model.
	 * @param {{ cartridgeModel: Primitives<CartridgeModel>; entity: ModelPrinters }} params The parameters for updating.
	 */
	static updateCartridgeModelField(params: {
		cartridgeModel: Primitives<CartridgeModel>
		entity: ModelPrinters
	}): void {
		if (params.cartridgeModel === undefined || params.entity.cartridgeModelValue === params.cartridgeModel) {
			return
		}
		params.entity.updateCartridgeModel(params.cartridgeModel)
	}
}
