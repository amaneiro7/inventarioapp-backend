export class EmployeeAlreadyExistError extends Error {

  constructor(readonly name: string) {
    super()
    this.message = `The Employee UserName${this.name} already exist`
  }
}
