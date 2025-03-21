import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentName } from '../../../IDepartment/DepartmentName'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaPrimitives
} from '../../domain/VicepresidenciaEjecutiva.dto'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeVicepresidenciaEjecutivaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<VicepresidenciaEjecutivaDto>
{
	private readonly cacheKey: string = 'vicepresidenciaEjecutiva'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaEjecutivaDto>> {
		const options = this.convert(criteria)

		options.include = ['directiva']

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaEjecutivaModel.findAndCountAll(options)

				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		return (await VicepresidenciaEjecutivaModel.findByPk(id)) ?? null
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		return (
			(await VicepresidenciaEjecutivaModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const { id } = payload
		const vicepresidenciaEjecutiva = (await VicepresidenciaEjecutivaModel.findByPk(id)) ?? null
		if (vicepresidenciaEjecutiva === null) {
			await VicepresidenciaEjecutivaModel.create({ ...payload })
		} else {
			vicepresidenciaEjecutiva.set({ ...payload })
			await vicepresidenciaEjecutiva.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
