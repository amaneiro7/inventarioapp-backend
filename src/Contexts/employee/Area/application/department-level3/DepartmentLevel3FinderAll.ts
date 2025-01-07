import { type DepartmentLevel3Primitives } from "../../domain/entity/DepartmentLevel3"
import { type DepartementRepository } from "../../domain/repository/DepartmentRepository"

export class DepartemntLevel3FinderAll {
    constructor(private readonly departemntLevel3Repository: DepartementRepository<DepartmentLevel3Primitives>) { }

    async run(): Promise<DepartmentLevel3Primitives[]> {
        return await this.departemntLevel3Repository.searchAll()
    }
}
