import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesDto } from '../domain/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinder {
	constructor(private readonly modelSeriesRepository: ModelSeriesRepository) {}

	async run(params: { id: string }): Promise<ModelSeriesDto> {
		const { id } = params
		const modelSeriesId = new ModelSeriesId(id)
		const modelSeries = await this.modelSeriesRepository.searchById(modelSeriesId.toString())

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId.toString())
		}

		return modelSeries
	}
}
