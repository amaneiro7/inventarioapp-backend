import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type DepartmentLevel3Primitives } from "../../IDepartment/domain/entity/DepartmentLevel3"
import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { type CargoRepository } from "./CargoRepository"
import { type CargoPrimitives } from "./Cargo"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { CargoName } from "./CargoName"
import { CargoAlreadyExistError } from "./CargoAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"

export class CreateCargoUseCase {
    constructor(
        private readonly cargoRepository: CargoRepository,
        private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
    ) { }

    public async execute({ name, departments }: Omit<CargoPrimitives, 'id'>): Promise<void> {

        // Se verifica que el cargo no exista
        await this.ensureCargoDoesNotExist(name)

        // Se verifica que los departamentos existan
        await this.ensureDepartmentsExists(departments)
    }

    private async ensureCargoDoesNotExist(name: Primitives<CargoName>): Promise<void> {
        if (await this.cargoRepository.searchByName(name) !== null) {
            throw new CargoAlreadyExistError(name)
        }
    }

    private async ensureDepartmentsExists(departments: Primitives<DepartmentId>[]): Promise<void> {
        for (const departmentId of departments) {
            if (await this.departmentLevel3Repository.searchById(departmentId) === null) {
                throw new DepartmentDoesNotExistError()
            }
        }
    }
}