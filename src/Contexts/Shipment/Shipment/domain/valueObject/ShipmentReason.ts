import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export enum ReasonEnum {
	NEW_ASSIGNMENT = 'nueva_asignacion',
	REPAIR = 'reparacion',
	RETURN = 'devolucion',
	TRANSFER = 'traslado',
	DISPOSAL = 'desincorporacion',
	OTHER = 'otro'
}

export class ShipmentReason extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidReason(value)
	}

	private ensureIsValidReason(reason: string): void {
		if (!Object.values(ReasonEnum).includes(reason as ReasonEnum)) {
			throw new InvalidArgumentError(`<${reason}> no es un motivo de envío válido.`)
		}
	}
}
