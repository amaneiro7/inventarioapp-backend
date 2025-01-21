export class ProcessorAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `The Processor ${this.name} already exist`
	}
}
