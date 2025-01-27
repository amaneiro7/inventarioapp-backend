import { type CentroTrabajoRepository } from '../../domain/CentroTrabajoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CentroTrabajoId } from '../../domain/CentroTrabajoId'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroTrabajoModel } from './CentroTrabajoSchema'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import {
	type CentroTrabajoDto,
	type CentroTrabajoPrimitives
} from '../../domain/CentroTrabajo.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeCentroTrabajoRepository
	extends CriteriaToSequelizeConverter
	implements CentroTrabajoRepository
{
	private readonly cacheKey: string = 'CentroTrabajos'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroTrabajoDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } =
					await CentroTrabajoModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<CentroTrabajoId>
	): Promise<Nullable<CentroTrabajoDto>> {
		return (await CentroTrabajoModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CentroTrabajoName>
	): Promise<Nullable<CentroTrabajoDto>> {
		return (await CentroTrabajoModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: CentroTrabajoPrimitives): Promise<void> {
		const { id } = payload
		const CentroTrabajo = (await CentroTrabajoModel.findByPk(id)) ?? null
		if (!CentroTrabajo) {
			await CentroTrabajoModel.create({ ...payload })
		} else {
			CentroTrabajo.set({ ...payload })
			await CentroTrabajo.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: Primitives<CentroTrabajoId>): Promise<void> {
		await CentroTrabajoModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
