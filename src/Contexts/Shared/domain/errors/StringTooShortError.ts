import { InvalidArgumentError } from './ApiError'

/**
 * @description Error thrown when a string value is shorter than its minimum allowed length.
 */
export class StringTooShortError extends InvalidArgumentError {
	constructor(className: string, minLength: number) {
		super(`El valor para <${className}> debe ser mayor a ${minLength} caracteres`)
	}
}
