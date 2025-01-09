import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository";
import { type VicepresidenciaEjecutivaPrimitives } from "../domain/VicepresidenciaEjecutiva";

export class VicepresidenciaEjecutivaFinderAll {
    constructor(private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>) { }

    async run(): Promise<VicepresidenciaEjecutivaPrimitives[]> {
        return await this.vicepresidenciaEjecutivaRepository.searchAll()
    }
}
