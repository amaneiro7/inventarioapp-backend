import { ApiError } from '../errors/ApiError'
import httpStatus from '../../infrastructure/utils/http-status'

export class InvalidCriteria extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Page size is required when page number is defined')
	}
}
