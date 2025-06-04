export class LocationMonitoringDoesNotExistError extends Error {
	constructor(public readonly value: string) {
		super(`La ubicación con el ID ${value} no existe`)
	}
}
