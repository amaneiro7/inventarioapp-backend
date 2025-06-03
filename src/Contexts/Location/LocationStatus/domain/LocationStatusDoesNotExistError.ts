import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from './LocationStatusId'

export class LocationStatusIdDoesNotExistError extends Error {
	constructor(public readonly value: Primitives<LocationStatusId>) {
		super(`El estatus no existe`)
	}
}
