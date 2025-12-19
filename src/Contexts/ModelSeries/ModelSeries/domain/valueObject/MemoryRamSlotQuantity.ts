import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from '../entity/ComputerModels'

/**
 * @description Represents the quantity of memory RAM slots in a computer.
 */
export class MemoryRamSlotQuantity extends NumberValueObject {
	private readonly MIN_SLOTS = 1
	private readonly MAX_SLOTS = 8

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidRange(value)
	}

	private ensureIsValidRange(value: number): void {
		if (value < this.MIN_SLOTS || value > this.MAX_SLOTS) {
			throw new InvalidArgumentError(
				`El número de ranuras de RAM debe estar entre ${this.MIN_SLOTS} y ${this.MAX_SLOTS}.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the memory RAM slot quantity of a computer model.
	 * @param {{ memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>; entity: ComputerModels }} params The parameters for updating.
	 */
	static updateMemoryRamSlotQuantityField(params: {
		memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
		entity: ComputerModels
	}): void {
		if (
			params.memoryRamSlotQuantity === undefined ||
			params.entity.memoryRamSlotQuantityValue === params.memoryRamSlotQuantity
		) {
			return
		}
		params.entity.updateMemoryRamSlotQuantity(params.memoryRamSlotQuantity)
	}
}
