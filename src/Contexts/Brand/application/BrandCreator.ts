import { Brand, type BrandPrimitives } from '../domain/Brand'
import { BrandName } from '../domain/BrandName'
import { BrandAlreadyExistError } from '../domain/BrandAlreadyExistError'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandCreator {
  constructor(private readonly repository: BrandRepository) { }

  async run({ name }: Omit<BrandPrimitives, 'id'>): Promise<void> {
    await this.ensureBrandDoesNotExist(name)

    const brand = Brand.create({ name })

    await this.repository.save(brand.toPrimitive())
  }

  private async ensureBrandDoesNotExist(name: Primitives<BrandName>): Promise<void> {
    if (await this.repository.searchByName(name) !== null) {
      throw new BrandAlreadyExistError(name)
    }
  }
}
