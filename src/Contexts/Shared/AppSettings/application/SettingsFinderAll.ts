import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

export class SettingsFinderAll {
	private readonly settingsRepository: SettingsRepository

	constructor({ settingsRepository }: { settingsRepository: SettingsRepository }) {
		this.settingsRepository = settingsRepository
	}

	async run(): Promise<SettingsPrimitives[]> {
		return await this.settingsRepository.searchAll()
	}
}
