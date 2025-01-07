import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { type DepartementRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"

export class DepartmentLevel1Finder {
    constructor(private readonly departmentLevel1Repository: DepartementRepository<DepartmentPrimitives>) { }

    async run(params: { id: string }): Promise<DepartmentPrimitives> {
        const { id } = params
        const departmentId = new DepartmentId(id).value
        const department = await this.departmentLevel1Repository.searchById(departmentId)

        if (!department) {
            throw new DepartmentDoesNotExistError()
        }

        return department
    }
}
