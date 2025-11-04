import { type Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsDescription } from '../valueObject/SettingsDescription'
import { type SettingsGroup } from '../valueObject/SettingsGroup'
import { type SettingsIsEditable } from '../valueObject/SettingsIsEditable'
import { type SettingsIsProtected } from '../valueObject/SettingsIsProtected'
import { type SettingsKey } from '../valueObject/SettingsKey'
import { type SettingsName } from '../valueObject/SettingsName'
import { type SettingsType } from '../valueObject/SettingsType'
import { type SettingsValue } from '../valueObject/SettingsValue'

// We define a single primitive type that will be used for data transfer,
// persistence, and as the return type for application services.
export interface SettingsPrimitives {
	key: Primitives<SettingsKey>
	value: Primitives<SettingsValue>
	type: Primitives<SettingsType>
	name: Primitives<SettingsName>
	description: Primitives<SettingsDescription>
	group?: Primitives<SettingsGroup>
	isEditable: Primitives<SettingsIsEditable>
	isProtected: Primitives<SettingsIsProtected>
}

export type SettingsDto = Omit<SettingsPrimitives, 'value'> & {
	value: string | number | boolean | object
}
