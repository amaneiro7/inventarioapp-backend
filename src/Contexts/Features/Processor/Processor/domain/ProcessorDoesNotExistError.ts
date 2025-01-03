export class ProcessorDoesNotExistError extends Error {
  constructor(public readonly value: string) {
    super()
    this.message = `The processor name ${value} does not exist`
  }
}
