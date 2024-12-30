import { Employee, type EmployeePrimitives } from '../domain/Employee'
import { type EmployeeRepository } from '../domain/EmployeeRepository'
import { EmployeeUserName } from '../domain/EmployeeUsername'

export class EmployeeCreator {
  constructor(private readonly repository: EmployeeRepository) { }

  async run(params: Omit<EmployeePrimitives, 'id'>): Promise<void> {

    const employee = Employee.create(params)

    await EmployeeUserName.ensureEmployeeDoesNotExit({ repository: this.repository, userName: params.userName })

    await this.repository.save(employee.toPrimitive())
  }

}
