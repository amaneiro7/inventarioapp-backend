export class RegionDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`La región ${value} no existe`)
	}
}
