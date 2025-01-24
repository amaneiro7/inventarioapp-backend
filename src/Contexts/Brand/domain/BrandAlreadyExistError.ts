export class BrandAlreadyExistError extends Error {
	constructor(readonly name: string) {
		super()
		this.message = `La marca ${this.name} ya existe`
	}
}
