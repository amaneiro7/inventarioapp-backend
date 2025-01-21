import { type CentroCostoPrimitives } from '../../domain/CentroCosto'
import { type CentroCostoRepository } from '../../domain/CentroCostoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroCostoModel } from './CentroCostoSchema'

export class SequelizeCentroCostoRepository implements CentroCostoRepository {
	private readonly cacheKey: string = 'CentroCostos'
	constructor(private readonly cache: CacheService) {}
	async searchAll(): Promise<CentroCostoPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await CentroCostoModel.findAll()
		})
	}

	async searchById(
		id: Primitives<CodCentroCosto>
	): Promise<Nullable<CentroCostoPrimitives>> {
		return (await CentroCostoModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CentroCostoName>
	): Promise<Nullable<CentroCostoPrimitives>> {
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
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}

	async remove(id: Primitives<CodCentroCosto>): Promise<void> {
		await CentroCostoModel.destroy({ where: { id } })
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}
}
