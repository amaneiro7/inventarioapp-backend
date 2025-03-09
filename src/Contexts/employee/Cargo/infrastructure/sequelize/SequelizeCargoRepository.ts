import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoRepository } from '../../domain/CargoRepository'
import { type CargoName } from '../../domain/CargoName'
import { type CargoDto, type CargoPrimitives } from '../../domain/Cargo.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { CargoModel } from './CargoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'

export class SequelizeCargoRepository extends CriteriaToSequelizeConverter implements CargoRepository {
	private readonly cacheKey: string = 'cargos'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			fetchFunction: async () => {
				const { count, rows } = await CargoModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>> {
		return (await CargoModel.findByPk(id)) ?? null
	}

	async searchByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>> {
		return (await CargoModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: CargoPrimitives): Promise<void> {
		const { id, departamentos, ...restPayload } = payload
		const cargo = (await CargoModel.findByPk(id)) ?? null
		if (cargo === null) {
			const newCargo = await CargoModel.create({
				...restPayload,
				id
			})
			await newCargo.setDeparments(departamentos)
		} else {
			cargo.set({ ...restPayload })
			await cargo.save()
			await cargo.setDeparments(departamentos)
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
