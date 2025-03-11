export class StatusAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `The status ${this.name} already exist`
	}
}
