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
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

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
		return (
			(await VicepresidenciaEjecutivaModel.findByPk(id, {
				include: [
					{
						association: 'cargos',
						attributes: ['id', 'name'],
						through: { attributes: [] }
					},
					'employee'
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		return (
			(await VicepresidenciaEjecutivaModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload
			const vicepresidenciaEjecutiva = (await VicepresidenciaEjecutivaModel.findByPk(id, { transaction })) ?? null
			if (vicepresidenciaEjecutiva) {
				await vicepresidenciaEjecutiva.update(restPayload, { transaction })
				await vicepresidenciaEjecutiva.setCargos(cargos, { transaction })
			} else {
				const newVPE = await VicepresidenciaEjecutivaModel.create({ ...payload, id }, { transaction })
				await newVPE.setCargos(cargos, { transaction })
			}
			await transaction.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
