import { type RolePrimitives } from '../domain/Role'
import { type RoleRepository } from '../domain/RoleRepository'
import { RoleId } from '../domain/RoleId'

export class RoleFinderAll {
  constructor(private readonly repository: RoleRepository) { }

  async run(): Promise<RolePrimitives[]> {
    const data = await this.repository.searchAll()
    const dataWithoutAdmin = data.filter(elem => elem.id !== RoleId.Options.ADMIN)
    return dataWithoutAdmin
  }
}
