import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

const MASK_VALUE = '' // El valor para enmascarar se mantiene

export class SettingsFinderAll {
	private readonly settingsRepository: SettingsRepository

	constructor({ settingsRepository }: { settingsRepository: SettingsRepository }) {
		this.settingsRepository = settingsRepository
	}

	async run(): Promise<SettingsPrimitives[]> {
		const settings = await this.settingsRepository.searchAll()

		// Enmascarar valores sensibles antes de devolverlos a la capa de la API
		return settings.map(setting => {
			// Ahora la lógica se basa en el campo 'isProtected' de la base de datos
			if (setting.isProtected) {
				return { ...setting, value: MASK_VALUE }
			}
			return setting
		})
	}
}
