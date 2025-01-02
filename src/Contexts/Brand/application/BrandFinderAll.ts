import { type BrandPrimitives } from '../domain/Brand'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandFinderAll {
  constructor(private readonly brandRepository: BrandRepository) { }

  async run(): Promise<BrandPrimitives[]> {
    return await this.brandRepository.searchAll()
  }
}
