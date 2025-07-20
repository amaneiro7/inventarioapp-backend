import { ApiError } from '../errors/ApiError'
import httpStatus from '../../infrastructure/utils/http-status'

export class InvalidCriteria extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'Page size is required when page number is defined')
	}
}
