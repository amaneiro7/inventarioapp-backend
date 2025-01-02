export class UserAlreadyExistError extends Error {
  constructor(readonly email: string) {
    super()
    this.message = `The user ${this.email} already exist`
  }
}
