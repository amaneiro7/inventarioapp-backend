import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type DepartmentId } from "../../IDepartment/DepartmentId"
import { type Cargo, type CargoPrimitives } from "./Cargo"
import { type CargoName } from "./CargoName"
import { type CargoRepository } from "./CargoRepository"
import { type DepartmentoPrimitives } from "../../Departamento/domain/Departmento"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { CargoAlreadyExistError } from "./CargoAlreadyExistError"

export class UpdateCargoUseCase {
    constructor(
        private readonly cargoRepository: CargoRepository,
        private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
    ) { }

    public async execute({ params: { name, departmentos }, entity }: { entity: Cargo, params: Partial<Omit<CargoPrimitives, 'id'>> }): Promise<void> {
        // Se verifica que el cargo no exista
        await this.ensureCargoDoesNotExist({ name, entity })

        // Se verifica que los departamentos existan
        await this.ensureDepartamentosExists({ departmentos, entity })
    }

    private async ensureCargoDoesNotExist({ name, entity }: { name?: Primitives<CargoName>, entity: Cargo }): Promise<void> {
        if (!name) return

        if (entity.nameValue === name) return

        if (await this.departmentoRepository.searchByName(name) !== null) {
            throw new CargoAlreadyExistError(name)
        }
        entity.updateName(name)
    }

    private async ensureDepartamentosExists({ entity, departmentos }: { departmentos?: Primitives<DepartmentId>[], entity: Cargo }): Promise<void> {
        if (!departmentos) return

        // Asegurarse que no existan valores duplicados
        const arraySinDuplicados = Array.from(new Set(departmentos))
        const currentDepartmentoIds = entity.departmentosValue

        // Se crea una nueva lista con los departamentos nuevos, que no estan en la lista actual
        const newDepartmentos = this.newDepartmentosToAdd(currentDepartmentoIds, arraySinDuplicados)

        // Si la lista es 0, no hay cargos nuevos
        if (newDepartmentos.length === 0) return

        // Se verifica que cada departamento exista
        for (const departmentId of newDepartmentos) {
            if (await this.cargoRepository.searchById(departmentId) === null) {
                throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
            }
        }
        entity.updateDepartmentos(departmentos)
    }

    // Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
    private newDepartmentosToAdd(currentList: string[], newList: string[]): string[] {
        return newList.filter(list => !currentList.includes(list))
    }
}