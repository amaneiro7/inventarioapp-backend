import { SettingDoesNotExistError } from '../domain/errors/SettingsDoesNotExistError'
import { SettingsKey } from '../domain/valueObject/SettingsKey'
import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

export class SettingsFinder {
	private readonly settingsRepository: SettingsRepository

	constructor(settingsRepository: SettingsRepository) {
		this.settingsRepository = settingsRepository
	}

	async run({ key }: { key: string }): Promise<SettingsPrimitives> {
		const settingKey = new SettingsKey(key).value
		const settings = await this.settingsRepository.search(settingKey)

		if (!settings) {
			throw new SettingDoesNotExistError(key)
		}

		return settings
	}
}
