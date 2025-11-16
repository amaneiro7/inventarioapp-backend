import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { PermissionGroupAssociation } from './PermissionGroupAssociation'
import { PermissionGroupModel } from './PermissionGroupSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type PermissionGroupDto, type PermissionGroupPrimitives } from '../../domain/entity/PermissionGroup.dto'
import { type PermissionGroupRepository } from '../../domain/repository/PermissionGroupRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../domain/valueObject/PermissionGroupId'
import { type PermissionGroupName } from '../../domain/valueObject/PermissionGroupName'

/**
 * @class SequelizePermissionGroupRepository
 * @extends SequelizeCriteriaConverter
 * @implements {PermissionGroupRepository}
 * @description Concrete implementation of the `PermissionGroupRepository` using Sequelize.
 */
export class SequelizePermissionGroupRepository
	extends SequelizeCriteriaConverter
	implements PermissionGroupRepository
{
	private readonly cacheKeyPrefix = 'permission_groups'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<PermissionGroupDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = PermissionGroupAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<PermissionGroupDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await PermissionGroupModel.findAndCountAll(finalOptions)
				const data = rows.map(group => {
					const plainGroup = group.get({ plain: true }) as unknown as PermissionGroupDto
					return {
						...plainGroup,
						permissions: plainGroup.permissionsData?.map(p => p.id) ?? []
					}
				})
				return { total: count, data }
			}
		})
	}

	async findById(id: Primitives<PermissionGroupId>): Promise<PermissionGroupDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<PermissionGroupDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const group = await PermissionGroupModel.findByPk(id, {
					include: [{ association: 'permissionsData', attributes: ['id'] }]
				})

				if (!group) {
					return null
				}

				const plainGroup = group.get({ plain: true }) as unknown as PermissionGroupDto
				return {
					id: plainGroup.id,
					name: plainGroup.name,
					permissions: plainGroup.permissionsData?.map(p => p.id) ?? []
				}
			}
		})
	}

	async findByName(name: Primitives<PermissionGroupName>): Promise<PermissionGroupDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<PermissionGroupDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const group = await PermissionGroupModel.findOne({
					where: { name },
					include: [{ association: 'permissionsData', attributes: ['id'] }]
				})

				if (!group) {
					return null
				}

				const plainGroup = group.get({ plain: true }) as unknown as PermissionGroupDto
				return {
					id: plainGroup.id,
					name: plainGroup.name,
					permissions: plainGroup.permissionsData?.map(p => p.id) ?? []
				}
			}
		})
	}

	async save(payload: PermissionGroupPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { permissions, ...restPayload } = payload
			const [groupInstance] = await PermissionGroupModel.upsert(restPayload, { transaction, returning: true })

			if (groupInstance) {
				await groupInstance.setPermissionsData(permissions, { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(payload.id, payload.name)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving permission group: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<PermissionGroupId>): Promise<void> {
		const groupToRemove = await PermissionGroupModel.findByPk(id, { attributes: ['name'] })
		const groupName = groupToRemove?.name

		await PermissionGroupModel.destroy({ where: { id } })

		if (groupName) {
			await this.invalidateCache(id, groupName)
		}
	}

	private async invalidateCache(id: string, name: string): Promise<void> {
		const cacheKeysToRemove: string[] = [`${this.cacheKeyPrefix}*`, `${this.cacheKeyPrefix}:id:${id}`]
		if (name) {
			cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)
		}
		await Promise.all(cacheKeysToRemove.map(async key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
