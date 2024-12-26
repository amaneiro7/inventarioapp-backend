import { InvalidArgumentError } from '../value-object/InvalidArgumentError'
import { EnumValueObject } from '../value-object/EnumValueObject'

export enum Operator {
  EQUAL = '=',
  NOT_EQUAL = '!=',
  GT = '>',
  LT = '<',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS'
}

export class FilterOperator extends EnumValueObject<Operator> {
  constructor (public readonly value: Operator) {
    super(value, Object.values(Operator))
  }

  // Esto es simplemente otra forma de instanciar nuestra clase
  // La usamos cuando queremos hacer logica extra en nuestra instanciación
  public static fromValue (value: string): FilterOperator {
    for (const operatorValue of Object.values(Operator)) {
      if (value === operatorValue.toString()) {
        return new FilterOperator(operatorValue)
      }
    }

    throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
  }

  // Condicional que evalua si mi operador es positivo
  public isPositive (): boolean {
    return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS
  }

  public isContains (): boolean {
    return this.value === Operator.CONTAINS
  }

  public isNotContains (): boolean {
    return this.value === Operator.NOT_CONTAINS
  }

  public isNotEquals (): boolean {
    return this.value === Operator.NOT_EQUAL
  }

  // Instancio la clase con el operador =
  public static equal (): FilterOperator {
    return this.fromValue(Operator.EQUAL)
  }

  // Implementación de nuestro EnumValueObject
  protected throwErrorForInvalidValue (value: Operator): void {
    throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
  }
}
