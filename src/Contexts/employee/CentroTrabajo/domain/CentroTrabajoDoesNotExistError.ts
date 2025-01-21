export class CentroTrabajoDoesNotExistError extends Error {
	constructor() {
		super()
		this.message = 'El centro de trabajo no existe'
	}
}
