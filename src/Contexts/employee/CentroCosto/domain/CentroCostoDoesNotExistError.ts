export class CentroCostoDoesNotExistError extends Error {
  constructor() {
    super()
    this.message = "El centro de costo no existe"
  }
}
