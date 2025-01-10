import { EmployeeId } from "../domain/valueObject/EmployeeId"
import { EmployeeDoesNotExistError } from "../domain/Errors/EmployeeDoesNotExistError"
import { type EmployeeRepository } from "../domain/Repository/EmployeeRepository"
import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type EmployeePrimitives } from "../domain/entity/Employee"

export class EmployeeFinder {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run(params: { id: Primitives<EmployeeId> }): Promise<EmployeePrimitives> {
    const { id } = params
    const employeeId = new EmployeeId(id).value

    const employee = await this.employeeRepository.searchById(employeeId)

    if (!employee) {
      throw new EmployeeDoesNotExistError(employeeId)
    }

    return employee
  }
}
