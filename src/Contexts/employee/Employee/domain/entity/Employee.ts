import { type Nullable } from "../../../../Shared/domain/Nullable"
import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError"
import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { CargoId } from "../../../Cargo/domain/CargoId"
import { CodCentroCosto } from "../../../CentroCosto/domain/CodCentroCosto"
import { DepartmentId } from "../../../IDepartment/DepartmentId"
import { EmployeeCedula } from "../EmployeeCedula"
import { EmployeeEmail } from "../EmployeeEmail"
import { EmployeeId } from "../EmployeeId"
import { EmployeeIsStillWorking } from "../EmployeeIsStillWorking"
import { EmployeeLastName } from "../EmployeeLastName"
import { EmployeeName } from "../EmployeeName"
import { EmployeeNationality } from "../EmployeeNationality"
import { EmployeeType, EmployeeTypes } from "../EmployeeType"
import { EmployeeUserName } from "../EmployeeUsername"
import { Extension } from "../Extension"
import { PhoneNumber } from "../PhoneNumber"
import { EmployeeCode } from "../valueObject/EmployeCode"
import { EmployeeLocation } from "../valueObject/EmployeeLocation"

export type EmployeePrimitives = {
  id: Primitives<EmployeeId>,
  username: Primitives<EmployeeUserName>
  type: Primitives<EmployeeType>
  name: Nullable<Primitives<EmployeeName>>
  lastName: Nullable<Primitives<EmployeeLastName>>
  email: Nullable<Primitives<EmployeeEmail>>
  isStillWorking: Primitives<EmployeeIsStillWorking>
  employeeCode: Nullable<Primitives<EmployeeCode>>
  nationality: Nullable<Primitives<EmployeeNationality>>
  cedula: Nullable<Primitives<EmployeeCedula>>
  codCentroCosto: Nullable<Primitives<CodCentroCosto>>
  locationId: Nullable<Primitives<EmployeeLocation>>
  departmentoId: Nullable<Primitives<DepartmentId>>
  cargoId: Nullable<Primitives<CargoId>>
  extension: Primitives<Extension>[]
  phone: Primitives<PhoneNumber>[]
}
export interface GenericEmployeePrimitives extends EmployeePrimitives {
  id: Primitives<EmployeeId>,
  username: Primitives<EmployeeUserName>
  type: EmployeeTypes.GENERIC
  name: null
  lastName: null
  email: null
  employeeCode: null
  nationality: null
  cedula: null
  codCentroCosto: null
  locationId: null
  departmentoId: null
  cargoId: null
  extension: []
  phone: []
}

export class Employee {
  constructor(
    private readonly id: EmployeeId,
    private username: EmployeeUserName,
    private type: EmployeeType,
    private name: Nullable<EmployeeName>,
    private lastName: Nullable<EmployeeLastName>,
    private email: Nullable<EmployeeEmail>,
    private isStillWorking: EmployeeIsStillWorking,
    private readonly employeeCode: Nullable<EmployeeCode>,
    private readonly nationality: Nullable<EmployeeNationality>,
    private readonly cedula: Nullable<EmployeeCedula>,
    private codCentroCosto: Nullable<CodCentroCosto>,
    private locationId: Nullable<EmployeeLocation>,
    private departmentoId: Nullable<DepartmentId>,
    private cargoId: Nullable<CargoId>,
    private extension: Extension[],
    private phone: PhoneNumber[]
  ) { }

  // static create(params: Omit<EmployeePrimitives, 'id'>): Employee {
  //   const id = EmployeeId.random().value
  //   return new Employee(
  //     new EmployeeId(id),
  //     new EmployeeUserName(params.username),
  //     new EmployeeType(params.type),
  //     new EmployeeName(params.name),
  //     new EmployeeLastName(params.lastName),
  //     new EmployeeEmail(params.email),
  //     new EmployeeIsStillWorking(params.isEmployed),
  //     new EmployeeCode(params.employeeCode),
  //     new EmployeeNationality(params.nationality),
  //     new EmployeeCedula(params.cedula),
  //     new CodCentroCosto(params.codCentroCosto),
  //     new EmployeeLocation(params.locationId),
  //     new DepartmentId(params.departmentoId),
  //     new CargoId(params.cargoId),
  //     params.extension?.map(ext => new Extension(ext)),
  //     params.phone?.map(phone => new PhoneNumber(phone)),
  //   )
  // }


