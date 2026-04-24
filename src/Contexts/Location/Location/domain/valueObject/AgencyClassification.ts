import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'

export enum AgencyClassificationEnum {
	A = 'A',
	B = 'B',
	C = 'C',
	D = 'D',
	E = 'E'
}

export class AgencyClassification extends AcceptedNullStringValueObject {
	constructor(readonly value: string | null) {
		super(value)
		this.ensureIsValidAgencyClassification(value)
	}

	private ensureIsValidAgencyClassification(value: Primitives<AgencyClassification>): void {
		// 1. Si el valor es null, salimos de la validación (es válido)
		if (value === null) {
			return
		}
		if (!Object.values(AgencyClassificationEnum).includes(value as AgencyClassificationEnum)) {
			throw new InvalidArgumentError(`<${value}> no es una clasificación de agencia válida.`)
		}
	}
}
