import { type Criteria } from '../../Contexts/Shared/domain/criteria/Criteria'

// To extend the Request type from Express, we need to use declaration merging.
declare global {
	namespace Express {
		export interface Request {
			/**
			 * @description Holds the converted Criteria object from the URL query parameters.
			 * This property is attached by the criteriaConverterMiddleware.
			 */
			criteria?: Criteria
		}
	}
}
