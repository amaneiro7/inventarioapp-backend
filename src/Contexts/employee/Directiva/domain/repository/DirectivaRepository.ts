import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type DirectivaDto } from '../entity/Directiva.dto'

/**
 * @abstract
 * @class DirectivaRepository
 * @description Defines the contract for data persistence operations related to directiva entities.
 */
export abstract class DirectivaRepository extends GenericRepository<DirectivaDto> {}
