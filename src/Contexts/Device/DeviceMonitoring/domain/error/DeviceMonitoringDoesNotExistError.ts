export class DeviceMonitoringDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`El computador con el ID ${value} no existe`)
	}
}
