import { type Nullable } from "../../../../Shared/domain/Nullable"
import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
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

export type EmployeePrimitives = {
  id: Primitives<EmployeeId>,
  userName: Primitives<EmployeeUserName>,
  type: Primitives<EmployeeType>
  name: Nullable<Primitives<EmployeeName>>
  lastName: Nullable<Primitives<EmployeeLastName>>
  email: Nullable<Primitives<EmployeeEmail>>
  isStillWorking: Primitives<EmployeeIsStillWorking>
  employeeCode: Nullable<Primitives<EmployeeCode>>
  nationality: Nullable<Primitives<EmployeeNationality>>
  cedula: Nullable<Primitives<EmployeeCedula>>
  codCentroCosto: Nullable<Primitives<CodCentroCosto>>
  locationId: Nullable<Primitives<EmployeeLocationId>>
  departmentoId: Nullable<Primitives<DepartmentId>>
  cargoId: Nullable<Primitives<CargoId>>
  extension: Primitives<Extension>[]
  phone: Primitives<PhoneNumber>[]
}
export class Employee {
  constructor(
    private readonly id: EmployeeId,
    private userName: EmployeeUserName,
    private type: EmployeeType,
    private name: Nullable<EmployeeName>,
    private lastName: Nullable<EmployeeLastName>,
    private email: Nullable<EmployeeEmail>,
    private isStillWorking: EmployeeIsStillWorking,
    private readonly employeeCode: Nullable<EmployeeCode>,
    private readonly nationality: Nullable<EmployeeNationality>,
    private readonly cedula: Nullable<EmployeeCedula>,
    private codCentroCosto: Nullable<CodCentroCosto>,
    private locationId: Nullable<EmployeeLocationId>,
    private departmentoId: Nullable<DepartmentId>,
    private cargoId: Nullable<CargoId>,
    private extension: Extension[],
    private phone: PhoneNumber[]
  ) { }

  static create(params: Omit<EmployeePrimitives, 'id'>): Employee {
    const id = EmployeeId.random().value
    return new Employee(
      new EmployeeId(id),
      new EmployeeUserName(params.userName),
      new EmployeeType(params.type),
      params?.name ? new EmployeeName(params.name) : null,
      params?.lastName ? new EmployeeLastName(params.lastName) : null,
      params?.email ? new EmployeeEmail(params.email) : null,
      new EmployeeIsStillWorking(params.isStillWorking),
      params?.employeeCode ? new EmployeeCode(params.employeeCode) : null,
      params?.nationality ? new EmployeeNationality(params.nationality) : null,
      params?.cedula ? new EmployeeCedula(params.cedula) : null,
      params?.codCentroCosto ? new CodCentroCosto(params.codCentroCosto) : null,
      params?.locationId ? new EmployeeLocationId(params.locationId) : null,
      params?.departmentoId ? new DepartmentId(params.departmentoId) : null,
      params?.cargoId ? new CargoId(params.cargoId) : null,
      params?.extension ? params.extension.map(ext => new Extension(ext)) : [],
      params?.phone ? params.phone.map(phone => new PhoneNumber(phone)) : [],
    )
  }
  static fromPrimitives(primitives: EmployeePrimitives): Employee {
    return new Employee(
      new EmployeeId(primitives.id),
      new EmployeeUserName(primitives.userName),
      new EmployeeType(primitives.type),
      primitives?.name ? new EmployeeName(primitives.name) : null,
      primitives?.lastName ? new EmployeeLastName(primitives.lastName) : null,
      primitives?.email ? new EmployeeEmail(primitives.email) : null,
      new EmployeeIsStillWorking(primitives.isStillWorking),
      primitives?.employeeCode ? new EmployeeCode(primitives.employeeCode) : null,
      primitives?.nationality ? new EmployeeNationality(primitives.nationality) : null,
      primitives?.cedula ? new EmployeeCedula(primitives.cedula) : null,
      primitives?.codCentroCosto ? new CodCentroCosto(primitives.codCentroCosto) : null,
      primitives?.locationId ? new EmployeeLocationId(primitives.locationId) : null,
      primitives?.departmentoId ? new DepartmentId(primitives.departmentoId) : null,
      primitives?.cargoId ? new CargoId(primitives.cargoId) : null,
      primitives?.extension ? primitives.extension.map(ext => new Extension(ext)) : [],
      primitives?.phone ? primitives.phone.map(phone => new PhoneNumber(phone)) : [],
    )
  }

  toPrimitive(): EmployeePrimitives {
    return {
      id: this.idValue,
      userName: this.userNameValue,
      type: this.typeValue,
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

  get userNameValue(): Primitives<EmployeeUserName> {
    return this.userName.value
  }
  get typeValue(): Primitives<EmployeeType> {
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
  get locationIdValue(): Nullable<Primitives<EmployeeLocationId>> {
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
  updateLocationId(newLocationId: Primitives<EmployeeLocationId>): void {
    this.locationId = new EmployeeLocationId(newLocationId)
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
  updateUserName(newUserName: Primitives<EmployeeUserName>): void {
    this.userName = new EmployeeUserName(newUserName)
  }
}