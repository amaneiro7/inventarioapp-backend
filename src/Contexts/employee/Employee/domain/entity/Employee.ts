import { Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { EmployeeId } from "../EmployeeId"
import { EmployeeIsGeneric } from "../EmployeeIsGeneric"
import { EmployeeUserName } from "../EmployeeUsername"

export interface EmployeePrimitives {
  id: Primitives<EmployeeId>,
  username: Primitives<EmployeeUserName>
  isGeneric: Primitives<EmployeeIsGeneric>
}

export class Employee {
  constructor(
    private readonly id: EmployeeId,
    private username: EmployeeUserName,
    private readonly isGeneric: EmployeeIsGeneric
  ) { }

  static create(params: Omit<EmployeePrimitives, 'id'>): Employee {
    const id = EmployeeId.random().value
    return new Employee(
      new EmployeeId(id),
      new EmployeeUserName(params.username),
      new EmployeeIsGeneric(params.isGeneric)
    )
  }


  static fromPrimitives(primitives: EmployeePrimitives): Employee {
    return new Employee(
      new EmployeeId(primitives.id),
      new EmployeeUserName(primitives.username),
      new EmployeeIsGeneric(primitives.isGeneric)
    )
  }

  toPrimitive(): EmployeePrimitives {
    return {
      id: this.idValue,
      username: this.usernameValue,
      isGeneric: this.isGenericValue
    }
  }

  get idValue(): Primitives<EmployeeId> {
    return this.id.value
  }

  get usernameValue(): Primitives<EmployeeUserName> {
    return this.username.value
  }
  get isGenericValue(): Primitives<EmployeeIsGeneric> {
    return this.isGeneric.value
  }

  updateUsername(newUsername: Primitives<EmployeeUserName>): void {
    this.username = new EmployeeUserName(newUsername)
  }
}