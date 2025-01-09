import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type DirectivaPrimitives } from "../domain/Directiva"

export class DirectivaFinderAll {
    constructor(private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>) { }

    async run(): Promise<DirectivaPrimitives[]> {
        return await this.directivaRepository.searchAll()
    }
}
