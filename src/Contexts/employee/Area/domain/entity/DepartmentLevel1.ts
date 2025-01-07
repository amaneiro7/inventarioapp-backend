import { IDepartment } from "./IDeparment"
import { type DepartmentId } from "../value-object/DepartmentId"
import { type DepartmentName } from "../value-object/DepartmentName"

/**
 * Esta clase es el nivel mas alto del organigrama laboral
 */
export class DepartmentLevel1 extends IDepartment {
    constructor(
        id: DepartmentId,
        name: DepartmentName,
    ) {
        super(id, name)
    }
}