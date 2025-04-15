import { VicepresidenciaModel } from './VicepresidenciaSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaDto, type VicepresidenciaPrimitives } from '../../domain/Vicepresidencia.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

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

		options.include = ['vicepresidenciaEjecutiva']

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
		return (
			(await VicepresidenciaModel.findByPk(id, {
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
					},
					{
						association: 'cargos',
						attributes: ['id', 'name'],
						through: { attributes: [] }
					}
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaDto>> {
		return (
			(await VicepresidenciaModel.findOne({
				where: { name }
			})) ?? null
		)
	}

	async save(payload: VicepresidenciaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload
			const vicepresidencia = (await VicepresidenciaModel.findByPk(id)) ?? null
			if (vicepresidencia) {
				await vicepresidencia.update(restPayload, { transaction })
				await vicepresidencia.setCargos(cargos, { transaction })
			} else {
				const newVicepresidencia = await VicepresidenciaModel.create({ ...restPayload, id }, { transaction })
				await newVicepresidencia.setCargos(cargos, { transaction })
			}
			await transaction.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await VicepresidenciaModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
