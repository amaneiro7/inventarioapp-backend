import { type Primitives } from "../../../Shared/domain/value-object/Primitives";
import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository";
import { type DepartmentName } from "../../IDepartment/DepartmentName";
import { type DirectivaPrimitives } from "./Directiva";
import { DepartmentAlreadyExistError } from "../../IDepartment/DepartmentAlreadyExistError";

export class CreateDirectivaUseCase {
    constructor(private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>) { }

    public async execute({ name }: Omit<DirectivaPrimitives, 'id'>): Promise<void> {
        await this.ensureDirectivaDoesNotExist(name)
    }
    private async ensureDirectivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
        if (await this.directivaRepository.searchByName(name) !== null) {
            throw new DepartmentAlreadyExistError('Directiva')
        }
    }
}