export class CargoAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `${name} Este cargo ya se encuenrta registrado`
	}
}
