import { EmployeeId } from "../domain/EmployeeId"
import { EmployeeDoesNotExistError } from "../domain/EmployeeDoesNotExistError"
import { type EmployeePrimitives } from "../domain/Employee"
import { type EmployeeRepository } from "../domain/EmployeeRepository"

export class EmployeeFinder {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run(params: { id: string }): Promise<EmployeePrimitives> {
    const { id } = params
    const employeeId = new EmployeeId(id).value

    const employee = await this.employeeRepository.searchById(employeeId)

    if (employee === null) {
      throw new EmployeeDoesNotExistError(employeeId)
    }

    return employee
  }
}
