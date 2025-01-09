import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { CargoId } from './CargoId'
import { CargoName } from './CargoName'

export interface CargoPrimitives {
  id: Primitives<CargoId>
  name: Primitives<CargoName>
  departments: Primitives<DepartmentId>[]
}

export class Cargo {
  constructor(
    private readonly id: CargoId,
    private name: CargoName,
    private departments: DepartmentId[]
  ) { }

  static create(params: Omit<CargoPrimitives, "id">): Cargo {
    const id = CargoId.random().value
    const departments = params.departments.map(deps => new DepartmentId(deps))
    return new Cargo(
      new CargoId(id),
      new CargoName(params.name),
      departments
    )
  }

  static fromPrimitives(primitives: CargoPrimitives): Cargo {
    return new Cargo(
      new CargoId(primitives.id),
      new CargoName(primitives.name),
      primitives.departments.map(deps => new DepartmentId(deps))
    )
  }

  toPrimitive(): CargoPrimitives {
    return {
      id: this.idValue,
      name: this.nameValue,
      departments: this.departments.map(dept => dept.value)
    }
  }

  get idValue(): Primitives<CargoId> {
    return this.id.value
  }

  get nameValue(): Primitives<CargoName> {
    return this.name.value
  }

  get departmentsValue(): Primitives<DepartmentId>[] {
    return this.departments.map(deps => deps.value)
  }

  updateName(newName: Primitives<CargoName>): void {
    this.name = new CargoName(newName)
  }

  updateDepartments(dedepartmentIds: Primitives<DepartmentId>[]): void {
    this.departments = dedepartmentIds.map(deps => new DepartmentId(deps))
  }
}
