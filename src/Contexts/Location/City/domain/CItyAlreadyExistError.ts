export class CityAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `La ciudad ${this.name} ya existe`
	}
}
