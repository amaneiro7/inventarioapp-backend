import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type DepartmentLevel3Primitives } from "../../Area/domain/entity/DepartmentLevel3"
import { type DepartmentRepository } from "../../Area/domain/repository/DepartmentRepository"
import { type DepartmentId } from "../../Area/domain/value-object/DepartmentId"
import { type Cargo, type CargoPrimitives } from "./Cargo"
import { type CargoName } from "./CargoName"
import { type CargoRepository } from "./CargoRepository"
import { DepartmentDoesNotExistError } from "../../Area/domain/value-object/DepartmentDoesNotExistError"
import { CargoAlreadyExistError } from "./CargoAlreadyExistError"

export class UpdateCargoUseCase {
    constructor(
        private readonly cargoRepository: CargoRepository,
        private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
    ) { }

    public async execute({ params: { name, departments }, entity }: { entity: Cargo, params: Partial<Omit<CargoPrimitives, 'id'>> }): Promise<void> {
        // Se verifica que el cargo no exista
        await this.ensureCargoDoesNotExist({ name, entity })

        // Se verifica que los departamentos existan
        await this.ensureDepartmentdsExists({ departments, entity })
    }

    private async ensureCargoDoesNotExist({ name, entity }: { name?: Primitives<CargoName>, entity: Cargo }): Promise<void> {
        if (!name) return

        if (entity.nameValue === name) return

        if (await this.departmentLevel3Repository.searchByName(name) !== null) {
            throw new CargoAlreadyExistError(name)
        }
        entity.updateName(name)

    }


    private async ensureDepartmentdsExists({ entity, departments }: { departments?: Primitives<DepartmentId>[], entity: Cargo }): Promise<void> {
        if (!departments) return

        // Asegurarse que no existan valores duplicados
        const arraySinDuplicados = Array.from(new Set(departments))
        const currentDepartmentsIds = entity.departmentsValue

        // Se crea una nueva lista con los departamentos nuevos, que no estan en la lista actual
        const newDepartments = this.newDepartmentsToAdd(currentDepartmentsIds, arraySinDuplicados)

        // Si la lista es 0, no hay cargos nuevos
        if (newDepartments.length === 0) return

        // Se verifica que cada departamento exista
        for (const departmentId of newDepartments) {
            if (await this.cargoRepository.searchById(departmentId) === null) {
                throw new DepartmentDoesNotExistError()
            }
        }
        entity.updateDepartments(departments)
    }

    // Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
    private newDepartmentsToAdd(currentList: string[], newList: string[]): string[] {
        return newList.filter(list => !currentList.includes(list))
    }
}