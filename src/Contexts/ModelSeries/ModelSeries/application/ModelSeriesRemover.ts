import { ModelSeriesCannotDeleteIsNotEmptyError } from '../domain/ModelSeriesCannotDeleteIsNotEmptyError'
import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesRemover {
  constructor(private readonly repository: ModelSeriesRepository) { }

  async run(params: { id: string }): Promise<void> {
    const { id } = params
    const modelSeriesId = new ModelSeriesId(id)

    const modelSeries = await this.repository.searchAll()
    if (modelSeries.length > 0) {
      throw new ModelSeriesCannotDeleteIsNotEmptyError()
    }
    const modelSerie = await this.repository.searchById(modelSeriesId.value)
    if (modelSerie === null) {
      throw new ModelSeriesDoesNotExistError(id)
    }

    await this.repository.remove(modelSeriesId.value)
  }
}
