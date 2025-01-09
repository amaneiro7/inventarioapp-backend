export class DepartmentDoesNotExistError extends Error {
  constructor(readonly value: string) {
    super()
    this.message = `${value} no se encuentra registrado`
  }
}
