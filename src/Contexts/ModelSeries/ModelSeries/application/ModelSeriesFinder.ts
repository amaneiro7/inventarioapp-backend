import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinder {
  constructor(private readonly repository: ModelSeriesRepository) { }

  async run(params: { id: string }): Promise<ModelSeriesPrimitives> {
    const { id } = params
    const modelSeriesId = new ModelSeriesId(id)
    const modelSeries = await this.repository.searchById(modelSeriesId.toString())

    if (modelSeries === null) {
      throw new ModelSeriesDoesNotExistError(modelSeriesId.toString())
    }

    return modelSeries
  }
}
