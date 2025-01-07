export class DepartmentAlreadyExistError extends Error {
  constructor() {
    super()
    this.message = `The department name already exist`
  }
}