  // static fromPrimitives(primitives: EmployeePrimitives): Employee {
  //   return new Employee(
  //     new EmployeeId(primitives.id),
  //     new EmployeeUserName(primitives.username),
  //     new EmployeeType(primitives.type),
  //     new EmployeeName(primitives.name),
  //     new EmployeeLastName(primitives.lastName),
  //     new EmployeeEmail(primitives.email),
  //     new EmployeeIsStillWorking(primitives.isEmployed),
  //     new EmployeeCode(primitives.employeeCode),
  //     new EmployeeNationality(primitives.nationality),
  //     new EmployeeCedula(primitives.cedula),
  //     new CodCentroCosto(primitives.codCentroCosto),
  //     new EmployeeLocation(primitives.locationId),
  //     new DepartmentId(primitives.departmentoId),
  //     new CargoId(primitives.cargoId),
  //     new Extension(primitives.extension),
  //     new PhoneNumber(primitives.phone),
  //   )
  // }

  toPrimitive(): EmployeePrimitives {
    return {
      id: this.idValue,
      username: this.usernameValue,
      type: EmployeeTypes.GENERIC,
      name: this.nameValue,
      lastName: this.lastNameValue,
      email: this.emailValue,
      isStillWorking: this.isStillWorkingValue,
      employeeCode: this.employeeCodeValue,
      nationality: this.nationalityValue,
      cedula: this.cedulaValue,
      codCentroCosto: this.codCentroCostoValue,
      locationId: this.locationIdValue,
      departmentoId: this.departmentoIdValue,
      cargoId: this.cargoIdValue,
      extension: this.extensionValue,
      phone: this.phoneValue
    }
  }

  get idValue(): Primitives<EmployeeId> {
    return this.id.value
  }

  get usernameValue(): Primitives<EmployeeUserName> {
    return this.username.value
  }
  get isTypeValue(): Primitives<EmployeeType> {
    return this.type.value
  }

  get nameValue(): Nullable<Primitives<EmployeeName>> {
    return this.name?.value ?? null
  }
  get lastNameValue(): Nullable<Primitives<EmployeeLastName>> {
    return this.lastName?.value ?? null
  }
  get emailValue(): Nullable<Primitives<EmployeeEmail>> {
    return this.email?.value ?? null
  }
  get isStillWorkingValue(): Primitives<EmployeeIsStillWorking> {
    return this.isStillWorking.value
  }
  get employeeCodeValue(): Nullable<Primitives<EmployeeCode>> {
    return this.employeeCode?.value ?? null
  }
  get nationalityValue(): Nullable<Primitives<EmployeeNationality>> {
    return this.nationality?.value ?? null
  }
  get cedulaValue(): Nullable<Primitives<EmployeeCedula>> {
    return this.cedula?.value ?? null
  }
  get codCentroCostoValue(): Nullable<Primitives<CodCentroCosto>> {
    return this.codCentroCosto?.value ?? null
  }
  get locationIdValue(): Nullable<Primitives<EmployeeLocation>> {
    return this.locationId?.value ?? null
  }
  get departmentoIdValue(): Nullable<Primitives<DepartmentId>> {
    return this.departmentoId?.value ?? null
  }
  get cargoIdValue(): Nullable<Primitives<CargoId>> {
    return this.cargoId?.value ?? null
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

  updateType(type: EmployeeTypes): void {
    const notAllowedTypes = [EmployeeTypes.GENERIC]
    if (notAllowedTypes.includes(type)) {
      throw new InvalidArgumentError(`Type ${type} is not allowed for update.`)
    }
    this.type = new EmployeeType(type)
  }
  updateEmail(newEmail: Primitives<EmployeeEmail>): void {
    this.email = new EmployeeEmail(newEmail)
  }
  updateIsStillWorking(newIsStillWorking: Primitives<EmployeeIsStillWorking>): void {
    this.isStillWorking = new EmployeeIsStillWorking(newIsStillWorking)
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
  updateUsername(newUsername: Primitives<EmployeeUserName>): void {
    this.username = new EmployeeUserName(newUsername)
  }
}