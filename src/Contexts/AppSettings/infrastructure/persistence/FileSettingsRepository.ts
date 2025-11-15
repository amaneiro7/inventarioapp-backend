import * as fs from 'node:fs'
import * as path from 'node:path'
import { type SettingsPrimitives } from '../../domain/entity/Settings.dto'
import { type SettingsRepository } from '../../domain/repository/SettingsRepository'
import { type SettingsKey } from '../../domain/valueObject/SettingsKey'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class FileSettingsRepository implements SettingsRepository {
	private readonly filePath = path.join(__dirname, 'settings.json')
	private settings: Map<string, SettingsPrimitives> = new Map()

	constructor() {
		this.loadSettingsFromFile()
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
		return Array.from(this.settings.values())
	}

	async search(key: Primitives<SettingsKey>): Promise<SettingsPrimitives | null> {
		const setting = this.settings.get(key)
		return setting ?? null
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
}
