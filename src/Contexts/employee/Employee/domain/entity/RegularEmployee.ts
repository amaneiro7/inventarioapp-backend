import { Primitives } from "../../../../Shared/domain/value-object/Primitives";
import { EmployeeCedula } from "../EmployeeCedula";
import { EmployeeEmail } from "../EmployeeEmail";
import { EmployeeId } from "../EmployeeId";
import { EmployeeIsGeneric } from "../EmployeeIsGeneric";
import { EmployeeIsWorking } from "../EmployeeIsWorking";
import { EmployeeLastName } from "../EmployeeLastName";
import { EmployeeName } from "../EmployeeName";
import { EmployeeNationality } from "../EmployeeNationality";
import { EmployeeUserName } from "../EmployeeUsername";
import { Extension } from "../Extension";
import { PhoneNumber } from "../PhoneNumber";
import { EmployeeCode } from "../valueObject/EmployeCode";
import { Employee } from "./Employee";

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
        private codCentroCosto: string,
        private locationId: string,
        private departmentId: string,
        private cargoId: string,
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
    get codCentroCostoValue(): Primitives<EmployeeUserName> {
        return this.codCentroCosto.value
    }
    get locationIdValue(): Primitives<EmployeeUserName> {
        return this.locationId.value
    }
    get departmentIdValue(): Primitives<EmployeeUserName> {
        return this.departmentId.value
    }
    get cargoIdValue(): Primitives<EmployeeUserName> {
        return this.cargoId.value
    }
    get extensionValue(): Primitives<Extension[]> {
        return this.extension
    }
    get phoneValue(): Primitives<PhoneNumber[]> {
        return this.phone
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
    updateCodCentroCosto(newCodCentroCosto: Primitives<EmployeeUserName>): void {
        this.codCentroCosto = new EmployeeUserName(newCodCentroCosto)
    }
    updateLocationId(newLocationId: Primitives<EmployeeUserName>): void {
        this.locationId = new EmployeeUserName(newLocationId)
    }
    updateDepartmentId(newDepartmentId: Primitives<EmployeeUserName>): void {
        this.departmentId = new EmployeeUserName(newDepartmentId)
    }
    updateCargoId(newCargoId: Primitives<EmployeeUserName>): void {
        this.cargoId = new EmployeeUserName(newCargoId)
    }
    updateExtension(newExtension: Primitives<Extension>): void {
        this.extension = new Extension(newExtension)
    }
    updatePhone(newPhone: Primitives<PhoneNumber>): void {
        this.phone = new PhoneNumber(newPhone)
    }
}