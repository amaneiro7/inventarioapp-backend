export class CentroCostoAlreadyExistError extends Error {

  constructor() {
    super()
    this.message = `El centro de costo ya se encuentra registrado`
  }
}
