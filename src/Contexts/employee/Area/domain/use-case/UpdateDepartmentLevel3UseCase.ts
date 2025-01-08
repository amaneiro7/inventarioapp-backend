import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { DepartmentLevel3, type DepartmentLevel3Primitives } from "../entity/DepartmentLevel3"
import { type DepartmentPrimitives } from "../entity/IDeparment"
import { type DepartmentRepository } from "../repository/DepartmentRepository"
import { type DepartmentId } from "../value-object/DepartmentId"
import { type DepartmentName } from "../value-object/DepartmentName"
import { DepartmentAlreadyExistError } from "../value-object/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../value-object/DepartmentDoesNotExistError"
import { CargoId } from "../../../Cargo/domain/CargoId"

export class UpdateDepartmentLevel3UseCase {
    constructor(
        private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
        private readonly departmentLevel2Repository: DepartmentRepository<DepartmentPrimitives>,
        private readonly cargoRepository: CargoRepository,
    ) { }

    public async execute({ params: { name, departmentLevel2Id, cargos }, entity }: { entity: DepartmentLevel3, params: Partial<Omit<DepartmentLevel3Primitives, 'id'>> }): Promise<void> {
        // Se verifica que el departamento 2 exista
        await this.ensureDepartmentLevel2Exists({ departmentLevel2Id, entity })

        // Se verifica que el departamento 3 no exista
        await this.ensureDepartmentLevel3DoesNotExist({ name, entity })

        // Se verifica que los cargos existan
        await this.ensureCargoExists({ cargos, entity })
    }

    private async ensureDepartmentLevel3DoesNotExist({ name, entity }: { name?: Primitives<DepartmentName>, entity: DepartmentLevel3 }): Promise<void> {
        if (!name) return

        if (entity.nameValue === name) return

        if (await this.departmentLevel3Repository.searchByName(name) !== null) {
            throw new DepartmentAlreadyExistError()
        }
        entity.updateName(name)

    }

    private async ensureDepartmentLevel2Exists({ entity, departmentLevel2Id }: { departmentLevel2Id?: Primitives<DepartmentId>, entity: DepartmentLevel3 }): Promise<void> {
        if (!departmentLevel2Id) return

        if (entity.idDepartmentLevel2IdValue === departmentLevel2Id) return

        if (await this.departmentLevel2Repository.searchById(departmentLevel2Id) === null) {
            throw new DepartmentDoesNotExistError()
        }
        entity.updateDepartmentLevel2Id(departmentLevel2Id)
    }

    private async ensureCargoExists({ entity, cargos }: { cargos?: Primitives<CargoId>[], entity: DepartmentLevel3 }): Promise<void> {
        if (!cargos) return

        // Asegurarse que no existan valores duplicados
        const arraySinDuplicados = Array.from(new Set(cargos))
        const currentCargoIds = entity.CargosValue

        // Se crea una nueva lista con los cargos nuevos, que no estan en la lista actual
        const newCargos = this.newCargosToAdd(currentCargoIds, arraySinDuplicados)

        // Si la lista es 0, no hay cargos nuevos
        if (newCargos.length === 0) return

        // Se verifica que cada cargo exista
        for (const cargoId of newCargos) {
            if (await this.cargoRepository.searchById(new CargoId(cargoId).value) === null) {
                throw new DepartmentDoesNotExistError()
            }
        }
        entity.updateCargos(cargos)
    }

    // Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
    private newCargosToAdd(currentList: string[], newList: string[]): string[] {
        return newList.filter(list => !currentList.includes(list))
    }
}