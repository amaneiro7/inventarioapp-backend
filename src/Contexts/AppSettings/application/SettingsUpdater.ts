import { SettingDoesNotExistError } from '../domain/errors/SettingsDoesNotExistError'
import { SettingsKey } from '../domain/valueObject/SettingsKey'
import { Settings } from '../domain/entity/Settings'
import { EventBus } from '../../Shared/domain/event/EventBus'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'

/**
 * @description Caso de Uso para actualizar una configuración existente.
 * Es la capa de orquestación que llama al repositorio y al dominio.
 */

interface UpdateSettingsParams {
	key: string
	value: string
}
export class SettingsUpdater {
	private readonly settingsRepository: SettingsRepository
	private readonly eventBus: EventBus

	constructor({ settingsRepository, eventBus }: { settingsRepository: SettingsRepository; eventBus: EventBus }) {
		this.settingsRepository = settingsRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Ejecuta la actualización de un valor de configuración.
	 * @param key La clave de la configuración a actualizar.
	 * @param value El nuevo valor a establecer.
	 * @throws {Error} Si la configuración no existe o la validación de dominio falla.
	 */
	async run({ key, value }: UpdateSettingsParams): Promise<void> {
		const settingKey = new SettingsKey(key).value

		// 1. Recuperar la entidad (desde DB o archivo)
		const setting = await this.settingsRepository.search(settingKey)

		if (!setting) {
			throw new SettingDoesNotExistError(key)
		}

		const settingsEntity = Settings.fromPrimitives(setting)
		settingsEntity.updateValue(value)

		// 3. Persistir el cambio
		await this.settingsRepository.save(settingsEntity.toPrimitives())
		// 4. Publicar el evento en el bus de eventos
		await this.eventBus.publish(settingsEntity.pullDomainEvents())
	}
}
