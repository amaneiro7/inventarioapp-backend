import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { CodCentroCosto } from "../../CentroCosto/domain/CodCentroCosto"
import { CentroTrabajoName } from "./CentroTrabajoName"
import { CodCentroTrabajo } from "./CodCentroTrabajo"

export interface CentroTrabajoPrimitives {
  id: Primitives<CodCentroTrabajo>
  name: Primitives<CentroTrabajoName>
  centroCostoId: Primitives<CodCentroCosto>
}

export class CentroTrabajo {
  constructor(
    private readonly id: CodCentroTrabajo,
    private name: CentroTrabajoName,
    private centroCostoId: CodCentroCosto
  ) { }

  static create({ name, id, centroCostoId }: CentroTrabajoPrimitives): CentroTrabajo {
    return new CentroTrabajo(
      new CodCentroTrabajo(id),
      new CentroTrabajoName(name),
      new CodCentroCosto(centroCostoId)
    )
  }

  updateName(newName: Primitives<CentroTrabajoName>): void {
    this.name = new CentroTrabajoName(newName)
  }

  updateCentroCosto(newCentroCosto: Primitives<CodCentroCosto>): void {
    this.centroCostoId = new CodCentroCosto(newCentroCosto)
  }

  static fromPrimitives(primitives: CentroTrabajoPrimitives): CentroTrabajo {
    return new CentroTrabajo(
      new CodCentroTrabajo(primitives.id),
      new CentroTrabajoName(primitives.name),
      new CodCentroCosto(primitives.centroCostoId)
    )
  }

  toPrimitive(): CentroTrabajoPrimitives {
    return {
      id: this.idValue,
      name: this.nameValue,
      centroCostoId: this.centroCostoValue
    }
  }

  get idValue(): Primitives<CodCentroTrabajo> {
    return this.id.value
  }

  get nameValue(): Primitives<CentroTrabajoName> {
    return this.name.value
  }
  get centroCostoValue(): Primitives<CodCentroCosto> {
    return this.centroCostoId.value
  }
}
