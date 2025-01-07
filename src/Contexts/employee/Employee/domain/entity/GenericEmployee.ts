import { Employee } from "./Employee"
import { EmployeeId } from "../EmployeeId"
import { EmployeeIsGeneric } from "../EmployeeIsGeneric"
import { EmployeeUserName } from "../EmployeeUsername"
import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError"

export class GenericEmployee extends Employee {
    constructor(
        id: EmployeeId,
        username: EmployeeUserName,
        isGeneric: EmployeeIsGeneric,
    ) {
        super(id, username, isGeneric)
        this.ensureGenericIsTrue()
    }

    private ensureGenericIsTrue(): void {
        if (this.isGenericValue === false) {
            throw new InvalidArgumentError('GenericEmpployee must have generic property set to true')
        }
    }
}