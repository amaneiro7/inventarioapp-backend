export class CargoDoesNotExistError extends Error {
	constructor() {
		super()
		this.message = `El cargo no existe`
	}
}
