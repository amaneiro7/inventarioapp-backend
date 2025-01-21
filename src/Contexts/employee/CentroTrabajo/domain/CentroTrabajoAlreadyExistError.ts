export class CentroTrabajoAlreadyExistError extends Error {
	constructor() {
		super()
		this.message = `El centro de trabajo ya se encuentra registrado`
	}
}
