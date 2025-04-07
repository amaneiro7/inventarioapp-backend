export class CityDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`La ciudad ${value} no existe`)
	}
}
