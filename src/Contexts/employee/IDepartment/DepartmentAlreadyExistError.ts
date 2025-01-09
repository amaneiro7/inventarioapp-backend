export class DepartmentAlreadyExistError extends Error {
  constructor(private readonly value: string) {
    super()
    this.message = `El ${this.value} ya se encuentra registrado`
  }
}
