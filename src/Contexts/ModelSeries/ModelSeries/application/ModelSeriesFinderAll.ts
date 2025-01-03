import { type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinderAll {
  constructor(private readonly modelSeriesRepository: ModelSeriesRepository) { }

  async run(): Promise<ModelSeriesPrimitives[]> {
    return await this.modelSeriesRepository.searchAll()
  }
}
