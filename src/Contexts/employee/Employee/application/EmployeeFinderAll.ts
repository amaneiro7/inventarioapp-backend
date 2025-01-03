import { type EmployeePrimitives } from "../domain/Employee"
import { type EmployeeRepository } from "../domain/EmployeeRepository"

export class EmployeeFinderAll {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run(): Promise<EmployeePrimitives[]> {
    return await this.employeeRepository.searchAll()
  }
}
