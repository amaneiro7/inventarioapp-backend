import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

export class SettingsFinderAll {
	private readonly settiingsRepository: SettingsRepository

	constructor(settiingsRepository: SettingsRepository) {
		this.settiingsRepository = settiingsRepository
	}

	async run(): Promise<SettingsPrimitives[]> {
		return await this.settiingsRepository.searchAll()
	}
}
