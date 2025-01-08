import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { type DepartmentLevel3Primitives } from "../entity/DepartmentLevel3"
import { type DepartmentPrimitives } from "../entity/IDeparment"
import { type DepartmentRepository } from "../repository/DepartmentRepository"
import { type DepartmentId } from "../value-object/DepartmentId"
import { type DepartmentName } from "../value-object/DepartmentName"
import { DepartmentAlreadyExistError } from "../value-object/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../value-object/DepartmentDoesNotExistError"
import { CargoId } from "../../../Cargo/domain/CargoId"

export class CreateDepartmentLevel3UseCase {
    constructor(
        private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
        private readonly departmentLevel2Repository: DepartmentRepository<DepartmentPrimitives>,
        private readonly cargoRepository: CargoRepository,
    ) { }

    public async execute({ name, departmentLevel2Id, cargos }: Omit<DepartmentLevel3Primitives, 'id'>): Promise<void> {
        // Se verifica que el departamento 2 exista
        await this.ensureDepartmentLevel2Exists(departmentLevel2Id)

        // Se verifica que el departamento 3 no exista
        await this.ensureDepartmentLevel3DoesNotExist(name)

        // Se verifica que los cargos existan
        await this.ensureCargoExists(cargos)
    }

    private async ensureDepartmentLevel3DoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
        if (await this.departmentLevel3Repository.searchByName(name) !== null) {
            throw new DepartmentAlreadyExistError()
        }
    }

    private async ensureDepartmentLevel2Exists(departmentLevel2Id: Primitives<DepartmentId>): Promise<void> {
        if (await this.departmentLevel2Repository.searchById(departmentLevel2Id) === null) {
            throw new DepartmentDoesNotExistError()
        }
    }

    private async ensureCargoExists(cargos: Primitives<CargoId>[]): Promise<void> {
        for (const cargoId of cargos) {
            if (await this.cargoRepository.searchById(new CargoId(cargoId).value) === null) {
                throw new DepartmentDoesNotExistError()
            }
        }
    }
}