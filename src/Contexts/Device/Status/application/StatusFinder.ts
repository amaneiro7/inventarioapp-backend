import { type StatusPrimitives } from '../domain/Status'
import { type StatusRepository } from '../domain/StatusRepository'

export class StatusFinderAll {
  constructor(private readonly statusRepository: StatusRepository) { }

  async run(): Promise<StatusPrimitives[]> {
    return await this.statusRepository.searchAll()
  }
}
