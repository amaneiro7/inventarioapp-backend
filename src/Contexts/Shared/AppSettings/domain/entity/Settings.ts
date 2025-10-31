import { SettingsDescription } from '../valueObject/SettingsDescription'
import { SettingsIsEditable } from '../valueObject/SettingsIsEditable'
import { SettingsKey } from '../valueObject/SettingsKey'
import { SettingsType } from '../valueObject/SettingsType'
import { SettingsValue } from '../valueObject/SettingsValue'
import { type Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsPrimitives } from './Settings.dto'

export class Settings {
	constructor(
		private readonly key: SettingsKey,
		private value: SettingsValue,
		private readonly type: SettingsType,
		private readonly description: SettingsDescription,
		private readonly isEditable: SettingsIsEditable
	) {}

	static fromPrimitives(primitives: SettingsPrimitives): Settings {
		return new Settings(
			new SettingsKey(primitives.key),
			new SettingsValue(primitives.value),
			new SettingsType(primitives.type),
			new SettingsDescription(primitives.description),
			new SettingsIsEditable(primitives.isEditable)
		)
	}

	toPrimitives(): SettingsPrimitives {
		return {
			key: this.keyValue,
			value: this.valueValue,
			type: this.typeValue,
			description: this.descriptionValue,
			isEditable: this.isEditableValue
		}
	}

	updateValue(newValue: string): void {
		if (!this.isEditableValue) {
			throw new Error(`Setting with key '${this.keyValue}' is not editable.`)
		}
		this.value = new SettingsValue(newValue)
	}

	get keyValue(): Primitives<SettingsKey> {
		return this.key.value
	}

	get valueValue(): Primitives<SettingsValue> {
		return this.value.value
	}

	get typeValue(): Primitives<SettingsType> {
		return this.type.value
	}

	get descriptionValue(): Primitives<SettingsDescription> {
		return this.description.value
	}

	get isEditableValue(): Primitives<SettingsIsEditable> {
		return this.isEditable.value
	}
}
