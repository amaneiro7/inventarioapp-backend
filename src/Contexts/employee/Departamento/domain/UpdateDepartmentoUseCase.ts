import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type CargoRepository } from "../../Cargo/domain/CargoRepository"
import { type DepartmentPrimitives } from "../../IDepartment/IDeparment"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type DepartmentId } from "../../IDepartment/DepartmentId"
import { type DepartmentName } from "../../IDepartment/DepartmentName"
import { type CargoId } from "../../Cargo/domain/CargoId"
import { type CentroCostoRepository } from "../../CentroCosto/domain/CentroCostoRepository"
import { Departmento, type DepartmentoPrimitives } from "./Departmento"
import { type CodCentroCosto } from "../../CentroCosto/domain/CodCentroCosto"
import { DepartmentAlreadyExistError } from "../../IDepartment/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { CargoDoesNotExistError } from "../../Cargo/domain/CargoDoesNotExistError"
import { CentroCostoDoesNotExistError } from "../../CentroCosto/domain/CentroCostoDoesNotExistError"

export class UpdateDepartmentoUseCase {
    constructor(
        private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
        private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<DepartmentPrimitives>,
        private readonly centroCostoRepository: CentroCostoRepository,
        private readonly cargoRepository: CargoRepository,
    ) { }

    public async execute({ params: { name, vicepresidenciaEjecutivaId, centroCostoId, cargos }, entity }: { entity: Departmento, params: Partial<Omit<DepartmentoPrimitives, 'id'>> }): Promise<void> {
        // Se verifica que la vicepresidencia exista
        await this.ensureVicepresidenciaEjecutivaExists({ vicepresidenciaEjecutivaId, entity })

        // Se verifica que el centro de costo exista
        await this.ensureCentroCostoExists({ centroCostoId, entity })

        // Se verifica que el departamento no exista para no duplicar
        await this.ensureDepartmentoDoesNotExist({ name, entity })

        // Se verifica que los cargos existan
        await this.ensureCargoExists({ cargos, entity })
    }

    private async ensureDepartmentoDoesNotExist({ name, entity }: { name?: Primitives<DepartmentName>, entity: Departmento }): Promise<void> {
        if (!name) return

        if (entity.nameValue === name) return

        if (await this.departmentoRepository.searchByName(name) !== null) {
            throw new DepartmentAlreadyExistError('La gerencia, coordinación o departamento')
        }
        entity.updateName(name)

    }

    private async ensureVicepresidenciaEjecutivaExists({ entity, vicepresidenciaEjecutivaId }: { vicepresidenciaEjecutivaId?: Primitives<DepartmentId>, entity: Departmento }): Promise<void> {
        if (!vicepresidenciaEjecutivaId) return

        if (entity.vicepresidenciaEjecutivaValue === vicepresidenciaEjecutivaId) return

        if (await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId) === null) {
            throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
        }
        entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
    }
    private async ensureCentroCostoExists({ entity, centroCostoId }: { centroCostoId?: Primitives<CodCentroCosto>, entity: Departmento }): Promise<void> {
        if (!centroCostoId) return

        if (entity.centroCostoValue === centroCostoId) return

        if (await this.centroCostoRepository.searchById(centroCostoId) === null) {
            throw new CentroCostoDoesNotExistError()
        }
        entity.updateCodCentroCosto(centroCostoId)
    }

    private async ensureCargoExists({ entity, cargos }: { cargos?: Primitives<CargoId>[], entity: Departmento }): Promise<void> {
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
            if (await this.cargoRepository.searchById(cargoId) === null) {
                throw new CargoDoesNotExistError()
            }
        }
        entity.updateCargos(cargos)
    }

    // Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
    private newCargosToAdd(currentList: string[], newList: string[]): string[] {
        return newList.filter(list => !currentList.includes(list))
    }
}