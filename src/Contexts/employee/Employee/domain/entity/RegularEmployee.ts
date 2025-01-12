import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type EmployeePrimitives, Employee } from "./Employee"
import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError"
import { CargoId } from "../../../Cargo/domain/CargoId"
import { DepartmentId } from "../../../IDepartment/DepartmentId"
import { EmployeeCedula } from "../valueObject/EmployeeCedula"
import { EmployeeEmail } from "../valueObject/EmployeeEmail"
import { EmployeeId } from "../valueObject/EmployeeId"
import { EmployeeIsStillWorking } from "../valueObject/EmployeeIsStillWorking"
import { EmployeeLastName } from "../valueObject/EmployeeLastName"
import { EmployeeName } from "../valueObject/EmployeeName"
import { EmployeeNationality } from "../valueObject/EmployeeNationality"
import { EmployeeType, EmployeeTypes } from "../valueObject/EmployeeType"
import { EmployeeUserName } from "../valueObject/EmployeeUsername"
import { Extension } from "../valueObject/Extension"
import { PhoneNumber } from "../valueObject/PhoneNumber"
import { EmployeeCode } from "../valueObject/EmployeCode"
import { EmployeeLocationId } from "../valueObject/EmployeeLocation"
import { CentroTrabajoId } from "../../../CentroTrabajo/domain/CentroTrabajoId"

export interface RegularEmployeePrimitives extends EmployeePrimitives {
    id: Primitives<EmployeeId>,
    username: Primitives<EmployeeUserName>,
    type: EmployeeTypes.REGULAR
    name: Primitives<EmployeeName>,
    lastName: Primitives<EmployeeLastName>
    email: Primitives<EmployeeEmail>
    isStillWorking: Primitives<EmployeeIsStillWorking>
    employeeCode: Primitives<EmployeeCode>
    nationality: Primitives<EmployeeNationality>
    cedula: Primitives<EmployeeCedula>
    centroTrabajoId: Primitives<CentroTrabajoId>
    locationId: Primitives<EmployeeLocationId>
    departamentoId: Primitives<DepartmentId>
    cargoId: Primitives<CargoId>
    extension: Primitives<Extension>[]
    phone: Primitives<PhoneNumber>[]
}

export class RegularEmployee extends Employee {

    constructor(
        id: EmployeeId,
        username: EmployeeUserName,
        type: EmployeeType,
        name: EmployeeName,
        lastName: EmployeeLastName,
        email: EmployeeEmail,
        isStillWorking: EmployeeIsStillWorking,
        employeeCode: EmployeeCode,
        nationality: EmployeeNationality,
        cedula: EmployeeCedula,
        centroTrabajoId: CentroTrabajoId,
        locationId: EmployeeLocationId,
        departamentoId: DepartmentId,
        cargoId: CargoId,
        extension: Extension[],
        phone: PhoneNumber[]
    ) {
        super(
            id,
            username,
            type,
            name,
            lastName,
            email,
            isStillWorking,
            employeeCode,
            nationality,
            cedula,
            centroTrabajoId,
            locationId,
            departamentoId,
            cargoId,
            extension,
            phone,
        )
        this.ensureTypeIsRegular()

    }

    private ensureTypeIsRegular(): void {
        if (this.typeValue !== EmployeeTypes.REGULAR) {
            throw new InvalidArgumentError('Un empleado regular solo puede tener el tipo REGULAR')
        }
    }
    static create(params: Omit<RegularEmployeePrimitives, 'id'>): RegularEmployee {
        const id = EmployeeId.random().value
        return new RegularEmployee(
            new EmployeeId(id),
            new EmployeeUserName(params.username),
            new EmployeeType(params.type),
            new EmployeeName(params.name),
            new EmployeeLastName(params.lastName),
            new EmployeeEmail(params.email),
            new EmployeeIsStillWorking(params.isStillWorking),
            new EmployeeCode(params.employeeCode),
            new EmployeeNationality(params.nationality),
            new EmployeeCedula(params.cedula),
            new CentroTrabajoId(params.centroTrabajoId),
            new EmployeeLocationId(params.locationId),
            new DepartmentId(params.departamentoId),
            new CargoId(params.cargoId),
            params.extension?.map(ext => new Extension(ext)),
            params.phone?.map(phone => new PhoneNumber(phone)),
        )
    }

}