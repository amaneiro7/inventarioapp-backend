import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { type DirectivaPrimitives } from "../domain/Directiva"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"

export class DirectivaFinder {
    constructor(private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>) { }

    async run(params: { id: string }): Promise<DirectivaPrimitives> {
        const { id } = params
        const directivaId = new DepartmentId(id).value
        const directiva = await this.directivaRepository.searchById(directivaId)

        if (!directiva) {
            throw new DepartmentDoesNotExistError('La Directiva')
        }

        return directiva
    }
}
