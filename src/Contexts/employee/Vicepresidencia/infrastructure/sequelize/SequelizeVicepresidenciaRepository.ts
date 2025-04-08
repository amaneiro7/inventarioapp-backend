import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentName } from '../../../IDepartment/DepartmentName'
import { VicepresidenciaModel } from './VicepresidenciaSchema'
import { type VicepresidenciaDto, type VicepresidenciaPrimitives } from '../../domain/Vicepresidencia.dto'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeVicepresidenciaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<VicepresidenciaDto>
{
	private readonly cacheKey: string = 'vicepresidencia'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaDto>> {
		const options = this.convert(criteria)

		options.include = ['directiva']

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaModel.findAndCountAll(options)

				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaDto>> {
		return (await VicepresidenciaModel.findByPk(id)) ?? null
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaDto>> {
		return (
			(await VicepresidenciaModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async save(payload: VicepresidenciaPrimitives): Promise<void> {
		const { id } = payload
		const vicepresidencia = (await VicepresidenciaModel.findByPk(id)) ?? null
		if (vicepresidencia === null) {
			await VicepresidenciaModel.create({ ...payload })
		} else {
			vicepresidencia.set({ ...payload })
			await vicepresidencia.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await VicepresidenciaModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
