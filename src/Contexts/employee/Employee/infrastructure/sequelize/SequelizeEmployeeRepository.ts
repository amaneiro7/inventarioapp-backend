import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../../domain/Repository/EmployeeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type EmployeePrimitives, type EmployeeDto } from '../../domain/entity/Employee.dto'

export class SequelizeEmployeeRepository extends CriteriaToSequelizeConverter implements EmployeeRepository {
	private readonly cacheKey: string = 'employees'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		const opt = EmployeeAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		const opt = EmployeeAssociation.convertFilter(criteria, options)
		return this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchByEmail(email: Primitives<EmployeeEmail>): Promise<EmployeeDto | null> {
		return (
			(await EmployeeModel.findOne({
				where: {
					email
				}
			})) ?? null
		)
	}

	async searchById(id: string): Promise<EmployeeDto | null> {
		return (
			(await EmployeeModel.findByPk(id, {
				include: [
					{
						association: 'devices',
						include: ['category', 'brand', 'model', 'location', 'computer']
					},
					'cargo',
					'location',
					'departamento'
				]
			})) ?? null
		)
	}

	async searchByQuery(criteria: Criteria): Promise<EmployeeDto | null> {
		const options = this.convert(criteria)
		return await EmployeeModel.findOne(options)
	}

	async save(payload: EmployeePrimitives): Promise<void> {
		const { id } = payload
		const employee = (await EmployeeModel.findByPk(id)) ?? null
		if (employee === null) {
			await EmployeeModel.create({ ...payload })
		} else {
			employee.set({ ...payload })
			await employee.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: string): Promise<void> {
		await EmployeeModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
