export class ComputerAlreadyExistError extends Error {

  constructor(readonly name: string) {
    super()
    this.message = `The Computer Features ${this.name} already exist`
  }
}
