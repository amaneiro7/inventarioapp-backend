export class ModelSeriesAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `The Model ${this.name} already exist`
	}
}
