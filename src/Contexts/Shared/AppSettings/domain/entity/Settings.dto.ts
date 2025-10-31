import { type Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsDescription } from '../valueObject/SettingsDescription'
import { type SettingsIsEditable } from '../valueObject/SettingsIsEditable'
import { type SettingsKey } from '../valueObject/SettingsKey'
import { type SettingsType } from '../valueObject/SettingsType'
import { type SettingsValue } from '../valueObject/SettingsValue'

export interface Settings {
	key: Primitives<SettingsKey>
	value: Primitives<SettingsValue>
	type: Primitives<SettingsType>
	description: Primitives<SettingsDescription>
	isEditable: Primitives<SettingsIsEditable>
}

export type SettingsPrimitives = Settings

export type SettingsDto = Settings
