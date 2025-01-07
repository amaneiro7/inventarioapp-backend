import { Employee, EmployeePrimitives } from "../entity/Employee"
import { GenericEmployee } from "../entity/GenericEmployee"
import { RegularEmployee } from "../entity/RegularEmployee"

export class EmployeeDomainService {
    createEmployee(params: Omit<EmployeePrimitives, 'id'>): Employee {
        const employee = params.isGeneric ? GenericEmployee.create(params) : RegularEmployee.create(params)
        // Asegurar que el campo 'generic' es consistente
        if (employee instanceof GenericEmployee && employee.isGenericValue === false) {
            throw new Error('El campo "generic" no es consistente')
        }

        if (employee instanceof RegularEmployee && employee.isGenericValue === false) {
            throw new Error('El campo "generic" no es consistente')
        }
        return employee
    }
}