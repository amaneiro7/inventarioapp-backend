import { type DepartmentPrimitives } from "../../domain/entity/IDeparment";
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository";

export class DepartemntLevel1FinderAll {
    constructor(private readonly departemntLevel1Repository: DepartmentRepository<DepartmentPrimitives>) { }

    async run(): Promise<DepartmentPrimitives[]> {
        return await this.departemntLevel1Repository.searchAll()
    }
}
