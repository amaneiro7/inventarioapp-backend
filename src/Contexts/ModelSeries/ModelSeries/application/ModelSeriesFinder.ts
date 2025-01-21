import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinder {
	constructor(
		private readonly modelSeriesRepository: ModelSeriesRepository
	) {}

	async run(params: { id: string }): Promise<ModelSeriesPrimitives> {
		const { id } = params
		const modelSeriesId = new ModelSeriesId(id)
		const modelSeries = await this.modelSeriesRepository.searchById(
			modelSeriesId.toString()
		)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId.toString())
		}

		return modelSeries
	}
}
