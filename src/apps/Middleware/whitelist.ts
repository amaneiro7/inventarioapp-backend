import { config } from '../../Contexts/Shared/infrastructure/config'

/**
 * @description A list of allowed origins for CORS (Cross-Origin Resource Sharing).
 * Only requests from these domains will be permitted.
 */
const corsAllowedOrigins = config.corsAllowedOrigins || []
export const whitelist: (string | RegExp)[] = [
	'localhost',
	'10.0.12.106',
	'10.0.12.113',
	'10.0.11.111',
	'mandev',
	'srvdocker',
	'srvsoporte',
	'10.0.11.100',
	'srvdocker.corp.bnc.com',
	...corsAllowedOrigins
	// Carga orígenes dinámicos desde variables de entorno (separados por coma)
]
