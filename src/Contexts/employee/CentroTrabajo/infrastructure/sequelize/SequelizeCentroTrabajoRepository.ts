import { type CentroTrabajoPrimitives } from '../../domain/CentroTrabajo'
import { type CentroTrabajoRepository } from '../../domain/CentroTrabajoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CentroTrabajoId } from '../../domain/CentroTrabajoId'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroTrabajoModel } from './CentroTrabajoSchema'

export class SequelizeCentroTrabajoRepository
	implements CentroTrabajoRepository
{
	private readonly cacheKey: string = 'CentroTrabajos'
	constructor(private readonly cache: CacheService) {}
	async searchAll(): Promise<CentroTrabajoPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await CentroTrabajoModel.findAll()
		})
	}

	async searchById(
		id: Primitives<CentroTrabajoId>
	): Promise<Nullable<CentroTrabajoPrimitives>> {
		return (await CentroTrabajoModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CentroTrabajoName>
	): Promise<Nullable<CentroTrabajoPrimitives>> {
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
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}

	async remove(id: Primitives<CentroTrabajoId>): Promise<void> {
		await CentroTrabajoModel.destroy({ where: { id } })
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}
}
