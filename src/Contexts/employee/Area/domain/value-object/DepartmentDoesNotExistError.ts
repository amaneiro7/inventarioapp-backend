export class DepartmentDoesNotExistError extends Error {
  constructor() {
    super()
    this.message = `The department does not exist`
  }
}
