import { Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { CargoId } from "../../../Cargo/domain/CargoId"
import { CodCentroCosto } from "../../../CentroCosto/domain/CodCentroCosto"
import { DepartmentId } from "../../../IDepartment/DepartmentId"
import { EmployeeCedula } from "../EmployeeCedula"
import { EmployeeEmail } from "../EmployeeEmail"
import { EmployeeId } from "../EmployeeId"
import { EmployeeIsGeneric } from "../EmployeeIsGeneric"
import { EmployeeIsWorking } from "../EmployeeIsWorking"
import { EmployeeLastName } from "../EmployeeLastName"
import { EmployeeName } from "../EmployeeName"
import { EmployeeNationality } from "../EmployeeNationality"
import { EmployeeUserName } from "../EmployeeUsername"
import { Extension } from "../Extension"
import { PhoneNumber } from "../PhoneNumber"
import { EmployeeCode } from "../valueObject/EmployeCode"
import { EmployeeLocation } from "../valueObject/EmployeeLocation"
import { Employee, type EmployeePrimitives } from "./Employee"

export interface RegularEmployeePrimitives extends EmployeePrimitives {
    name: Primitives<EmployeeName>,
    lastName: Primitives<EmployeeLastName>,
    email: Primitives<EmployeeEmail>,
    isWorking: Primitives<EmployeeIsWorking>,
    employeeCode: Primitives<EmployeeCode>,
    nationality: Primitives<EmployeeNationality>,
    cedula: Primitives<EmployeeCedula>,
    codCentroCosto: Primitives<CodCentroCosto>,
    locationId: Primitives<EmployeeLocation>,
    departmentoId: Primitives<DepartmentId>,
    cargoId: Primitives<CargoId>,
    extension: Primitives<Extension>[],
    phone: Primitives<PhoneNumber>[],
}

export class RegularEmployee extends Employee {
    constructor(
        id: EmployeeId,
        username: EmployeeUserName,
        isGeneric: EmployeeIsGeneric,
        private name: EmployeeName,
        private lastName: EmployeeLastName,
        private email: EmployeeEmail,
        private isWorking: EmployeeIsWorking,
        private readonly employeeCode: EmployeeCode,
        private readonly nationality: EmployeeNationality,
        private readonly cedula: EmployeeCedula,
        private codCentroCosto: CodCentroCosto,
        private locationId: EmployeeLocation,
        private departmentoId: DepartmentId,
        private cargoId: CargoId,
        private extension: Extension[],
        private phone: PhoneNumber[]
    ) {
        super(id, username, isGeneric)
        this.ensureGenericIsFalse()
    }

    private ensureGenericIsFalse(): void {
        if (this.isGenericValue === true) {
            throw new Error("Regular empployee must have generic property set to false")
        }
    }

    get nameValue(): Primitives<EmployeeName> {
        return this.name.value
    }
    get lastNameValue(): Primitives<EmployeeLastName> {
        return this.lastName.value
    }
    get emailValue(): Primitives<EmployeeEmail> {
        return this.email.value
    }
    get isWorkingValue(): Primitives<EmployeeIsWorking> {
        return this.isWorking.value
    }
    get employeeCodeValue(): Primitives<EmployeeCode> {
        return this.employeeCode.value
    }
    get nationalityValue(): Primitives<EmployeeNationality> {
        return this.nationality.value
    }
    get cedulaValue(): Primitives<EmployeeCedula> {
        return this.cedula.value
    }
    get codCentroCostoValue(): Primitives<CodCentroCosto> {
        return this.codCentroCosto.value
    }
    get locationIdValue(): Primitives<EmployeeLocation> {
        return this.locationId.value
    }
    get departmentoIdValue(): Primitives<DepartmentId> {
        return this.departmentoId.value
    }
    get cargoIdValue(): Primitives<CargoId> {
        return this.cargoId.value
    }
    get extensionValue(): Primitives<Extension>[] {
        return this.extension.map(extension => extension.value)
    }
    get phoneValue(): Primitives<PhoneNumber>[] {
        return this.phone.map(phone => phone.value)
    }

    updateName(newName: Primitives<EmployeeName>): void {
        this.name = new EmployeeName(newName)
    }
    updateLastName(newLastName: Primitives<EmployeeLastName>): void {
        this.lastName = new EmployeeLastName(newLastName)
    }
    updateEmail(newEmail: Primitives<EmployeeEmail>): void {
        this.email = new EmployeeEmail(newEmail)
    }
    updateIsWorking(newIsWorking: Primitives<EmployeeIsWorking>): void {
        this.isWorking = new EmployeeIsWorking(newIsWorking)
    }
    updateCodCentroCosto(newCodCentroCosto: Primitives<CodCentroCosto>): void {
        this.codCentroCosto = new CodCentroCosto(newCodCentroCosto)
    }
    updateLocationId(newLocationId: Primitives<EmployeeLocation>): void {
        this.locationId = new EmployeeLocation(newLocationId)
    }
    updateDepartmentoId(newDepartmentoId: Primitives<DepartmentId>): void {
        this.departmentoId = new DepartmentId(newDepartmentoId)
    }
    updateCargoId(newCargoId: Primitives<CargoId>): void {
        this.cargoId = new CargoId(newCargoId)
    }
    updateExtension(extensionIds: Primitives<Extension>[]): void {
        this.extension = extensionIds.map(extension => new Extension(extension))
    }
    updatePhone(phoneIds: Primitives<PhoneNumber>[]): void {
        this.phone = phoneIds.map(phone => new PhoneNumber(phone))
    }
}