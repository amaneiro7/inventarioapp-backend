import { type StatusPrimitives } from '../domain/Status'
import { type StatusRepository } from '../domain/StatusRepository'

export class SearchAllStatus {
  constructor(private readonly repository: StatusRepository) { }

  async run(): Promise<StatusPrimitives[]> {
    return await this.repository.searchAll()
  }
}
