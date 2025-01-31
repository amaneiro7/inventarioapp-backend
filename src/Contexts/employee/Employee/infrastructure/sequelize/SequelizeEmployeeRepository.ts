import { type EmployeeRepository } from '../../domain/Repository/EmployeeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import {
	type EmployeePrimitives,
	type EmployeeDto
} from '../../domain/entity/Employee.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeEmployeeRepository
	extends CriteriaToSequelizeConverter
	implements EmployeeRepository
{
	private readonly cacheKey: string = 'employees'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		options.include = [
			{
				association: 'centroTrabajo',
				attributes: ['id', 'name'],
				include: [
					{
						association: 'centroCosto',
						attributes: ['id', 'name']
					}
				]
			},
			{
				association: 'departamento',
				attributes: ['id', 'name'],
				include: [
					{
						association: 'vicepresidenciaEjecutiva',
						attributes: ['id', 'name'],
						include: [
							{
								association: 'directiva',
								attributes: ['id', 'name']
							}
						]
					}
				]
			},
			{
				association: 'cargo',
				attributes: ['id', 'name']
			}
		]
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(
					options
				)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)

		return this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(
					options
				)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: string): Promise<EmployeeDto | null> {
		return (
			(await EmployeeModel.findByPk(id, {
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
