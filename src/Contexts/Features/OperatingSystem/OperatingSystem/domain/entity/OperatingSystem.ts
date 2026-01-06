import { AggregateRoot } from '../../../../../Shared/domain/AggregateRoot'
import { OperatingSystemBuildNumber } from '../valueObject/OperatingSystemBuildNumber'
import { OperatingSystemId } from '../valueObject/OperatingSystemId'
import { OperatingSystemName } from '../valueObject/OperatingSystemName'
import { OperatingSystemVersion } from '../valueObject/OperatingSystemVersion'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemDto, type OperatingSystemPrimitives } from './OperatingSystem.dto'

/**
 * @description Represents the OperatingSystem domain entity.
 */
export class OperatingSystem extends AggregateRoot {
	constructor(
		private readonly id: OperatingSystemId,
		private readonly name: OperatingSystemName,
		private readonly buildNumber: OperatingSystemBuildNumber,
		private readonly version: OperatingSystemVersion
	) {
		super()
	}

	static fromPrimitives(primitives: OperatingSystemDto): OperatingSystem {
		return new OperatingSystem(
			new OperatingSystemId(primitives.id),
			new OperatingSystemName(primitives.name),
			new OperatingSystemBuildNumber(primitives.buildNumber),
			new OperatingSystemVersion(primitives.version)
		)
	}

	toPrimitives(): OperatingSystemPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			buildNumber: this.buildNumberValue,
			version: this.versionValue
		}
	}

	get idValue(): Primitives<OperatingSystemId> {
		return this.id.value
	}

	get nameValue(): Primitives<OperatingSystemName> {
		return this.name.value
	}
	get buildNumberValue(): Primitives<OperatingSystemBuildNumber> {
		return this.buildNumber.value
	}
	get versionValue(): Primitives<OperatingSystemVersion> {
		return this.version.value
	}
}
