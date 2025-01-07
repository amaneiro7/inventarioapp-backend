import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { DepartmentId } from "../value-object/DepartmentId"
import { DepartmentName } from "../value-object/DepartmentName"

/**
 * Esta clase se usa como fabrica para crear otras clases
 * que heredan de ella * 
 */

export interface DepartmentPrimitives {
    id: Primitives<DepartmentId>
    name: Primitives<DepartmentName>
}

export class IDepartment {
    constructor(
        private readonly id: DepartmentId,
        private name: DepartmentName,
    ) { }

    static create(params: Omit<DepartmentPrimitives, 'id'>): IDepartment {
        const id = DepartmentId.random().value
        return new IDepartment(
            new DepartmentId(id),
            new DepartmentName(params.name),
        )
    }

    static fromPrimitives(primitives: DepartmentPrimitives): IDepartment {
        return new IDepartment(
            new DepartmentId(primitives.id),
            new DepartmentName(primitives.name)
        )
    }

    toPrimitive(): DepartmentPrimitives {
        return {
            id: this.idValue,
            name: this.nameValue
        }
    }

    get idValue(): Primitives<DepartmentId> {
        return this.id.value
    }

    get nameValue(): Primitives<DepartmentName> {
        return this.name.value
    }

    updateName(name: Primitives<DepartmentName>): void {
        this.name = new DepartmentName(name)
    }
}