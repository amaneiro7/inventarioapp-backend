export class BrandAlreadyExistError extends Error {

  constructor(readonly name: string) {
    super()
    this.message = `The brand ${this.name} already exist`
  }
}
