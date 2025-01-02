export class DeviceAlreadyExistError extends Error {
  constructor(readonly name: string) {
    super()
    this.message = `The Device ${this.name} already exist`
  }
}
