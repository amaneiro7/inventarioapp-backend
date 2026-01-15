import { SettingsKey } from '../domain/valueObject/SettingsKey'
import { SettingDoesNotExistError } from '../domain/errors/SettingsDoesNotExistError'
import { Settings } from '../domain/entity/Settings'
import { type EventBus } from '../../Shared/domain/event/EventBus'
import { type SettingsRepository } from '../domain/repository/SettingsRepository'
import { type SettingsPrimitives } from '../domain/entity/Settings.dto'
import { type DomainEvent } from '../../Shared/domain/event/DomainEvent'

interface UpdateSettingsBulkParams {
	settings: { key: string; value: string }[]
}

/**
 * @description Caso de Uso para actualizar múltiples configuraciones en una sola operación.
 */
export class SettingsUpdaterBulk {
	private readonly settingsRepository: SettingsRepository
	private readonly eventBus: EventBus

	constructor({ settingsRepository, eventBus }: { settingsRepository: SettingsRepository; eventBus: EventBus }) {
		this.settingsRepository = settingsRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Ejecuta la actualización masiva de configuraciones.
	 * @param settings Un array de objetos con la clave y el nuevo valor.
	 * @throws {SettingDoesNotExistError} Si alguna de las configuraciones no existe.
	 */
	async run({ settings }: UpdateSettingsBulkParams): Promise<void> {
		const settingsToSave: SettingsPrimitives[] = []
		const eventsToPublish: DomainEvent[] = []
		for (const { key, value } of settings) {
			const settingKey = new SettingsKey(key).value
			const existingSetting = await this.settingsRepository.search(settingKey)

			if (!existingSetting) {
				throw new SettingDoesNotExistError(key)
			}

			const settingsEntity = Settings.fromPrimitives(existingSetting)
			settingsEntity.updateValue(value)
			eventsToPublish.push(...settingsEntity.pullDomainEvents())

			settingsToSave.push(settingsEntity.toPrimitives())
		}

		await this.settingsRepository.saveMultiple(settingsToSave)
		await this.eventBus.publish(eventsToPublish)
	}
}
