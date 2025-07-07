import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { TypeOfSiteId } from './TypeOfSiteId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class TypeOfSiteDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<TypeOfSiteId>) {
		super(httpStatus.NOT_FOUND, `El tipo de sitio no existe`)
	}
}
