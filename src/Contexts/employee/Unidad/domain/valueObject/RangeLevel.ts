import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

export enum RangoNivel {
	DIRECTIVA = 1,
	VICEPRESIDENCIA_EJECUTIVA = 2,
	VICEPRESIDENCIA_CORPORATIVA = 3, // La V.P. "madre"
	VICEPRESIDENCIA_REGIONAL = 4, // La V.P. subordinada (ej. Zona Oriente)
	GERENCIA_SENIOR = 5, // Gerencia que reporta a V.P.
	GERENCIA_OPERATIVA = 6, // Gerencia que reporta a otra Gerencia
	COORDINACION = 7,
	OPERATIVO = 8
}

export class RangeLevel extends NumberValueObject {
	static readonly MIN: number = 1
	static readonly MAX: number = 8
	constructor(readonly value: number) {
		super(value)
		this.ensureLengthIsBiggerThan(RangeLevel.MIN, this.value)
		this.ensureLengthIsSmallerThan(RangeLevel.MAX, this.value)
	}
}
