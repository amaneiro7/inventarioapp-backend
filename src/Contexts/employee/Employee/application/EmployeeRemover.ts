import { EmployeeId } from "../domain/valueObject/EmployeeId"
import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type EmployeeRepository } from "../domain/Repository/EmployeeRepository"

export class EmployeeRemover {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run(params: { id: Primitives<EmployeeId> }): Promise<void> {
    const { id } = params
    const employeeId = new EmployeeId(id).value

    await this.employeeRepository.remove(employeeId)
  }
}
