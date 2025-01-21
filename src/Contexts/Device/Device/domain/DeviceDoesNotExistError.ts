export class DeviceDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super()
		this.message = `The Device ${value} does not exist`
	}
}
