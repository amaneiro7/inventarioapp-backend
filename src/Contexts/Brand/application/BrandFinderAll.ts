import { type BrandPrimitives } from '../domain/Brand'
import { type BrandRepository } from '../domain/BrandRepository'

export class SearchAllBrands {
  constructor(private readonly repository: BrandRepository) { }

  async search(): Promise<BrandPrimitives[]> {
    return await this.repository.searchAll()
  }
}
