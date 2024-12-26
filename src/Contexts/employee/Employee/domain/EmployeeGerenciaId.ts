import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { GerenciaId } from '../../Area/Gerencia/domain/GerenciaId'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { CargoName, type CargosValues } from '../../Cargo/domain/CargoName'

export class EmployeeGerenciaId extends AcceptedNullValueObject<Primitives<GerenciaId>> {
  constructor (
    readonly value: Primitives<GerenciaId> | null,
    private readonly cargoId: Primitives<CargoId>
  ) {
    super(value)
    this.nullIsCargoisHigherThanCoordinador(cargoId)
    this.ensureIsValidGerenciaId(value)
  }

  toPrimitives (): Primitives<GerenciaId> | null {
    return this.value
  }

  private nullIsCargoisHigherThanCoordinador (cargo: Primitives<CargoId>): void {
    const positionHigerThanCoordinator: CargosValues[] = ['Vicepresidente', 'Vicepresidente Ejecutivo']
    const IsPositionHigherThanCoordinator = positionHigerThanCoordinator.includes(CargoName.AcceptedCargos[cargo])
    if (IsPositionHigherThanCoordinator) {
      this.updateValue(null) // Is position higher than coordinator, so set it as null
    }
  }

  private ensureIsValidGerenciaId (id: Primitives<GerenciaId> | null): void {
    if (!this.isValid(id)) {
      throw new InvalidArgumentError('GerenciaId is required')
    }
  }

  private isValid (id: Primitives<GerenciaId> | null): boolean {
    if (id === null) return true
    const gerenciaId = new GerenciaId(id)
    if (gerenciaId instanceof GerenciaId) {
      return true
    }

    return false
  }
}
