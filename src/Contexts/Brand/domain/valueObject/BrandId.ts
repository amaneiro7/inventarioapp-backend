import { Uuid } from '../../../Shared/domain/value-object/Uuid'

/**
 * @class BrandId
 * @extends Uuid
 * @description Represents the Value Object for a Brand's unique identifier (UUID).
 * It ensures that brand IDs are always valid UUIDs.
 */
export class BrandId extends Uuid {}
