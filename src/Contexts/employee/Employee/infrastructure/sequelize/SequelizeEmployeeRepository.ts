import { type EmployeePrimitives } from '../../domain/Employee'
import { type EmployeeRepository } from '../../domain/EmployeeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'

export class SequelizeEmployeeRepository extends CriteriaToSequelizeConverter implements EmployeeRepository {
  private readonly cacheKey: string = 'employees'
  constructor(private readonly cache: CacheService) {
    super()
  }
  async searchAll(): Promise<EmployeePrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await EmployeeModel.findAll()
    })

  }

  async matching(criteria: Criteria): Promise<EmployeePrimitives[]> {
    const options = this.convert(criteria)
    const locationJoin = new EmployeeAssociation().convertFilterLocation(criteria, options)
    return await EmployeeModel.findAll(locationJoin)
  }

  async searchById(id: string): Promise<EmployeePrimitives | null> {
    return await EmployeeModel.findByPk(id, {
      include: [
        {
          association: 'devices',
          include: [
            'category',
            'brand',
            'model',
            'location',
            'computer'
          ]
        }
      ]
    }) ?? null
  }

  async searchByUserName(userName: string): Promise<EmployeePrimitives | null> {
    return await EmployeeModel.findOne({ where: { userName } })
  }

  async save(payload: EmployeePrimitives): Promise<void> {
    const { id } = payload
    const employee = await EmployeeModel.findByPk(id) ?? null
    if (employee === null) {
      await EmployeeModel.create({ ...payload })
    } else {
      employee.set({ ...payload })
      await employee.save()
    }
    await this.cache.removeCachedData(this.cacheKey)
    await this.searchAll()
  }

  async remove(id: string): Promise<void> {
    await EmployeeModel.destroy({ where: { id } })
    await this.cache.removeCachedData(this.cacheKey)
    await this.searchAll()
  }
}
