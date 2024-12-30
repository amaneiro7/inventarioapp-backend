import { type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class SearchAllModelSeries {
  constructor(private readonly repository: ModelSeriesRepository) { }

  async run(): Promise<ModelSeriesPrimitives[]> {
    return await this.repository.searchAll()
  }
}
