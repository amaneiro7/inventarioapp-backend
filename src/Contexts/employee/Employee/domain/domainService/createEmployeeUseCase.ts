import { type Primitives } from "../../../../Shared/domain/value-object/Primitives";
import { type EmployeePrimitives } from "../entity/Employee";
import { type EmployeeRepository } from "../Repository/EmployeeRepository";
import { type CentroCostoRepository } from "../../../CentroCosto/domain/CentroCostoRepository";
import { type LocationRepository } from "../../../../Location/Location/domain/LocationRepository";
import { type DepartmentRepository } from "../../../IDepartment/DepartmentRepository";
import { type CargoId } from "../../../Cargo/domain/CargoId";
import { type CodCentroCosto } from "../../../CentroCosto/domain/CodCentroCosto";
import { type EmployeeLocationId } from "../valueObject/EmployeeLocation";
import { type DepartmentId } from "../../../IDepartment/DepartmentId";
import { type CargoRepository } from "../../../Cargo/domain/CargoRepository";
import { type DepartmentoPrimitives } from "../../../Departamento/domain/Departmento";
import { type EmployeeCode } from "../valueObject/EmployeCode";
import { type EmployeeEmail } from "../valueObject/EmployeeEmail";
import { type EmployeeUserName } from "../valueObject/EmployeeUsername";
import { type EmployeeCedula } from "../valueObject/EmployeeCedula";
import { type Nullable } from "../../../../Shared/domain/Nullable";
import { Filter, type FiltersPrimitives } from "../../../../Shared/domain/criteria/Filter";
import { EmployeeTypes } from "../valueObject/EmployeeType";
import { Criteria } from "../../../../Shared/domain/criteria/Criteria";
import { FilterField } from "../../../../Shared/domain/criteria/FilterField";
import { FilterOperator, Operator } from "../../../../Shared/domain/criteria/FilterOperator";
import { Filters } from "../../../../Shared/domain/criteria/Filters";
import { FilterValue } from "../../../../Shared/domain/criteria/FilterValue";
import { Order } from "../../../../Shared/domain/criteria/Order";
import { CargoDoesNotExistError } from "../../../Cargo/domain/CargoDoesNotExistError";
import { CentroCostoDoesNotExistError } from "../../../CentroCosto/domain/CentroCostoDoesNotExistError";
import { LocationDoesNotExistError } from "../../../../Location/Location/domain/LocationDoesNotExistError";
import { DepartmentDoesNotExistError } from "../../../IDepartment/DepartmentDoesNotExistError";

export class CreateEmployeeUseCase {
    private readonly order: Order = Order.fromValues(undefined, undefined)
    constructor(
        private readonly employeeRepository: EmployeeRepository,
        private readonly centroCostoRepository: CentroCostoRepository,
        private readonly locationRepository: LocationRepository,
        private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
        private readonly cargoRepository: CargoRepository,

    ) { }

    public async execute(params: Omit<EmployeePrimitives, 'id'>): Promise<void> {

        await this.ensureIsStillWorkingUserNameDoesNotExis(params.userName)

        if (EmployeeTypes.GENERIC === params.type) {
            return
        }

        await this.ensureEmailDoesNotExis(params?.email)
        await this.ensureEmployeeCodeDoesNotExis(params?.employeeCode)
        await this.ensureCedulaDoesNotExis(params?.cedula)
        await this.ensureCargoExist(params?.cargoId)
        await this.ensureCentroCostoExist(params?.codCentroCosto)
        await this.ensureLocationExist(params?.locationId)
        await this.ensureDepartmentoExist(params?.departmentoId)

    }

    private async ensureIsStillWorkingUserNameDoesNotExis(userName: Primitives<EmployeeUserName>) {
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
        const filters = query.map(filter => new Filter(
            new FilterField(filter.field),
            FilterOperator.fromValue(filter.operator),
            new FilterValue(filter.value),
        ))
        const criteria = new Criteria(new Filters(filters), this.order)
        await this.employeeRepository.matching(criteria)
    }
    private async ensureEmailDoesNotExis(email?: Nullable<Primitives<EmployeeEmail>>) {
        if (!email) {
            throw new Error('Email cannot be null or undefined for non-generic employees')
        }
        const query: FiltersPrimitives[] = [
            {
                field: 'email',
                operator: Operator.EQUAL,
                value: email,
            }
        ]
        const filters = query.map(filter => new Filter(
            new FilterField(filter.field),
            FilterOperator.fromValue(filter.operator),
            new FilterValue(filter.value),
        ))
        const criteria = new Criteria(new Filters(filters), this.order)
        await this.employeeRepository.matching(criteria)
    }
    private async ensureEmployeeCodeDoesNotExis(emloyeeCode?: Nullable<Primitives<EmployeeCode>>) {
        if (!emloyeeCode) {
            throw new Error('Employee code cannot be null or undefined for non-generic employees')
        }
        const query: FiltersPrimitives[] = [
            {
                field: 'employeeCode',
                operator: Operator.EQUAL,
                value: emloyeeCode,
            }
        ]
        const filters = query.map(filter => new Filter(
            new FilterField(filter.field),
            FilterOperator.fromValue(filter.operator),
            new FilterValue(filter.value),
        ))
        const criteria = new Criteria(new Filters(filters), this.order)
        await this.employeeRepository.matching(criteria)
    }
    private async ensureCedulaDoesNotExis(cedula?: Nullable<Primitives<EmployeeCedula>>) {
        if (!cedula) {
            throw new Error('Cedula cannot be null or undefined for non-generic employees')
        }
        const query: FiltersPrimitives[] = [
            {
                field: 'cedula',
                operator: Operator.EQUAL,
                value: cedula,
            }
        ]
        const filters = query.map(filter => new Filter(
            new FilterField(filter.field),
            FilterOperator.fromValue(filter.operator),
            new FilterValue(filter.value),
        ))
        const criteria = new Criteria(new Filters(filters), this.order)
        await this.employeeRepository.matching(criteria)
    }

    private async ensureCargoExist(cargoId?: Nullable<Primitives<CargoId>>): Promise<void> {
        if (!cargoId) {
            throw new Error('Cargo cannot be null or undefined for non-generic employees')
        }
        if (await this.cargoRepository.searchById(cargoId) === null) {
            throw new CargoDoesNotExistError()
        }
    }

    private async ensureCentroCostoExist(centroCosto?: Nullable<Primitives<CodCentroCosto>>): Promise<void> {
        if (!centroCosto) {
            throw new Error('Centro Costo cannot be null or undefined for non-generic employees')
        }
        if (await this.centroCostoRepository.searchById(centroCosto) === null) {
            throw new CentroCostoDoesNotExistError()
        }
    }

    private async ensureLocationExist(locationId?: Nullable<Primitives<EmployeeLocationId>>): Promise<void> {
        if (!locationId) {
            throw new Error('Location cannot be null or undefined for non-generic employees')
        }
        if (await this.locationRepository.searchById(locationId) === null) {
            throw new LocationDoesNotExistError(locationId)
        }
    }

    private async ensureDepartmentoExist(departamento?: Nullable<Primitives<DepartmentId>>): Promise<void> {
        if (!departamento) {
            throw new Error('Deparment cannot be null or undefined for non-generic employees')
        }
        if (await this.departmentoRepository.searchById(departamento) === null) {
            throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
        }
    }
}