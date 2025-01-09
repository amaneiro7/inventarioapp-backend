import { CentroTrabajo, type CentroTrabajoPrimitives } from '../domain/CentroTrabajo'
import { CentroTrabajoDoesNotExistError } from '../domain/CentroTrabajoDoesNotExistError'
import { CodCentroTrabajo } from '../domain/CodCentroTrabajo'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type CentroTrabajoName } from '../domain/CentroTrabajoName'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'

export class CentroTrabajoUpdater {
  constructor(
    private readonly centroTrabajoRepository: CentroTrabajoRepository,
    private readonly centroCostoRepository: CentroCostoRepository
  ) { }

  async run({ id, params: { name, centroCostoId } }: { id: Primitives<CodCentroTrabajo>; params: Partial<Omit<CentroTrabajoPrimitives, 'id'>> }): Promise<void> {
    const codCentroTrabajo = new CodCentroTrabajo(id)

    const centroTrabajo = await this.centroTrabajoRepository.searchById(codCentroTrabajo.value)
    if (!centroTrabajo) {
      throw new CentroTrabajoDoesNotExistError()
    }

    const centroTrabajoEntity = CentroTrabajo.fromPrimitives(centroTrabajo)
    await this.updateCentroTrabajoUseCase({ name, entity: centroTrabajoEntity })
    await this.updateCentroCostoUseCase({ centroCostoId, entity: centroTrabajoEntity })

    await this.centroTrabajoRepository.save(centroTrabajoEntity.toPrimitive())
  }

  private async updateCentroTrabajoUseCase({ entity, name }: { name?: Primitives<CentroTrabajoName>, entity: CentroTrabajo }): Promise<void> {
    if (!name) return

    if (entity.nameValue === name) return

    entity.updateName(name)
  }
  private async updateCentroCostoUseCase({ entity, centroCostoId }: { centroCostoId?: Primitives<CodCentroCosto>, entity: CentroTrabajo }): Promise<void> {
    if (!centroCostoId) return

    if (entity.centroCostoValue === centroCostoId) return
    if (await this.centroCostoRepository.searchById(centroCostoId) === null) {
      throw new CentroCostoDoesNotExistError()
    }

    entity.updateCentroCosto(centroCostoId)
  }
}
