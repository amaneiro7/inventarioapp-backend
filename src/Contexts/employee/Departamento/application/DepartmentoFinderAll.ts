import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository";
import { type DepartmentoPrimitives } from "../domain/Departmento";

export class DepartemntoFinderAll {
    constructor(private readonly departemntoRepository: DepartmentRepository<DepartmentoPrimitives>) { }

    async run(): Promise<DepartmentoPrimitives[]> {
        return await this.departemntoRepository.searchAll()
    }
}
