import { type CentroCostoRepository } from '../../domain/CentroCostoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroCostoModel } from './CentroCostoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import {
	type CentroCostoPrimitives,
	type CentroCostoDto
} from '../../domain/CentroCosto.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeCentroCostoRepository
	extends CriteriaToSequelizeConverter
	implements CentroCostoRepository
{
	private readonly cacheKey: string = 'CentroCostos'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroCostoDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CentroCostoModel.findAndCountAll(
					options
				)
				return {
					total: count,
					data: rows
				}
			}
		})
	}

	async searchById(
		id: Primitives<CodCentroCosto>
	): Promise<Nullable<CentroCostoDto>> {
		return (await CentroCostoModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CentroCostoName>
	): Promise<Nullable<CentroCostoDto>> {
		return (await CentroCostoModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: CentroCostoPrimitives): Promise<void> {
		const { id } = payload
		const CentroCosto = (await CentroCostoModel.findByPk(id)) ?? null
		if (!CentroCosto) {
			await CentroCostoModel.create({ ...payload })
		} else {
			CentroCosto.set({ ...payload })
			await CentroCosto.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: Primitives<CodCentroCosto>): Promise<void> {
		await CentroCostoModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
