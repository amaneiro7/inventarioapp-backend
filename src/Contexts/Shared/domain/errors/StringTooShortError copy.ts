import { InvalidArgumentError } from './ApiError'

/**
 * @description Error thrown when a string value is shorter than its minimum allowed length.
 */
export class StringMatchesPatternError extends InvalidArgumentError {
	constructor(className: string, errorMessage?: string) {
		super(errorMessage || `El valor para <${className}> no cumple con el formato requerido`)
	}
}
