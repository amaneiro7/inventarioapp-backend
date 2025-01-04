export class LocationNameAlreadyExistError extends Error {

  constructor(readonly name: string) {
    super()
    this.message = `El nombre de ubicación ${this.name} ya existe`
  }
}
