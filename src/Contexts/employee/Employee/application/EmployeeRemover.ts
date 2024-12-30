import { EmployeeId } from "../domain/EmployeeId"
import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type EmployeeRepository } from "../domain/EmployeeRepository"

export class EmployeeRemover {
  constructor(private readonly repository: EmployeeRepository) { }

  async run(params: { id: Primitives<EmployeeId> }): Promise<void> {
    const { id } = params
    const employeeId = new EmployeeId(id).value

    await this.repository.remove(employeeId)
  }
}
