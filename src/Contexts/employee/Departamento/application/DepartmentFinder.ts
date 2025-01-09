import { type DepartmentLevel3Primitives } from "../../domain/entity/DepartmentLevel3"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"

export class DepartmentLevel3Finder {
    constructor(private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>) { }

    async run(params: { id: string }): Promise<DepartmentLevel3Primitives> {
        const { id } = params
        const departmentId = new DepartmentId(id).value
        const department = await this.departmentLevel3Repository.searchById(departmentId)

        if (!department) {
            throw new DepartmentDoesNotExistError()
        }

        return department
    }
}
