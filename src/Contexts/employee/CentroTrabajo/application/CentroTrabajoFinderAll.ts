import { type CentroTrabajoPrimitives } from '../domain/CentroTrabajo'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'

export class CentroTrabajoFinderAll {
  constructor(private readonly centroTrabajoRepository: CentroTrabajoRepository) { }

  async run(): Promise<CentroTrabajoPrimitives[]> {
    return await this.centroTrabajoRepository.searchAll()
  }
}
