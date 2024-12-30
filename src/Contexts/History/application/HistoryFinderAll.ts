import { type HistoryPrimitives } from '../domain/History'
import { type HistoryRepository } from '../domain/HistoryRepository'

export class SearchAllHistories {
  constructor(private readonly repository: HistoryRepository) { }

  async run(): Promise<HistoryPrimitives[]> {
    return await this.repository.searchAll()
  }
}
