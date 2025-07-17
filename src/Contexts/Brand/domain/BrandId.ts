import { Uuid } from '../../Shared/domain/value-object/Uuid'

/**
 * @class BrandId
 * @extends Uuid
 * @description Represents the Value Object for a Brand's unique identifier.
 * Ensures that brand IDs are valid UUIDs.
 */
export class BrandId extends Uuid {}
