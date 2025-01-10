import { type EmployeeRepository } from "../domain/Repository/EmployeeRepository"
import { type EmployeePrimitives } from "../domain/entity/Employee"

export class EmployeeFinderAll {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run(): Promise<EmployeePrimitives[]> {
    return await this.employeeRepository.searchAll()
  }
}
