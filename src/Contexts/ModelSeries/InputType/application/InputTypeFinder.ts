import { type InputTypePrimitives } from '../domain/InputType'
import { type InputTypeRepository } from '../domain/InputTypeRepository'

export class InputTypeFinderAll {
  constructor(private readonly inputTypeRepository: InputTypeRepository) { }

  async run(): Promise<InputTypePrimitives[]> {
    return await this.inputTypeRepository.searchAll()
  }
}
