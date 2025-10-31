import { type Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsDescription } from '../valueObject/SettingsDescription'
import { type SettingsIsEditable } from '../valueObject/SettingsIsEditable'
import { type SettingsKey } from '../valueObject/SettingsKey'
import { type SettingsType } from '../valueObject/SettingsType'
import { type SettingsValue } from '../valueObject/SettingsValue'

// We define a single primitive type that will be used for data transfer,
// persistence, and as the return type for application services.
export interface SettingsPrimitives {
	key: Primitives<SettingsKey>
	value: Primitives<SettingsValue>
	type: Primitives<SettingsType>
	description: Primitives<SettingsDescription>
	isEditable: Primitives<SettingsIsEditable>
}
