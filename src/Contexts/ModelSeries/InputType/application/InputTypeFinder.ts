import { type InputTypePrimitives } from '../domain/InputType'
import { type InputTypeRepository } from '../domain/InputTypeRepository'

export class InputTypeFinderAll {
  constructor(private readonly repository: InputTypeRepository) { }

  async run(): Promise<InputTypePrimitives[]> {
    return await this.repository.searchAll()
  }
}
