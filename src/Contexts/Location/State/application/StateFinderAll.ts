import { type StatePrimitives } from '../domain/State'
import { type StateRepository } from '../domain/StateRepository'

export class StateFinderAll {
  constructor(private readonly repository: StateRepository) { }

  async run(): Promise<StatePrimitives[]> {
    return await this.repository.searchAll()
  }
}
