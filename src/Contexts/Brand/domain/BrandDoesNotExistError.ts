export class BrandDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`La marca con el ID ${value} no existe`)
	}
}
