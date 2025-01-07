import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { DepartmentId } from "../value-object/DepartmentId"
import { DepartmentName } from "../value-object/DepartmentName"
import { IDepartment, type DepartmentPrimitives } from "./IDeparment"

/**
 * Esta clase es el segundo nivel del organigrama laboral
 */
export type DepartmentLevel2Primitives = DepartmentPrimitives & {
    departmentLevel1Id: Primitives<DepartmentId>
}

export class DepartmentLevel2 extends IDepartment {
    constructor(
        id: DepartmentId,
        name: DepartmentName,
        private departmentLevel1Id: DepartmentId
    ) {
        super(id, name)
    }

    static create(params: Omit<DepartmentLevel2Primitives, 'id'>): DepartmentLevel2 {
        const id = DepartmentId.random().value
        return new DepartmentLevel2(
            new DepartmentId(id),
            new DepartmentName(params.name),
            new DepartmentId(params.departmentLevel1Id)
        )
    }

    static fromPrimitives(primitives: DepartmentLevel2Primitives): DepartmentLevel2 {
        return new DepartmentLevel2(
            new DepartmentId(primitives.id),
            new DepartmentName(primitives.name),
            new DepartmentId(primitives.departmentLevel1Id)
        )
    }

    toPrimitive(): DepartmentLevel2Primitives {
        return {
            id: this.idValue,
            name: this.nameValue,
            departmentLevel1Id: this.idDepartmentLevel1Value
        }
    }

    get idDepartmentLevel1Value(): Primitives<DepartmentId> {
        return this.departmentLevel1Id.value
    }


    updateDepartment1(newDepartmentLevel1Id: Primitives<DepartmentId>): void {
        this.departmentLevel1Id = new DepartmentId(newDepartmentLevel1Id)
    }
}