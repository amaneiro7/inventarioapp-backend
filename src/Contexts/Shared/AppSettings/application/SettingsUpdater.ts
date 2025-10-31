import { SettingsKey } from '../domain/valueObject/SettingsKey'
import { Settings } from '../domain/entity/Settings'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

/**
 * @description Caso de Uso para actualizar una configuración existente.
 * Es la capa de orquestación que llama al repositorio y al dominio.
 */
export class SettingsUpdater {
	private readonly repository: SettingsRepository

	constructor(repository: SettingsRepository) {
		this.repository = repository
	}

	/**
	 * @description Ejecuta la actualización de un valor de configuración.
	 * @param key La clave de la configuración a actualizar.
	 * @param value El nuevo valor a establecer.
	 * @throws {Error} Si la configuración no existe o la validación de dominio falla.
	 */
	async run(key: string, value: string): Promise<void> {
		const settingKey = new SettingsKey(key).value

		// 1. Recuperar la entidad (desde DB o archivo)
		const setting = await this.repository.search(settingKey)

		if (!setting) {
			throw new Error(`La configuración con la clave ${key} no existe.`)
		}

		const settingsEntity = Settings.fromPrimitives(setting)
		settingsEntity.updateValue(value)

		// 3. Persistir el cambio
		await this.repository.save(settingsEntity.toPrimitives())
	}
}
