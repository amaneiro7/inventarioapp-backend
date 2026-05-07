import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export enum TipoUnidadEnum {
	LINEA = 'Línea',
	STAFF = 'Staff'
}

export class TipoUnidad extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidTipoUnidad(value)
	}

	private ensureIsValidTipoUnidad(TipoUnidad: string): void {
		if (!Object.values(TipoUnidadEnum).includes(TipoUnidad as TipoUnidadEnum)) {
			throw new InvalidArgumentError(`<${TipoUnidad}> no es un tipo de unidad válido.`)
		}
	}
}
