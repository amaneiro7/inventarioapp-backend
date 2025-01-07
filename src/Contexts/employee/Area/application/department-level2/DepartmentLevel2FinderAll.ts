import { type DepartmentLevel2Primitives } from "../../domain/entity/DepartmentLevel2"
import { type DepartementRepository } from "../../domain/repository/DepartmentRepository"

export class DepartemntLevel2FinderAll {
    constructor(private readonly departemntLevel2Repository: DepartementRepository<DepartmentLevel2Primitives>) { }

    async run(): Promise<DepartmentLevel2Primitives[]> {
        return await this.departemntLevel2Repository.searchAll()
    }
}
