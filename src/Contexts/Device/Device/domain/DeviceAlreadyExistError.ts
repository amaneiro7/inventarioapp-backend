import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class DeviceAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El dispositivo con el serial: ${name} ya existe.`)
	}
}

// export class DeviceAlreadyExistError extends Error {
//   constructor(readonly name: string) {
//     super()
//     this.message = `The Device ${this.name} already exist`
//   }
// }
