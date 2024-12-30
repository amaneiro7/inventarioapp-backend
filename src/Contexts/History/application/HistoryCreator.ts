import { History, type HistoryPrimitives } from "../domain/History"
import { type HistoryRepository } from "../domain/HistoryRepository"

export interface HistoryParams extends Omit<HistoryPrimitives, 'id'> { }

export class HistoryCreator {
    constructor(private readonly repository: HistoryRepository) { }

    async run(params: HistoryParams): Promise<void> {

        const history = History.create(params)

        await this.repository.save(history.toPrimitives())
    }
}
