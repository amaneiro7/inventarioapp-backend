import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { OperatingSystemBuildNumber } from './OperatingSystemBuildNumber'
import { type OperatingSystemId } from './OperatingSystemId'
import { OperatingSystemName } from './OperatingSystemName'
import { type OperatingSystemVersion } from './OperatingSystemVersion'

/**
 * @interface OperatingSystem
 * @description Defines the core properties of an OperatingSystem entity.
 */
export interface OperatingSystem {
	id: Primitives<OperatingSystemId>
	name: Primitives<OperatingSystemName>
	buildNumber: Primitives<OperatingSystemBuildNumber>
	version: Primitives<OperatingSystemVersion>
}

/**
 * @type OperatingSystemPrimitives
 * @description Represents the primitive, serializable state of an OperatingSystem entity.
 */
export type OperatingSystemPrimitives = OperatingSystem

/**
 * @type OperatingSystemDto
 * @description Represents a Data Transfer Object (DTO) for the OperatingSystem entity.
 */
export type OperatingSystemDto = OperatingSystem
