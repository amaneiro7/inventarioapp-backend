import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type EmployeePrimitives, Employee } from "./Employee"
import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError"
import { CargoId } from "../../../Cargo/domain/CargoId"
import { CodCentroCosto } from "../../../CentroCosto/domain/CodCentroCosto"
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
import { Password } from "./Password"
import { CentroTrabajoId } from "../../../CentroTrabajo/domain/CentroTrabajoId"

export interface ServiceEmployeePrimitives extends EmployeePrimitives {
    id: Primitives<EmployeeId>,
    username: Primitives<EmployeeUserName>,
    type: EmployeeTypes.SERVICE
    name: Primitives<EmployeeName>,
    lastName: Primitives<EmployeeLastName>
    email: Primitives<EmployeeEmail>
    isStillWorking: Primitives<EmployeeIsStillWorking>
    employeeCode: Primitives<EmployeeCode>
    nationality: Primitives<EmployeeNationality>
    cedula: Primitives<EmployeeCedula>
    centroTrabajoId: Primitives<CodCentroCosto>
    locationId: Primitives<EmployeeLocationId>
    departamentoId: Primitives<DepartmentId>
    cargoId: Primitives<CargoId>
    extension: Primitives<Extension>[]
    phone: Primitives<PhoneNumber>[]
}

export class ServiceEmployee extends Employee {

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
        phone: PhoneNumber[],
        password: Password,
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
        this.ensureTypeIsService()

    }

    private ensureTypeIsService(): void {
        if (this.typeValue !== EmployeeTypes.SERVICE) {
            throw new InvalidArgumentError('Un empleado Service solo puede tener el tipo Service')
        }
    }
    static create(params: Omit<ServiceEmployeePrimitives, 'id'>): ServiceEmployee {
        const id = EmployeeId.random().value
        const password = Password.defaultPassword
        return new ServiceEmployee(
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
            new Password(password),
        )
    }

}