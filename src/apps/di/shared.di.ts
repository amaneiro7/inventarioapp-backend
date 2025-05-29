import { asClass, type AwilixContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { CacheService } from '../../Contexts/Shared/domain/CacheService'
import { SequelizeConfig } from '../../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { PingService } from '../../Contexts/Device/Device/application/PingService'

export enum SharedDependencies {
	Logger = 'logger',
	Database = 'database',
	CacheRepository = 'cacheRepository',
	Cache = 'cache',
	PingService = 'pinSergice'
}

export const register = (container: AwilixContainer) => {
	container.register({
		logger: asClass(WinstonLogger),
		database: asClass(SequelizeConfig).singleton(),
		cacheRepository: asClass(RedisRepository).singleton(),
		cache: asClass(CacheService).singleton(),
		pingService: asClass(PingService)
	})
}
