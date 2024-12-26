import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type EmployeePrimitives } from '../../domain/Employee'
import { type EmployeeRepository } from '../../domain/EmployeeRepository'
import { type Models } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheRepository } from '../../../../Shared/domain/CacheRepository'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { CacheService } from '../../../../Shared/domain/CacheService'


export class SequelizeEmployeeRepository extends CriteriaToSequelizeConverter implements EmployeeRepository {
  private readonly models = sequelize.models as unknown as Models

  private readonly cacheKey: string = 'employees'
  constructor(private readonly cache: CacheRepository) {
    super()
  }
  async searchAll(): Promise<EmployeePrimitives[]> {
    return await new CacheService(this.cache).getCachedData(this.cacheKey, async () => {
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
    await new CacheService(this.cache).removeCachedData(this.cacheKey)
    await this.searchAll()
  }

  async remove(id: string): Promise<void> {
    await EmployeeModel.destroy({ where: { id } })
    await new CacheService(this.cache).removeCachedData(this.cacheKey)
    await this.searchAll()
  }
}
