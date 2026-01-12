import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeSettingsModel } from './SettingsSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SettingsPrimitives } from '../../../domain/entity/Settings.dto'
import { type SettingsRepository } from '../../../domain/repository/SettingsRepository'
import { type SettingsKey } from '../../../domain/valueObject/SettingsKey'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

export class SequelizeSettingsRepository implements SettingsRepository, CacheInvalidator {
	private readonly model = SequelizeSettingsModel
	private readonly cacheKeyPrefix = 'appSettings'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(): Promise<SettingsPrimitives[]> {
		const cacheKey = `${this.cacheKeyPrefix}:lists`
		return this.cache.getCachedData<SettingsPrimitives[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const settings = await this.model.findAll()
				return settings.map(setting => setting.get({ plain: true }) as SettingsPrimitives)
			}
		})
	}

	async search(key: Primitives<SettingsKey>): Promise<SettingsPrimitives | null> {
		const cacheKey = `${this.cacheKeyPrefix}:key:${key}`
		return this.cache.getCachedData<SettingsPrimitives | null>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const setting = await this.model.findByPk(key)
				return setting ? (setting.get({ plain: true }) as SettingsPrimitives) : null
			}
		})
	}

	async save(setting: SettingsPrimitives): Promise<void> {
		// upsert se encarga de insertar o actualizar si la clave primaria ya existe.
		await this.model.upsert(setting)
	}

	async saveMultiple(settings: SettingsPrimitives[]): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			// Usamos Promise.all para ejecutar todas las operaciones de upsert en paralelo dentro de la transacción.
			await Promise.all(
				settings.map(async setting => {
					await this.model.upsert(setting, { transaction })
				})
			)

			// Si todas las operaciones tienen éxito, confirmamos la transacción.
			await transaction.commit()
		} catch (error) {
			// Si alguna operación falla, revertimos todos los cambios.
			await transaction.rollback()
			// Propagamos el error para que la capa superior pueda manejarlo.
			throw error
		}
	}

	/**
	 * @method invalidateAppSettingsCache
	 * @description Invalidates all app settings-related cache entries.
	 * Implements AppSettingsCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<SettingsKey> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}
