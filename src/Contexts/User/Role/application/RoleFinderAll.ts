import { type RolePrimitives } from '../domain/Role'
import { type RoleRepository } from '../domain/RoleRepository'
import { RoleId } from '../domain/RoleId'

export class RoleFinderAll {
  constructor(private readonly roleRepository: RoleRepository) { }

  async run(): Promise<RolePrimitives[]> {
    const data = await this.roleRepository.searchAll()
    const dataWithoutAdmin = data.filter(elem => elem.id !== RoleId.Options.ADMIN)
    return dataWithoutAdmin
  }
}
