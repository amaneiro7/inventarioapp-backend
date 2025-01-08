import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { CargoId } from "../../../Cargo/domain/CargoId"
import { DepartmentId } from "../value-object/DepartmentId"
import { DepartmentName } from "../value-object/DepartmentName"
import { IDepartment, type DepartmentPrimitives } from "./IDeparment"

/**
 * Esta clase es el tercer nivel que es el ultimo del organigrama laboral
 */
export type DepartmentLevel3Primitives = DepartmentPrimitives & {
    departmentLevel2Id: Primitives<DepartmentId>
    cargos: Primitives<CargoId>[]
}

export class DepartmentLevel3 extends IDepartment {

    constructor(
        id: DepartmentId,
        name: DepartmentName,
        private departmentLevel2Id: DepartmentId,
        private cargos: CargoId[]
    ) {
        super(id, name)
    }

    static create(params: Omit<DepartmentLevel3Primitives, 'id'>): DepartmentLevel3 {
        const id = DepartmentId.random().value
        const cargos = params.cargos.map(cargo => new CargoId(cargo))
        return new DepartmentLevel3(
            new DepartmentId(id),
            new DepartmentName(params.name),
            new DepartmentId(params.departmentLevel2Id),
            cargos
        )
    }

    static fromPrimitives(primitives: DepartmentLevel3Primitives): DepartmentLevel3 {
        return new DepartmentLevel3(
            new DepartmentId(primitives.id),
            new DepartmentName(primitives.name),
            new DepartmentId(primitives.departmentLevel2Id),
            this.addCargoIds(primitives.cargos)
        )
    }

    toPrimitive(): DepartmentLevel3Primitives {
        return {
            id: this.idValue,
            name: this.nameValue,
            departmentLevel2Id: this.idDepartmentLevel2IdValue,
            cargos: this.CargosValue
        }
    }

    get idDepartmentLevel2IdValue(): Primitives<DepartmentId> {
        return this.departmentLevel2Id.value
    }

    get CargosValue(): Primitives<CargoId>[] {
        return this.cargos.map(cargo => cargo.value)
    }

    private static addCargoIds(cargoId: Primitives<CargoId>[]): CargoId[] {
        return cargoId.map(cargo => new CargoId(cargo))
    }


    updateDepartmentLevel2Id(newdepartmentLevel2Id: Primitives<DepartmentId>): void {
        this.departmentLevel2Id = new DepartmentId(newdepartmentLevel2Id)
    }

    updateCargos(cargoIds: Primitives<CargoId>[]): void {
        this.cargos = cargoIds.map(cargo => new CargoId(cargo))
    }
}