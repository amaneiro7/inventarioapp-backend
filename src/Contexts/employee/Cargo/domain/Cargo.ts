import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { CargoId } from './CargoId'
import { CargoName } from './CargoName'

export interface CargoPrimitives {
  id: Primitives<CargoId>
  name: Primitives<CargoName>
  departmentos: Primitives<DepartmentId>[]
}

export class Cargo {
  constructor(
    private readonly id: CargoId,
    private name: CargoName,
    private departmentos: DepartmentId[]
  ) { }

  static create(params: Omit<CargoPrimitives, "id">): Cargo {
    const id = CargoId.random().value
    const departmentos = params.departmentos.map(deps => new DepartmentId(deps))
    return new Cargo(
      new CargoId(id),
      new CargoName(params.name),
      departmentos
    )
  }

  static fromPrimitives(primitives: CargoPrimitives): Cargo {
    return new Cargo(
      new CargoId(primitives.id),
      new CargoName(primitives.name),
      primitives.departmentos.map(deps => new DepartmentId(deps))
    )
  }

  toPrimitive(): CargoPrimitives {
    return {
      id: this.idValue,
      name: this.nameValue,
      departmentos: this.departmentos.map(dept => dept.value)
    }
  }

  get idValue(): Primitives<CargoId> {
    return this.id.value
  }

  get nameValue(): Primitives<CargoName> {
    return this.name.value
  }

  get departmentosValue(): Primitives<DepartmentId>[] {
    return this.departmentos.map(deps => deps.value)
  }

  updateName(newName: Primitives<CargoName>): void {
    this.name = new CargoName(newName)
  }

  updateDepartmentos(departamentosIds: Primitives<DepartmentId>[]): void {
    this.departmentos = departamentosIds.map(deps => new DepartmentId(deps))
  }
}
