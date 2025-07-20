import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { SiteId } from './SiteId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class SiteDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<SiteId>) {
		super(httpStatus[404].statusCode, `El sitio no existe`)
	}
}
