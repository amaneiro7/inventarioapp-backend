import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

export enum RangoNivel {
	DIRECTIVA = 1,
	VICEPRESIDENCIA_EJECUTIVA = 2,
	VICEPRESIDENCIA = 3,
	GERENCIA = 4,
	COORDINACION = 5,
	OPERATIVO = 6
}

export class RangeLevel extends NumberValueObject {
	static readonly MIN: number = 1
	static readonly MAX: number = 6
	constructor(readonly value: number) {
		super(value)
		this.ensureLengthIsBiggerThan(RangeLevel.MIN, this.value)
		this.ensureLengthIsSmallerThan(RangeLevel.MAX, this.value)
	}
}
