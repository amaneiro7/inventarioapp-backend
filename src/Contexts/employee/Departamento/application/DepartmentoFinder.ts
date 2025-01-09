import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { DepartmentoPrimitives } from "../domain/Departmento"

export class DepartmentoFinder {
    constructor(private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>) { }

    async run(params: { id: string }): Promise<DepartmentoPrimitives> {
        const { id } = params
        const departmentoId = new DepartmentId(id).value
        const departmento = await this.departmentoRepository.searchById(departmentoId)

        if (!departmento) {
            throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
        }

        return departmento
    }
}
