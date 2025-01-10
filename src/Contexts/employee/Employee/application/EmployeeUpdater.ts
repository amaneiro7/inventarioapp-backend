import { EmployeeDoesNotExistError } from "../domain/Errors/EmployeeDoesNotExistError"
import { EmployeeId } from "../domain/valueObject/EmployeeId"
import { EmployeeUserName } from "../domain/valueObject/EmployeeUsername"

import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type EmployeeRepository } from "../domain/Repository/EmployeeRepository"
import { Employee, type EmployeePrimitives } from "../domain/entity/Employee"

export class EmployeeUpdater {
  constructor(private readonly employeeRepository: EmployeeRepository) { }

  async run({ id, params }: { id: Primitives<EmployeeId>, params: Partial<Omit<EmployeePrimitives, 'id'>> }): Promise<void> {
    const employeeId = new EmployeeId(id).value
    const employee = await this.employeeRepository.searchById(employeeId)

    if (!employee) {
      throw new EmployeeDoesNotExistError(id)
    }

    const employeeEntity = Employee.fromPrimitives(employee)

    await EmployeeUserName.updateUserNameField({ repository: this.employeeRepository, userName: params.userName, entity: employeeEntity })

    await this.employeeRepository.save(employeeEntity.toPrimitive())

  }
}
