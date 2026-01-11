import * as fs from 'node:fs'
import * as path from 'node:path'
import { GenericCacheInvalidator } from '../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { type SettingsPrimitives } from '../../domain/entity/Settings.dto'
import { type SettingsRepository } from '../../domain/repository/SettingsRepository'
import { type SettingsKey } from '../../domain/valueObject/SettingsKey'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type AppSettingsCacheInvalidator } from '../../domain/repository/AppSettingsCacheInvalidator'

export class FileSettingsRepository implements SettingsRepository, AppSettingsCacheInvalidator {
	private readonly filePath = path.join(__dirname, 'settings.json')
	private settings: Map<string, SettingsPrimitives> = new Map()
	private readonly cacheKeyPrefix = 'appSettings'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		this.loadSettingsFromFile()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	private loadSettingsFromFile(): void {
		try {
			const data = fs.readFileSync(this.filePath, 'utf-8')
			const settingsArray: SettingsPrimitives[] = JSON.parse(data)
			this.settings = new Map(settingsArray.map(setting => [setting.key, setting]))
		} catch (error) {
			// Si el archivo no existe o hay un error de parseo, empezamos con un mapa vacío.
			// Se creará al guardar la primera configuración.
			console.error('Could not load settings file:', error)
			this.settings = new Map()
		}
	}

	private async persist(): Promise<void> {
		const settingsArray = Array.from(this.settings.values())
		fs.writeFileSync(this.filePath, JSON.stringify(settingsArray, null, 2), 'utf-8')
	}

	async searchAll(): Promise<SettingsPrimitives[]> {
		return this.cache.getCachedData<SettingsPrimitives[]>({
			cacheKey: `${this.cacheKeyPrefix}:lists`,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				return Array.from(this.settings.values())
			}
		})
	}

	async search(key: Primitives<SettingsKey>): Promise<SettingsPrimitives | null> {
		const setting = this.settings.get(key)
		return this.cache.getCachedData<SettingsPrimitives | null>({
			cacheKey: `${this.cacheKeyPrefix}:key:${key}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				return setting ?? null
			}
		})
	}

	async save(setting: SettingsPrimitives): Promise<void> {
		this.settings.set(setting.key, setting)
		await this.persist()
	}

	async saveMultiple(settings: SettingsPrimitives[]): Promise<void> {
		for (const setting of settings) {
			this.settings.set(setting.key, setting)
		}
		await this.persist()
	}

	/**
	 * @method invalidateAppSettingsCache
	 * @description Invalidates all app settings-related cache entries.
	 * Implements AppSettingsCacheInvalidator interface.
	 */
	async invalidate(key?: Primitives<SettingsKey>): Promise<void> {
		await this.cacheInvalidator.invalidate(key)
	}
}
