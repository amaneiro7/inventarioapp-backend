import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentName } from '../../../IDepartment/DepartmentName'
import { VicepresidenciaEjecutivaPrimitives } from '../../domain/VicepresidenciaEjecutiva'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'

export class SequelizeVicepresidenciaEjecutivaRepository
	implements DepartmentRepository<VicepresidenciaEjecutivaPrimitives>
{
	private readonly cacheKey: string = 'vicepresidenciaEjecutiva'
	constructor(private readonly cache: CacheService) {}
	async searchAll(): Promise<VicepresidenciaEjecutivaPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await VicepresidenciaEjecutivaModel.findAll()
		})
	}

	async searchById(
		id: Primitives<DepartmentId>
	): Promise<Nullable<VicepresidenciaEjecutivaPrimitives>> {
		return (await VicepresidenciaEjecutivaModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<DepartmentName>
	): Promise<Nullable<VicepresidenciaEjecutivaPrimitives>> {
		return (
			(await VicepresidenciaEjecutivaModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const { id } = payload
		const vicepresidenciaEjecutiva =
			(await VicepresidenciaEjecutivaModel.findByPk(id)) ?? null
		if (vicepresidenciaEjecutiva === null) {
			await VicepresidenciaEjecutivaModel.create({ ...payload })
		} else {
			vicepresidenciaEjecutiva.set({ ...payload })
			await vicepresidenciaEjecutiva.save()
		}
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })
		await this.cache.removeCachedData(this.cacheKey)
		await this.searchAll()
	}
}
