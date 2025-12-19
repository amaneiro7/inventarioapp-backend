import { InvalidArgumentError } from './ApiError'

/**
 * @description Error thrown when a string value exceeds its maximum allowed length.
 */
export class StringTooLongError extends InvalidArgumentError {
	constructor(className: string, maxLength: number) {
		super(`El valor para <${className}> debe ser menor a ${maxLength} caracteres`)
	}
}
