import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type DepartmentPrimitives, IDepartment } from "../../IDepartment/IDeparment"
import { CargoId } from "../../Cargo/domain/CargoId"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { DepartmentName } from "../../IDepartment/DepartmentName"
import { CodCentroCosto } from "../../CentroCosto/domain/CodCentroCosto"

/**
 * Esta clase es el tercer nivel que es el ultimo del organigrama laboral
 */
export type DepartmentoPrimitives = DepartmentPrimitives & {
    vicepresidenciaEjecutivaId: Primitives<DepartmentId>
    centroCostoId: Primitives<CodCentroCosto>
    cargos: Primitives<CargoId>[]
}

export class Departmento extends IDepartment {

    constructor(
        id: DepartmentId,
        name: DepartmentName,
        private vicepresidenciaEjecutivaId: DepartmentId,
        private centroCostoId: CodCentroCosto,
        private cargos: CargoId[]
    ) {
        super(id, name)
    }

    static create(params: Omit<DepartmentoPrimitives, 'id'>): Departmento {
        const id = DepartmentId.random().value
        const cargos = params.cargos.map(cargo => new CargoId(cargo))
        return new Departmento(
            new DepartmentId(id),
            new DepartmentName(params.name),
            new DepartmentId(params.vicepresidenciaEjecutivaId),
            new CodCentroCosto(params.centroCostoId),
            cargos
        )
    }

    static fromPrimitives(primitives: DepartmentoPrimitives): Departmento {
        return new Departmento(
            new DepartmentId(primitives.id),
            new DepartmentName(primitives.name),
            new DepartmentId(primitives.vicepresidenciaEjecutivaId),
            new CodCentroCosto(primitives.centroCostoId),
            this.addCargoIds(primitives.cargos)
        )
    }

    toPrimitive(): DepartmentoPrimitives {
        return {
            id: this.idValue,
            name: this.nameValue,
            vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue,
            centroCostoId: this.centroCostoValue,
            cargos: this.CargosValue
        }
    }

    get vicepresidenciaEjecutivaValue(): Primitives<DepartmentId> {
        return this.vicepresidenciaEjecutivaId.value
    }

    get centroCostoValue(): Primitives<CodCentroCosto> {
        return this.centroCostoId.value
    }

    get CargosValue(): Primitives<CargoId>[] {
        return this.cargos.map(cargo => cargo.value)
    }

    private static addCargoIds(cargoId: Primitives<CargoId>[]): CargoId[] {
        return cargoId.map(cargo => new CargoId(cargo))
    }

    updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: Primitives<DepartmentId>): void {
        this.vicepresidenciaEjecutivaId = new DepartmentId(vicepresidenciaEjecutivaId)
    }
    updateCodCentroCosto(codCentroCosto: Primitives<CodCentroCosto>): void {
        this.centroCostoId = new CodCentroCosto(codCentroCosto)
    }

    updateCargos(cargoIds: Primitives<CargoId>[]): void {
        this.cargos = cargoIds.map(cargo => new CargoId(cargo))
    }
}