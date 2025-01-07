import { type DepartmentLevel2Primitives } from "../../domain/entity/DepartmentLevel2"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"

export class DepartmentLevel2Finder {
    constructor(private readonly departmentLevel2Repository: DepartmentRepository<DepartmentLevel2Primitives>) { }

    async run(params: { id: string }): Promise<DepartmentLevel2Primitives> {
        const { id } = params
        const departmentId = new DepartmentId(id).value
        const department = await this.departmentLevel2Repository.searchById(departmentId)

        if (!department) {
            throw new DepartmentDoesNotExistError()
        }

        return department
    }
}
