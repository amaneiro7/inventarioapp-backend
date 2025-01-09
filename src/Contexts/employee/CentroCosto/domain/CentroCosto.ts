import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { CentroCostoName } from "./CentroCostoName"
import { CodCentroCosto } from "./CodCentroCosto"

export interface CentroCostoPrimitives {
  id: Primitives<CodCentroCosto>
  name: Primitives<CentroCostoName>
}

export class CentroCosto {
  constructor(
    private readonly id: CodCentroCosto,
    private name: CentroCostoName
  ) { }

  static create({ name, id }: CentroCostoPrimitives): CentroCosto {
    return new CentroCosto(
      new CodCentroCosto(id),
      new CentroCostoName(name)
    )
  }

  updateName(newName: Primitives<CentroCostoName>): void {
    this.name = new CentroCostoName(newName)
  }

  static fromPrimitives(primitives: CentroCostoPrimitives): CentroCosto {
    return new CentroCosto(
      new CodCentroCosto(primitives.id),
      new CentroCostoName(primitives.name)
    )
  }

  toPrimitive(): CentroCostoPrimitives {
    return {
      id: this.id.value,
      name: this.name.value
    }
  }

  get idValue(): Primitives<CodCentroCosto> {
    return this.id.value
  }

  get nameValue(): Primitives<CentroCostoName> {
    return this.name.value
  }
}
