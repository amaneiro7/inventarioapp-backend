import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { Cargo } from "../../../Cargo/domain/Cargo"
import { DepartmentId } from "../value-object/DepartmentId"
import { DepartmentName } from "../value-object/DepartmentName"
import { IDepartment, type DepartmentPrimitives } from "./IDeparment"

/**
 * Esta clase es el tercer nivel que es el ultimo del organigrama laboral
 */
export type DepartmentLevel3Primitives = DepartmentPrimitives & {
    departmentLevel2Id: Primitives<DepartmentId>
}

export class DepartmentLevel3 extends IDepartment {
    cargos: Cargo[]
    constructor(
        id: DepartmentId,
        name: DepartmentName,
        private departmentLevel2Id: DepartmentId
    ) {
        super(id, name)
        this.cargos = []
    }

    static create(params: Omit<DepartmentLevel3Primitives, 'id'>): DepartmentLevel3 {
        const id = DepartmentId.random().value
        return new DepartmentLevel3(
            new DepartmentId(id),
            new DepartmentName(params.name),
            new DepartmentId(params.departmentLevel2Id)
        )
    }

    static fromPrimitives(primitives: DepartmentLevel3Primitives): DepartmentLevel3 {
        return new DepartmentLevel3(
            new DepartmentId(primitives.id),
            new DepartmentName(primitives.name),
            new DepartmentId(primitives.departmentLevel2Id)
        )
    }

    toPrimitive(): DepartmentLevel3Primitives {
        return {
            id: this.idValue,
            name: this.nameValue,
            departmentLevel2Id: this.idDepartmentLevel2IdValue
        }
    }

    get idDepartmentLevel2IdValue(): Primitives<DepartmentId> {
        return this.departmentLevel2Id.value
    }


    updateDepartmentLevel2Id(newdepartmentLevel2Id: Primitives<DepartmentId>): void {
        this.departmentLevel2Id = new DepartmentId(newdepartmentLevel2Id)
    }
}