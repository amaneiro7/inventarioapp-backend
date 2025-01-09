import { InvalidArgumentError } from "../../../Shared/domain/value-object/InvalidArgumentError"
import { StringValueObject } from "../../../Shared/domain/value-object/StringValueObject"

export class CentroCostoName extends StringValueObject {
  private readonly NAME_MAX_LENGTH = 100
  private readonly NAME_MIN_LENGTH = 3
  private readonly regex = /^[a-zA-Z0-9()\-.,\s]*$/

  constructor(readonly value: string) {
    super(value)

    this.ensureIsValid(value)
  }

  toPrimitives(): string {
    return this.value
  }

  private ensureIsValid(value: string): void {
    if (!this.isValidLength(value)) {
      throw new InvalidArgumentError(`El nombre del centro de costo debe tener al menos ${this.NAME_MIN_LENGTH} caracteres y un máximo de ${this.NAME_MAX_LENGTH} caracteres`)
    }
    if (!this.isValid(value)) {
      throw new InvalidArgumentError(`<${value}> no es un nombre de centro de costo valido`)
    }
  }

  private isValid(name: string): boolean {
    return this.regex.test(name)
  }

  private isValidLength(name: string): boolean {
    return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
  }
}
