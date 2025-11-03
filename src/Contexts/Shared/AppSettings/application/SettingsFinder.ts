import { SettingDoesNotExistError } from '../domain/errors/SettingsDoesNotExistError'
import { SettingsKey } from '../domain/valueObject/SettingsKey'
import { SettingsValue } from '../domain/valueObject/SettingsValue'
import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

export class SettingsFinder {
	private readonly settingsRepository: SettingsRepository

	constructor(settingsRepository: SettingsRepository) {
		this.settingsRepository = settingsRepository
	}

	/**
	 * @description Busca una configuración y la devuelve en su forma primitiva.
	 * @param {string} key - La clave de la configuración a buscar.
	 * @returns {Promise<SettingsPrimitives>} El objeto de configuración primitivo.
	 * @throws {SettingDoesNotExistError} Si la configuración no se encuentra.
	 */
	async run({ key }: { key: string }): Promise<SettingsPrimitives> {
		const settingKey = new SettingsKey(key).value
		const settings = await this.settingsRepository.search(settingKey)

		if (!settings) {
			throw new SettingDoesNotExistError(key)
		}
		return settings
	}

	/**
	 * @description Busca una configuración y devuelve su valor como un booleano.
	 * @param {string} key - La clave de la configuración.
	 * @param {boolean} fallback - Un valor por defecto si la configuración no se encuentra.
	 * @returns {Promise<boolean>} El valor booleano de la configuración o el valor por defecto.
	 */
	async findAsBoolean({ key, fallback }: { key: string; fallback: boolean }): Promise<boolean> {
		try {
			const setting = await this.run({ key })
			return new SettingsValue(setting.value).asBoolean()
		} catch {
			return fallback
		}
	}

	async findAsNumber({ key, fallback }: { key: string; fallback: number }): Promise<number> {
		try {
			const setting = await this.run({ key })
			return new SettingsValue(setting.value).asNumber()
		} catch {
			return fallback
		}
	}

	async findAsJson<T>({ key, fallback }: { key: string; fallback: T }): Promise<T> {
		try {
			const setting = await this.run({ key })
			return new SettingsValue(setting.value).asJson()
		} catch {
			return fallback
		}
	}
}
