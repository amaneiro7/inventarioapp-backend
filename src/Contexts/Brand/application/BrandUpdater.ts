import { type Repository } from '../../Shared/domain/Repository'
import { Brand } from '../domain/Brand'
import { BrandAlreadyExistError } from '../domain/BrandAlreadyExistError'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { BrandName } from '../domain/BrandName'

export class BrandUpdater {
  constructor (private readonly repository: Repository) {}

  async run (params: { id: string, newName: string }): Promise<void> {
    const { id, newName } = params

    const brand = await this.repository.brand.searchById(new BrandId(id).value)
    if (brand === null) {
      throw new BrandDoesNotExistError(newName)
    }

    const brandEntity = Brand.fromPrimitives(brand)
    await this.ensureBrandDoesNotExist(newName, brandEntity)

    await this.repository.brand.save(brandEntity.toPrimitive())
  }

  private async ensureBrandDoesNotExist (name: string, entity: Brand): Promise<void> {
    if (await this.repository.brand.searchByName(new BrandName(name).value) !== null) {
      throw new BrandAlreadyExistError(name)
    }
    entity.updateName(name)
  }
}
