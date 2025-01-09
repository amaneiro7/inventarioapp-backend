import { type VicepresidenciaEjecutivaPrimitives } from "../domain/VicepresidenciaEjecutiva"
import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"

export class VicepresidenciaEjecutivaFinder {
    constructor(private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>) { }

    async run(params: { id: string }): Promise<VicepresidenciaEjecutivaPrimitives> {
        const { id } = params
        const vicepresidenciaEjecutivaId = new DepartmentId(id).value
        const vicepresidenciaEjecutiva = await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)

        if (!vicepresidenciaEjecutiva) {
            throw new DepartmentDoesNotExistError('La vicepresidenciaEjecutiva')
        }

        return vicepresidenciaEjecutiva
    }
}
