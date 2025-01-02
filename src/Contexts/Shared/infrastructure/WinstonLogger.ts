import winston, { Logger as WindowsLoggerType } from 'winston'
import { type Logger } from '../domain/Logger'

enum Levels {
    DEBUG = 'debug',
    ERROR = 'error',
    INFO = "info"
}

export class WinstonLogger implements Logger {
    private logger: WindowsLoggerType

    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.prettyPrint(),
                winston.format.errors({ stack: true }),
                winston.format.splat(),
                winston.format.colorize(),
                winston.format.simple()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
                new winston.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
                new winston.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO }),
            ]
        })
    }
    debug(message: string): void {
        this.logger.log(Levels.DEBUG, message)
    }

    error(message: string | Error): void {
        this.logger.log(Levels.ERROR, message)
    }

    info(message: string): void {
        this.logger.log(Levels.INFO, message)
    }
}