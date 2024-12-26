type Primitives = string | number | boolean | Date

export abstract class AcceptedNullValueObject<T extends Primitives> {
  value: T | null
  constructor(value: T | null) {
    if (!value) {
      this.value = null
    } else {
      this.value = value
    }
  }

  equals(other: AcceptedNullValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value
  }

  toString(): string {
    return this.value === null ? 'null' : this.value.toString()
  }

  updateValue(newValue: T | null): void {
    this.value = newValue
  }
}
