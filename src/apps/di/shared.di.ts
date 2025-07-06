import { asClass, type AwilixContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { CacheService } from '../../Contexts/Shared/domain/CacheService'
import { SequelizeConfig } from '../../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { PingService } from '../../Contexts/Shared/domain/Monitoring/application/PingService'
import { PingLogger } from '../../Contexts/Shared/domain/Monitoring/infra/PingLogger'

export enum SharedDependencies {
	Logger = 'logger',
	Database = 'database',
	CacheRepository = 'cacheRepository',
	Cache = 'cache',
	PingService = 'pingService',
	PingLogger = 'pingLogger'
}

export const register = (container: AwilixContainer) => {
	container.register({
		logger: asClass(WinstonLogger),
		database: asClass(SequelizeConfig).singleton(),
		cacheRepository: asClass(RedisRepository).singleton(),
		cache: asClass(CacheService).singleton(),
		pingService: asClass(PingService),
		pingLogger: asClass(PingLogger)
	})
}
