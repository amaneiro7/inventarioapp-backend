import { Employee, type EmployeePrimitives } from "../entity/Employee"
import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type EmployeeRepository } from "../Repository/EmployeeRepository"
import { type LocationRepository } from "../../../../Location/Location/domain/LocationRepository"
import { type DepartmentRepository } from "../../../IDepartment/DepartmentRepository"
import { type CargoId } from "../../../Cargo/domain/CargoId"
import { type CodCentroCosto } from "../../../CentroCosto/domain/CodCentroCosto"
import { type EmployeeLocationId } from "../valueObject/EmployeeLocation"
import { type DepartmentId } from "../../../IDepartment/DepartmentId"
import { type CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { type DepartamentoPrimitives } from "../../../Departamento/domain/Departamento"
import { type EmployeeEmail } from "../valueObject/EmployeeEmail"
import { type EmployeeUserName } from "../valueObject/EmployeeUsername"
import { type Nullable } from "../../../../Shared/domain/Nullable";
import { type CentroTrabajoRepository } from "../../../CentroTrabajo/domain/CentroTrabajoRepository"
import { type FiltersPrimitives } from "../../../../Shared/domain/criteria/Filter";
import { type Extension } from "../valueObject/Extension"
import { type PhoneNumber } from "../valueObject/PhoneNumber"
import { type EmployeeName } from "../valueObject/EmployeeName"
import { type EmployeeLastName } from "../valueObject/EmployeeLastName"
import { EmployeeTypes } from "../valueObject/EmployeeType";
import { Operator } from "../../../../Shared/domain/criteria/FilterOperator"
import { CreateCriteria } from "../../../../Shared/domain/criteria/CreateCriteria"
import { CargoDoesNotExistError } from "../../../Cargo/domain/CargoDoesNotExistError";
import { CentroCostoDoesNotExistError } from "../../../CentroCosto/domain/CentroCostoDoesNotExistError";
import { LocationDoesNotExistError } from "../../../../Location/Location/domain/LocationDoesNotExistError";
import { DepartmentDoesNotExistError } from "../../../IDepartment/DepartmentDoesNotExistError";
import { EmployeeAlreadyExistError } from "../Errors/EmployeeAlreadyExistError"

export class UpdateEmployeeUseCase {
    constructor(
        private readonly employeeRepository: EmployeeRepository,
        private readonly centroTrabajoRepository: CentroTrabajoRepository,
        private readonly locationRepository: LocationRepository,
        private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>,
        private readonly cargoRepository: CargoRepository,

    ) { }

    public async execute({ entity, params }: { params: Partial<Omit<EmployeePrimitives, 'id' | 'employeeCode' | 'cedula' | 'nationality'>>, entity: Employee }): Promise<void> {

        if (EmployeeTypes.GENERIC === entity.typeValue) {
            throw new Error("Los usuarios genericos no se les puede actualizar sus propiedades")
        }
        if (entity.isStillWorkingValue === false) {
            throw new Error("Los usuarios que ya se encuentran desvinculados no se les puede actualizar sus propiedades")
        }

        await this.updateUserNameUseCase({ userName: params?.userName, entity })
        await this.updateNameUseCase({ entity, name: params?.name })
        await this.updateLastNameUseCase({ entity, lastName: params?.lastName })
        await this.updateEmailUseCase({ email: params?.email, entity })
        await this.updateCentroTrabajoUseCase({ entity, centroTrabajoId: params?.centroTrabajoId })
        await this.updateLocationUseCase({ entity, locationId: params?.locationId })
        await this.updateDepartamentoUseCase({ entity, departamentoId: params?.departamentoId })
        await this.updateCargoUseCase({ cargoId: params?.cargoId, entity })
        await this.updateExtensionUseCase({ entity, extension: params?.extension })
        await this.updatePhoneNumberUseCase({ entity, phoneNumber: params?.phone })
    }

    private async updateUserNameUseCase({ entity, userName }: { userName?: Primitives<EmployeeUserName>, entity: Employee }) {
        if (!userName) return
        if (entity.userNameValue === userName) return
        const query: FiltersPrimitives[] = [
            {
                field: 'userName',
                operator: Operator.EQUAL,
                value: userName,
            },
            {
                field: 'isStillWorking',
                operator: Operator.EQUAL,
                value: true,
            }
        ]
        const criteria = await CreateCriteria.execute({ filters: query })
        if ((await this.employeeRepository.searchByQuery(criteria)) !== null) {
            throw new EmployeeAlreadyExistError("Ya existe un usuario con el nombre de usuario: " + userName)
        }
        entity.updateUserName(userName)
    }

    private async updateNameUseCase({ entity, name }: { name?: Nullable<Primitives<EmployeeName>>, entity: Employee }) {
        if (!name) return
        if (entity.nameValue === name) return
        entity.updateName(name)
    }
    private async updateLastNameUseCase({ entity, lastName }: { lastName?: Nullable<Primitives<EmployeeLastName>>, entity: Employee }) {
        if (!lastName) return
        if (entity.lastNameValue === lastName) return
        entity.updateLastName(lastName)
    }


    private async updateEmailUseCase({ email, entity }: { email?: Nullable<Primitives<EmployeeEmail>>, entity: Employee }) {
        if (!email) return

        if (entity.emailValue === email) return

        const query: FiltersPrimitives[] = [
            {
                field: 'email',
                operator: Operator.EQUAL,
                value: email,
            },
            {
                field: 'isStillWorking',
                operator: Operator.EQUAL,
                value: true,
            }
        ]
        const criteria = await CreateCriteria.execute({ filters: query })
        if ((await this.employeeRepository.searchByQuery(criteria)) !== null) {
            throw new EmployeeAlreadyExistError("Ya existe un usuario con la dirección de correo: " + email)
        }
        entity.updateEmail(email)
    }

    private async updateCargoUseCase({ cargoId, entity }: { cargoId?: Nullable<Primitives<CargoId>>, entity: Employee }): Promise<void> {
        if (!cargoId) return
        if (entity.cargoValue === cargoId) return
        if (await this.cargoRepository.searchById(cargoId) === null) {
            throw new CargoDoesNotExistError()
        }
        entity.updateCargo(cargoId)
    }

    private async updateCentroTrabajoUseCase({ entity, centroTrabajoId }: { centroTrabajoId?: Nullable<Primitives<CodCentroCosto>>, entity: Employee }): Promise<void> {
        if (!centroTrabajoId) return
        if (entity.centroTrabajoValue === centroTrabajoId) return
        if (await this.centroTrabajoRepository.searchById(centroTrabajoId) === null) {
            throw new CentroCostoDoesNotExistError()
        }
        entity.updateCentroTrabajo(centroTrabajoId)
    }

    private async updateLocationUseCase({ entity, locationId }: { locationId?: Nullable<Primitives<EmployeeLocationId>>, entity: Employee }): Promise<void> {
        if (!locationId) return
        if (entity.locationValue === locationId) return
        if (await this.locationRepository.searchById(locationId) === null) {
            throw new LocationDoesNotExistError(locationId)
        }
        entity.updateLocation(locationId)
    }

    private async updateDepartamentoUseCase({ entity, departamentoId }: { departamentoId?: Nullable<Primitives<DepartmentId>>, entity: Employee }): Promise<void> {
        if (!departamentoId) return
        if (entity.departamentoValue === departamentoId) return
        if (await this.departamentoRepository.searchById(departamentoId) === null) {
            throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
        }
        entity.updateDepartamento(departamentoId)
    }

    private async updateExtensionUseCase({ entity, extension }: { extension?: Nullable<Primitives<Extension>[]>, entity: Employee }): Promise<void> {
        if (!extension) return
        entity.updateExtension(extension)
    }
    private async updatePhoneNumberUseCase({ entity, phoneNumber }: { phoneNumber?: Nullable<Primitives<PhoneNumber>[]>, entity: Employee }): Promise<void> {
        if (!phoneNumber) return
        entity.updateExtension(phoneNumber)
    }
}