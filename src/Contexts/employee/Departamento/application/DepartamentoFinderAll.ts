import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type DepartamentoPrimitives } from "../domain/Departamento"

export class DepartamentoFinderAll {
    constructor(private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>) { }

    async run(): Promise<DepartamentoPrimitives[]> {
        return await this.departamentoRepository.searchAll()
    }
}
