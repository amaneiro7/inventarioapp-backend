export class BrandDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`La marca ${value} no existe`)
	}
}
