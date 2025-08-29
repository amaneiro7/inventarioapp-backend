import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export enum StatusEnum {
	PENDING = 'pendiente',
	IN_TRANSIT = 'en_transito',
	DELIVERED = 'entregado',
	CANCELLED = 'cancelado'
}

export class ShipmentStatus extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidStatus(value)
	}

	private ensureIsValidStatus(status: string): void {
		if (!Object.values(StatusEnum).includes(status as StatusEnum)) {
			throw new InvalidArgumentError(`<${status}> no es un estado de envío válido.`)
		}
	}
}
