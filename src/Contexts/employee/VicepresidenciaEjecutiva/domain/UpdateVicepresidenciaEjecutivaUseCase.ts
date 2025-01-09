import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { DepartmentAlreadyExistError } from "../../IDepartment/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type DepartmentId } from "../../IDepartment/DepartmentId"
import { type DepartmentName } from "../../IDepartment/DepartmentName"
import { type DirectivaPrimitives } from "../../Directiva/domain/Directiva"
import { type VicepresidenciaEjecutiva, type VicepresidenciaEjecutivaPrimitives } from "./VicepresidenciaEjecutiva"


export class UpdateVicepresidenciaEjecutivaUseCase {
    constructor(
        private readonly vicepresidenciaEjecutivaaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
        private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>
    ) { }

    public async execute({ params: { name, directivaId }, entity }: { entity: VicepresidenciaEjecutiva, params: Partial<Omit<VicepresidenciaEjecutivaPrimitives, 'id'>> }): Promise<void> {
        await this.ensureVicepresidenciaEjecutivaDoesNotExist({ name, entity })
        await this.ensureDirectivaExists({ directivaId, entity })
    }

    private async ensureVicepresidenciaEjecutivaDoesNotExist({ name, entity }: { name?: Primitives<DepartmentName>, entity: VicepresidenciaEjecutiva }): Promise<void> {
        if (!name) return

        if (entity.nameValue === name) return

        if (await this.vicepresidenciaEjecutivaaRepository.searchByName(name) !== null) {
            throw new DepartmentAlreadyExistError('La vicepresidenciaEjecutiva')
        }
        entity.updateName(name)
    }

    private async ensureDirectivaExists({ entity, directivaId }: { directivaId?: Primitives<DepartmentId>, entity: VicepresidenciaEjecutiva }): Promise<void> {
        if (!directivaId) return

        if (entity.directivaValue !== directivaId) return

        if (await this.directivaRepository.searchById(directivaId) === null) {
            throw new DepartmentDoesNotExistError('La directiva')
        }
        entity.updateDirectiva(directivaId)
    }
}