import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../valueObject/LocationId'
import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Clase de error personalizada para cuando una Ubicación no existe.
 * Extiende ApiError para proporcionar una respuesta de error estandarizada.
 */
export class LocationDoesNotExistError extends ApiError {
	/**
	 * Crea una instancia de LocationDoesNotExistError.
	 * @param {Primitives<LocationId>} value - El ID de la ubicación que no existe.
	 */
	constructor(public readonly value: Primitives<LocationId>) {
		super(httpStatus[404].statusCode, `La ubicación ${value} no existe`)
		this.name = 'LocationDoesNotExistError'
	}
}
