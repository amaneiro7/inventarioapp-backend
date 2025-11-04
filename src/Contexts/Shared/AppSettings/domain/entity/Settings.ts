import { SettingNotEditableError } from '../errors/SettingNotEditableError'
import { SettingValueTypeError } from '../errors/SettingValueTypeError'
import { SettingsDescription } from '../valueObject/SettingsDescription'
import { SettingsIsEditable } from '../valueObject/SettingsIsEditable'
import { SettingsKey } from '../valueObject/SettingsKey'
import { SettingsGroup } from '../valueObject/SettingsGroup'
import { SettingsType, SettingsTypeEnum } from '../valueObject/SettingsType'
import { SettingsIsProtected } from '../valueObject/SettingsIsProtected'
import { SettingsValue } from '../valueObject/SettingsValue'
import { type Primitives } from '../../../domain/value-object/Primitives'
import { type SettingsPrimitives } from './Settings.dto'

export class Settings {
	constructor(
		private readonly key: SettingsKey,
		private value: SettingsValue,
		private readonly type: SettingsType,
		private readonly group: SettingsGroup,
		private readonly description: SettingsDescription,
		private readonly isEditable: SettingsIsEditable,
		private readonly isProtected: SettingsIsProtected
	) {
		this.validateValue(this.value)
	}

	static fromPrimitives(primitives: SettingsPrimitives): Settings {
		return new Settings(
			new SettingsKey(primitives.key),
			new SettingsValue(primitives.value),
			new SettingsType(primitives.type as SettingsTypeEnum),
			new SettingsGroup(primitives.group ?? ''),
			new SettingsDescription(primitives.description),
			new SettingsIsEditable(primitives.isEditable),
			new SettingsIsProtected(primitives.isProtected)
		)
	}

	toPrimitives(): SettingsPrimitives {
		return {
			key: this.keyValue,
			value: this.valueValue,
			type: this.typeValue,
			group: this.groupValue,
			description: this.descriptionValue,
			isEditable: this.isEditableValue,
			isProtected: this.isProtectedValue
		}
	}

	updateValue(newValue: string): void {
		if (!this.isEditableValue) {
			throw new SettingNotEditableError(this.keyValue)
		}
		const newSettingsValue = new SettingsValue(newValue)
		this.validateValue(newSettingsValue)
		this.value = newSettingsValue
	}

	private validateValue(value: SettingsValue): void {
		try {
			switch (this.type.value) {
				case SettingsTypeEnum.NUMBER:
					value.asNumber()
					break
				case SettingsTypeEnum.BOOLEAN:
					// asBoolean() always returns a boolean, so no validation needed here
					break
				case SettingsTypeEnum.JSON:
					value.asJson()
					break
				case SettingsTypeEnum.STRING:
					// All values are strings initially, so no validation needed
					break
			}
		} catch (error) {
			throw new SettingValueTypeError(this.keyValue, this.typeValue, value.value, error as Error)
		}
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
	get groupValue(): Primitives<SettingsGroup> {
		return this.group.value
	}

	get descriptionValue(): Primitives<SettingsDescription> {
		return this.description.value
	}

	get isEditableValue(): Primitives<SettingsIsEditable> {
		return this.isEditable.value
	}
	get isProtectedValue(): Primitives<SettingsIsProtected> {
		return this.isProtected.value
	}
}
