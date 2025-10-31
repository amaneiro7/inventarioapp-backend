import { Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsPrimitives } from '../entity/Settings.dto'
import { type SettingsKey } from '../valueObject/SettingsKey'

/**
 * @description Interfaz de repositorio para el agregado Setting.
 * Define el contrato para la persistencia de la configuración.
 */
export interface SettingsRepository {
	searchAll(): Promise<SettingsPrimitives[]>
	/**
	 * Busca una configuración por su clave única.
	 * @param key La clave de la configuración (e.g., 'PASSWORD_EXPIRY_DAYS').
	 * @returns Una promesa que resuelve con la entidad Setting o null.
	 */
	search(key: Primitives<SettingsKey>): Promise<SettingsPrimitives | null>

	/**
	 * Guarda o actualiza la entidad Setting.
	 * @param setting La entidad Setting a persistir.
	 * @returns Una promesa que resuelve cuando la configuración ha sido guardada.
	 */
	save(setting: SettingsPrimitives): Promise<void>
}
