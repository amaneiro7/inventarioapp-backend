import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type CargoRepository } from "./CargoRepository"
import { type CargoPrimitives } from "./Cargo"
import { type DepartmentoPrimitives } from "../../Departamento/domain/Departmento"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { CargoName } from "./CargoName"
import { CargoAlreadyExistError } from "./CargoAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"

export class CreateCargoUseCase {
    constructor(
        private readonly cargoRepository: CargoRepository,
        private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
    ) { }

    public async execute({ name, departmentos }: Omit<CargoPrimitives, 'id'>): Promise<void> {

        // Se verifica que el cargo no exista
        await this.ensureCargoDoesNotExist(name)

        // Se verifica que los departamentos existan
        await this.ensureDepartmentosExists(departmentos)
    }

    private async ensureCargoDoesNotExist(name: Primitives<CargoName>): Promise<void> {
        if (await this.cargoRepository.searchByName(name) !== null) {
            throw new CargoAlreadyExistError(name)
        }
    }

    private async ensureDepartmentosExists(departmentos: Primitives<DepartmentId>[]): Promise<void> {
        for (const departmentId of departmentos) {
            if (await this.departmentoRepository.searchById(departmentId) === null) {
                throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
            }
        }
    }
}