import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { SequelizeSettingsModel } from './SettingsSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type SettingsPrimitives } from '../../../domain/entity/Settings.dto'
import { type SettingsRepository } from '../../../domain/repository/SettingsRepository'
import { type SettingsKey } from '../../../domain/valueObject/SettingsKey'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class SequelizeSettingsRepository implements SettingsRepository {
	private readonly model = SequelizeSettingsModel
	private readonly cacheKeyPrefix = 'users'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	async searchAll(): Promise<SettingsPrimitives[]> {
		const cacheKey = `${this.cacheKeyPrefix}:all`
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
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const setting = await this.model.findByPk(key)
				return setting ? (setting.get({ plain: true }) as SettingsPrimitives) : null
			}
		})
	}

	async save(setting: SettingsPrimitives): Promise<void> {
		// upsert se encarga de insertar o actualizar si la clave primaria ya existe.
		await this.model.upsert(setting)
		await this.invalidateCache(setting.key)
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

			// Una vez confirmada la transacción, invalidamos la caché.
			await this.invalidateBulkCache(settings.map(s => s.key))
		} catch (error) {
			// Si alguna operación falla, revertimos todos los cambios.
			await transaction.rollback()
			// Propagamos el error para que la capa superior pueda manejarlo.
			throw error
		}
	}

	private async invalidateCache(key: string): Promise<void> {
		const cacheKeysToRemove: string[] = [
			`${this.cacheKeyPrefix}:all`, // Elimina el caché de 'searchAll'
			`${this.cacheKeyPrefix}:key:${key}` // Elimina el caché de 'search(key)'
		]

		// Ejecución concurrente de la eliminación de caché
		await Promise.all(cacheKeysToRemove.map(async cacheKey => this.cache.removeCachedData({ cacheKey })))
	}

	private async invalidateBulkCache(keys: string[]): Promise<void> {
		const cacheKeysToRemove: string[] = [`${this.cacheKeyPrefix}:all`]

		for (const key of keys) {
			cacheKeysToRemove.push(`${this.cacheKeyPrefix}:key:${key}`)
		}

		await Promise.all(cacheKeysToRemove.map(async cacheKey => this.cache.removeCachedData({ cacheKey })))
	}
}
